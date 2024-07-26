'use client';
import { type ISourceOptions } from '@tsparticles/engine';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import { useEffect, useState } from 'react';

const BackgroundAnimation = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options: ISourceOptions = {
    particles: {
      number: {
        value: 120,
        density: {
          enable: true,
        },
      },
      color: {
        value: ['#ffffff', '#fffacd'],
      },
      shape: {
        type: 'circle',
      },
      opacity: {
        value: {
          min: 0.2,
          max: 0.8,
        },
        animation: {
          enable: true,
          speed: 0.5,
          sync: false,
        },
      },
      size: {
        value: {
          min: 1,
          max: 4,
        },
        animation: {
          enable: true,
          speed: 1,
          sync: false,
        },
      },
      move: {
        enable: true,
        speed: {
          min: 0.1,
          max: 0.8,
        },
        direction: 'none',
        random: true,
        straight: false,
        outModes: 'out',
      },
    },
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: 'bubble',
        },
        onClick: {
          enable: true,
          mode: 'push',
        },
      },
      modes: {
        bubble: {
          distance: 200,
          size: 6,
          duration: 2,
          opacity: 1,
        },
        push: {
          quantity: 4,
        },
      },
    },
  };

  if (init) {
    return <Particles id="tsparticles" data-testid="tsparticles" options={options} />;
  }

  return <></>;
};

export default BackgroundAnimation;
