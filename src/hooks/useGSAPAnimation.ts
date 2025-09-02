import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Registrar plugin una sola vez
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export function useGSAPAnimation() {
  const contextRef = useRef<gsap.Context | null>(null);

  useEffect(() => {
    // Crear contexto GSAP para evitar conflictos
    contextRef.current = gsap.context(() => {});
    
    return () => {
      // Cleanup automático del contexto
      contextRef.current?.revert();
    };
  }, []);

  const animateCards = (
    selector: string,
    containerRef: React.RefObject<HTMLElement>,
    options?: {
      stagger?: number;
      duration?: number;
      delay?: number;
      startY?: number;
    }
  ) => {
    if (!containerRef.current || !contextRef.current) return;

    const {
      stagger = 0.15,
      duration = 0.6,
      delay = 0,
      startY = 50
    } = options || {};

    contextRef.current.add(() => {
      const cards = containerRef.current!.querySelectorAll(selector);
      
      // Estado inicial limpio
      gsap.set(cards, { 
        opacity: 0, 
        y: startY,
        clearProps: "transform"
      });
      
      // Timeline con ScrollTrigger
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          end: "bottom 15%",
          toggleActions: "play none none reverse"
        }
      });

      tl.to(cards, {
        opacity: 1,
        y: 0,
        duration,
        delay,
        stagger,
        ease: "power2.out",
        clearProps: "transform",
        onComplete: () => {
          // Limpiar estilos inline al completar
          cards.forEach(card => {
            (card as HTMLElement).style.removeProperty('transform');
            (card as HTMLElement).style.removeProperty('opacity');
          });
        }
      });
    });
  };

  const fadeInUp = (
    elementRef: React.RefObject<HTMLElement>,
    options?: {
      duration?: number;
      delay?: number;
      y?: number;
    }
  ) => {
    if (!elementRef.current || !contextRef.current) return;

    const { duration = 0.8, delay = 0, y = 30 } = options || {};

    contextRef.current.add(() => {
      gsap.fromTo(elementRef.current, 
        { opacity: 0, y },
        {
          opacity: 1,
          y: 0,
          duration,
          delay,
          ease: "power3.out",
          clearProps: "transform"
        }
      );
    });
  };

  return { animateCards, fadeInUp };
}
