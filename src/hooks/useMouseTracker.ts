import { useState, useEffect } from 'react';

/**
 * Hook personalizado para crear efectos de seguimiento del cursor en cards
 * Actualiza las variables CSS --mouse-x y --mouse-y para gradientes dinámicos
 */
export function useMouseTracker() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isClient) return;
    
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isClient) return;
    
    const card = e.currentTarget;
    card.style.setProperty("--mouse-x", "50%");
    card.style.setProperty("--mouse-y", "50%");
  };

  return {
    handleMouseMove,
    handleMouseLeave,
    isClient
  };
}
