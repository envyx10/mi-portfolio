import * as THREE from 'three';

// Ashima 3D simplex noise (MIT)
const NOISE = `
vec3 mod289(vec3 x){return x-floor(x*(1./289.))*289.;}
vec4 mod289(vec4 x){return x-floor(x*(1./289.))*289.;}
vec4 permute(vec4 x){return mod289(((x*34.)+1.)*x);}
vec4 taylorInvSqrt(vec4 r){return 1.79284291400159-.85373472095314*r;}
float snoise(vec3 v){const vec2 C=vec2(1./6.,1./3.);const vec4 D=vec4(0.,.5,1.,2.);vec3 i=floor(v+dot(v,C.yyy));vec3 x0=v-i+dot(i,C.xxx);vec3 g=step(x0.yzx,x0.xyz);vec3 l=1.-g;vec3 i1=min(g.xyz,l.zxy);vec3 i2=max(g.xyz,l.zxy);vec3 x1=x0-i1+C.xxx;vec3 x2=x0-i2+C.yyy;vec3 x3=x0-D.yyy;i=mod289(i);vec4 p=permute(permute(permute(i.z+vec4(0.,i1.z,i2.z,1.))+i.y+vec4(0.,i1.y,i2.y,1.))+i.x+vec4(0.,i1.x,i2.x,1.));float n_=.142857142857;vec3 ns=n_*D.wyz-D.xzx;vec4 j=p-49.*floor(p*ns.z*ns.z);vec4 x_=floor(j*ns.z);vec4 y_=floor(j-7.*x_);vec4 x=x_*ns.x+ns.yyyy;vec4 y=y_*ns.x+ns.yyyy;vec4 h=1.-abs(x)-abs(y);vec4 b0=vec4(x.xy,y.xy);vec4 b1=vec4(x.zw,y.zw);vec4 s0=floor(b0)*2.+1.;vec4 s1=floor(b1)*2.+1.;vec4 sh=-step(h,vec4(0.));vec4 a0=b0.xzyw+s0.xzyw*sh.xxyy;vec4 a1=b1.xzyw+s1.xzyw*sh.zzww;vec3 p0=vec3(a0.xy,h.x);vec3 p1=vec3(a0.zw,h.y);vec3 p2=vec3(a1.xy,h.z);vec3 p3=vec3(a1.zw,h.w);vec4 norm=taylorInvSqrt(vec4(dot(p0,p0),dot(p1,p1),dot(p2,p2),dot(p3,p3)));p0*=norm.x;p1*=norm.y;p2*=norm.z;p3*=norm.w;vec4 m=max(.6-vec4(dot(x0,x0),dot(x1,x1),dot(x2,x2),dot(x3,x3)),0.);m=m*m;return 42.*dot(m*m,vec4(dot(p0,x0),dot(p1,x1),dot(p2,x2),dot(p3,x3)));}
`;

const VERT = NOISE + `
uniform float uT; uniform vec2 uMouse; uniform float uPx;
varying float vD;
void main(){
  vec3 n=normalize(position);
  float d=snoise(n*1.5+vec3(uT*.22))*.55+snoise(n*4.2+vec3(0.,uT*.5,0.))*.18;
  d+=max(dot(n,normalize(vec3(uMouse*1.6,.9))),0.)*.35;
  vD=d;
  vec4 mv=modelViewMatrix*vec4(position+n*d*.55,1.);
  gl_PointSize=uPx*(1.2+d*1.4)*(6./-mv.z);
  gl_Position=projectionMatrix*mv;
}`;

const FRAG = `
uniform vec3 uBone; uniform vec3 uAcc; varying float vD;
void main(){
  vec2 c=gl_PointCoord-.5; if(dot(c,c)>.25) discard;
  vec3 col=mix(uBone*.5,uBone,smoothstep(-.4,.3,vD));
  col=mix(col,uAcc,smoothstep(.36,.55,vD));
  gl_FragColor=vec4(col,1.);
}`;

export function mountSphere(canvas: HTMLCanvasElement) {
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setPixelRatio(dpr);

  const css = getComputedStyle(document.documentElement);
  const uniforms = {
    uT: { value: 0 },
    uMouse: { value: new THREE.Vector2() },
    uPx: { value: 1.6 * dpr },
    uBone: { value: new THREE.Color(css.getPropertyValue('--bone').trim() || '#ECE9E1') },
    uAcc: { value: new THREE.Color(css.getPropertyValue('--acc').trim() || '#FF3B00') },
  };

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(35, 1, 0.1, 100);
  camera.position.z = 7.5;
  const points = new THREE.Points(
    new THREE.SphereGeometry(1.7, 180, 120),
    new THREE.ShaderMaterial({ uniforms, vertexShader: VERT, fragmentShader: FRAG }),
  );
  scene.add(points);

  const resize = () => {
    const { clientWidth: w, clientHeight: h } = canvas;
    if (!w || !h) return;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    points.position.set(w > 900 ? -0.2 : 0, w > 900 ? 0.2 : 0.5, 0);
  };
  new ResizeObserver(resize).observe(canvas);
  resize();

  const target = new THREE.Vector2();
  window.addEventListener('pointermove', (e) => {
    target.set((e.clientX / window.innerWidth) * 2 - 1, -((e.clientY / window.innerHeight) * 2 - 1));
  });

  // ponytail: one rAF loop, paused off-screen via IntersectionObserver
  let visible = true;
  new IntersectionObserver((entries) => (visible = entries.some((e) => e.isIntersecting))).observe(canvas);
  const still = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const t0 = performance.now();

  const frame = () => {
    if (visible) {
      const t = (performance.now() - t0) / 1000;
      uniforms.uT.value = t;
      uniforms.uMouse.value.lerp(target, 0.05);
      points.rotation.set(Math.sin(t * 0.1) * 0.2, t * 0.08, 0);
      renderer.render(scene, camera);
    }
    if (!still) requestAnimationFrame(frame);
  };
  frame();
}
