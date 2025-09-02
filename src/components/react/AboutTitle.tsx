import { useRef, useEffect } from "react";

interface AboutTitleProps {
  title: string;
  description: string;
}

export function AboutTitle({ title, description }: AboutTitleProps) {
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-12');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={titleRef} className="text-center mb-16 opacity-0 translate-y-12 transition-all duration-1000 ease-out">
      <h2 className="text-4xl md:text-5xl font-bold mb-6">
        <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">{title}</span>
      </h2>
      <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
        {description}
      </p>
    </div>
  );
}
