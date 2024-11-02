// src/components/ParticleBackground.jsx
import React from 'react';
import Particles from 'react-tsparticles';

function ParticleBackground() {
  return (
    <Particles
      options={{
        background: {
          color: {
            value: "transparent",
          },
        },
        particles: {
          number: {
            value: 80,
            density: {
              enable: true,
              value_area: 800,
            },
          },
          color: {
            value: "#64ffda",
          },
          links: {
            enable: true,
            color: "#64ffda",
            opacity: 0.3,
          },
          move: {
            enable: true,
            speed: 2,
          },
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "repulse",
            },
          },
        },
      }}
    />
  );
}

export default ParticleBackground;