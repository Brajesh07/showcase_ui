import React, { useEffect, useRef } from "react";

export interface ParticleSystemProps {
  count?: number;
  className?: string;
}

/** Simple canvas particle system for a subtle impossible background */
export const ParticleSystem: React.FC<ParticleSystemProps> = ({
  count = 60,
  className,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const particles = useRef<
    { x: number; y: number; vx: number; vy: number; r: number }[]
  >([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const DPR = window.devicePixelRatio || 1;
    const resize = () => {
      canvas.width = canvas.clientWidth * DPR;
      canvas.height = canvas.clientHeight * DPR;
      ctx.scale(DPR, DPR);
    };
    resize();

    const init = () => {
      particles.current = Array.from({ length: count }, () => ({
        x: Math.random() * canvas.clientWidth,
        y: Math.random() * canvas.clientHeight,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        r: Math.random() * 2 + 0.5,
      }));
    };
    init();

    let frame: number;
    const tick = () => {
      ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
      ctx.globalCompositeOperation = "lighter";
      particles.current.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.clientWidth) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.clientHeight) p.vy *= -1;
        ctx.beginPath();
        const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 4);
        g.addColorStop(0, "rgba(34,211,238,0.8)");
        g.addColorStop(1, "rgba(14,165,233,0)");
        ctx.fillStyle = g;
        ctx.arc(p.x, p.y, p.r * 4, 0, Math.PI * 2);
        ctx.fill();
      });
      frame = requestAnimationFrame(tick);
    };
    tick();
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
    };
  }, [count]);

  return (
    <canvas
      ref={canvasRef}
      className={className + " absolute inset-0 w-full h-full"}
    />
  );
};

export default ParticleSystem;
