'use client';

import { useEffect, useRef, useState } from 'react';

export default function GradientBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mousePosition = useRef({ x: 0, y: 0 });
  const lastMousePosition = useRef({ x: 0, y: 0 });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      mousePosition.current = {
        x: e.clientX,
        y: e.clientY
      };
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Set initial mouse position to center of screen
    mousePosition.current = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2
    };
    lastMousePosition.current = { ...mousePosition.current };

    // Create transparent base
    const clearCanvas = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    };

    // Animation
    const animate = () => {
      // Smooth mouse movement with easing
      lastMousePosition.current.x += (mousePosition.current.x - lastMousePosition.current.x) * 0.08;
      lastMousePosition.current.y += (mousePosition.current.y - lastMousePosition.current.y) * 0.08;

      // Clear canvas to be transparent
      clearCanvas();

      // Create multiple overlapping gradients with different sizes and opacities for a soft glow effect
      const createGlowEffect = (size: number, opacity: number) => {
        const glow = ctx.createRadialGradient(
          lastMousePosition.current.x,
          lastMousePosition.current.y,
          0,
          lastMousePosition.current.x,
          lastMousePosition.current.y,
          size
        );

        glow.addColorStop(0, `rgba(255, 255, 255, ${opacity})`);
        glow.addColorStop(0.5, `rgba(250, 250, 250, ${opacity * 0.6})`);
        glow.addColorStop(1, 'rgba(245, 245, 245, 0)');

        ctx.fillStyle = glow;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      };

      // Apply multiple layers of glows with different sizes
      createGlowEffect(180, 0.15);  // Large outer glow
      createGlowEffect(120, 0.12);  // Medium glow
      createGlowEffect(60, 0.1);  // Small inner glow

      // Add a very subtle color tint that shifts based on position
      const colorGlow = ctx.createRadialGradient(
        lastMousePosition.current.x,
        lastMousePosition.current.y,
        0,
        lastMousePosition.current.x,
        lastMousePosition.current.y,
        150
      );

      // Very subtle color variations
      colorGlow.addColorStop(0, 'rgba(220, 240, 255, 0.08)');
      colorGlow.addColorStop(0.5, 'rgba(255, 240, 230, 0.05)');
      colorGlow.addColorStop(1, 'rgba(240, 240, 240, 0)');

      ctx.fillStyle = colorGlow;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isMounted]);

  if (!isMounted) return null;

  return (
    <canvas 
      ref={canvasRef} 
      id="gradient-canvas" 
      style={{ 
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
      }}
    />
  );
}