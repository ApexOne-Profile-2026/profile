"use client";

import { useCallback, useEffect, useState } from "react";

import { TechStackIcon } from "@/src/components/icons/TechStackIcon";
import type { TechStackName } from "@/src/data/tech-stack";

const heroTechIcons = [
  "Next.js",
  "React.js",
  "Node.js",
  "AWS",
  "Docker",
  "Flutter",
  "Laravel",
  "Vue.js",
  "PostgreSQL",
  "Tailwind CSS",
  "Figma",
  "Git",
  "Odoo",
  "Android",
  "iOS",
  "POS",
] as const satisfies readonly TechStackName[];

const PARTICLE_COUNT = 14;

type Particle = {
  id: number;
  name: TechStackName;
  x: number;
  y: number;
  duration: number;
  delay: number;
  driftX: number;
  driftY: number;
  key: number;
};

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

/**
 * Place chips on a wide orbit around the logo core.
 * Avoids the center so labels stay visible around the edges.
 */
function randomOrbitPosition(id: number) {
  // Seed each slot toward a different sector for even left/right/top/bottom coverage.
  const sector = (id / PARTICLE_COUNT) * Math.PI * 2;
  const angle = sector + (Math.random() - 0.5) * 0.7;
  const radius = 0.58 + Math.random() * 0.36;

  return {
    x: clamp(50 + Math.cos(angle) * radius * 50, 3, 97),
    y: clamp(50 + Math.sin(angle) * radius * 50, 5, 95),
  };
}

function createParticle(id: number, key = 0): Particle {
  const { x, y } = randomOrbitPosition(id);
  return {
    id,
    name: heroTechIcons[Math.floor(Math.random() * heroTechIcons.length)],
    x,
    y,
    duration: 5.2 + Math.random() * 2.8,
    delay: key === 0 ? id * 0.28 + Math.random() * 1.2 : 0.15 + Math.random() * 0.7,
    driftX: (Math.random() - 0.5) * 52,
    driftY: (Math.random() - 0.5) * 52,
    key,
  };
}

interface HeroTechAmbientProps {
  className?: string;
  size?: "default" | "large";
}

export function HeroTechAmbient({ className = "", size = "default" }: HeroTechAmbientProps) {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [reducedMotion, setReducedMotion] = useState(false);
  const iconClass = size === "large" ? "h-4 w-4 sm:h-[1.125rem] sm:w-[1.125rem]" : "h-3.5 w-3.5";
  const labelClass = size === "large" ? "text-xs sm:text-[0.8rem]" : "text-[0.7rem]";
  const gapClass = size === "large" ? "gap-2" : "gap-1.5";

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReducedMotion(media.matches);
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    setParticles(Array.from({ length: PARTICLE_COUNT }, (_, id) => createParticle(id)));
  }, []);

  const respawn = useCallback((id: number) => {
    setParticles((current) =>
      current.map((particle) =>
        particle.id === id ? createParticle(id, particle.key + 1) : particle,
      ),
    );
  }, []);

  if (reducedMotion || particles.length === 0) {
    return null;
  }

  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 z-0 overflow-visible ${className}`}
    >
      {particles.map((particle) => (
        <span
          key={`${particle.id}-${particle.key}`}
          className="absolute"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            transform: "translate(-50%, -50%)",
          }}
        >
          <span
            className={`animate-tech-ambient inline-flex items-center ${gapClass}`}
            style={{
              animationDuration: `${particle.duration}s`,
              animationDelay: `${particle.delay}s`,
              ["--tech-drift-x" as string]: `${particle.driftX}px`,
              ["--tech-drift-y" as string]: `${particle.driftY}px`,
            }}
            onAnimationEnd={(event) => {
              if (event.target === event.currentTarget) {
                respawn(particle.id);
              }
            }}
          >
            <TechStackIcon name={particle.name} className={`shrink-0 drop-shadow-[0_1px_2px_rgba(15,23,42,0.35)] ${iconClass}`} />
            <span
              className={`whitespace-nowrap leading-none font-semibold tracking-tight text-slate-800 drop-shadow-[0_1px_1px_rgba(255,255,255,0.65)] ${labelClass}`}
            >
              {particle.name}
            </span>
          </span>
        </span>
      ))}
    </div>
  );
}
