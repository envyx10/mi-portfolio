import { useRef, useEffect } from "react";

export function HeroImage() {
  const rightContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (rightContentRef.current) {
      setTimeout(() => {
        rightContentRef.current?.classList.remove('opacity-0', 'translate-y-[30px]');
      }, 200);
    }
  }, []);

  return (
    <div
      ref={rightContentRef}
      className="flex justify-center lg:justify-end opacity-0 translate-y-[30px] transition-all duration-1200 ease-out"
    >
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full blur-2xl opacity-30 scale-110"></div>
        <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-white/10 bg-gradient-to-br from-purple-900/20 to-blue-900/20">
          <img
            src="/yo.jpg"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
