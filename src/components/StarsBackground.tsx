"use client";
import { useCallback } from "react";
import { Engine } from "@tsparticles/engine";
import { loadStarsPreset } from "@tsparticles/preset-stars";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import type { ISourceOptions } from "@tsparticles/engine";
import React from "react";

export default function StarsBackground() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadStarsPreset(engine);
  }, []);

  // Initialize the particles engine
  const [init, setInit] = React.useState(false);

  React.useEffect(() => {
    initParticlesEngine(async (engine) => {
      await particlesInit(engine);
      setInit(true);
    });
  }, []);

  const options: ISourceOptions = {
    preset: "stars",
    seed: 42,
    background: {
      color: "transparent",
    },
    fullScreen: {
      enable: true,
      zIndex: -1, // Ensures it stays behind other content
    },
    particles: {
      number: {
        value: 100,
      },
      move: {
        enable: true,
        speed: 0.5,
      },
      opacity: {
        value: { min: 0.1, max: 0.4 },
        animation: {
          enable: true,
          speed: 0.8,
        },
      },
      size: {
        value: { min: 0.5, max: 1.5 },
      },
    },
  };

  if (!init) return null; // Don't render until initialized

  return (
    <Particles
      id="tsparticles"
      options={options}
      className="fixed inset-0 -z-10"
    />
  );
}
