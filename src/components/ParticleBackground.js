import React from "react";
import Particles from "react-tsparticles";

export default function ParticlesBackground() {
  return (
    <Particles
      options={{
        background: {
          color: "#0f172a"
        },
        particles: {
          number: {
            value: 80
          },
          size: {
            value: 3
          },
          move: {
            speed: 1
          },
          links: {
            enable: true,
            color: "#38bdf8"
          },
          color: {
            value: "#38bdf8"
          }
        }
      }}
    />
  );
}