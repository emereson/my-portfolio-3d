import React, { useEffect, useMemo, useRef, useState } from 'react';
import { ScrollControls } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import { Model } from './Model';
import { Model2 } from './Model2';

const SmokeParticles = ({ fontColor }) => {
  const particlesRef = useRef();
  const speedsRef = useRef();

  const particles = useMemo(() => {
    const temp = [];
    const speeds = [];
    for (let i = 0; i < 700; i++) {
      const x = (Math.random() - 0.1) * 2;
      const y = (Math.random() - 0.1) * 2;
      const z = (Math.random() - 0.1) * 2;
      temp.push(x, y, z);

      // Guardar velocidades aleatorias para cada partícula
      const speedX = (Math.random() - 0.5) * 0.01;
      const speedY = (Math.random() - 0.5) * 0.01;
      const speedZ = (Math.random() - 0.5) * 0.01;
      speeds.push(speedX, speedY, speedZ);
    }
    speedsRef.current = speeds;
    return new Float32Array(temp);
  }, []);

  useFrame(() => {
    if (particlesRef.current) {
      const positions = particlesRef.current.array;
      const speeds = speedsRef.current;
      for (let i = 0; i < positions.length; i += 3) {
        positions[i] += speeds[i]; // Mueve en X
        positions[i + 1] += speeds[i + 1]; // Mueve en Y
        positions[i + 2] += speeds[i + 2]; // Mueve en Z

        // Rebote de las partículas en los límites
        if (positions[i] > 1 || positions[i] < -1) speeds[i] *= -1;
        if (positions[i + 1] > 1 || positions[i + 1] < -1) speeds[i + 1] *= -1;
        if (positions[i + 2] > 1 || positions[i + 2] < -1) speeds[i + 2] *= -1;
      }
      particlesRef.current.needsUpdate = true;
    }
  });

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute
          ref={particlesRef}
          attach="attributes-position"
          array={particles}
          count={particles.length / 3}
          itemSize={3}
        />
      </bufferGeometry>
      <PointMaterial
        size={0.01}
        color={fontColor === 'gold' ? '#b9ad65' : '#d74141'}
        transparent
        opacity={1}
      />
    </points>
  );
};

const Scene = ({ fontColor }) => {
  const [ligthColor, setLigthColor] = useState('#faf1ba');

  useEffect(() => {
    if (fontColor === 'gold') {
      setLigthColor('#faf1ba');
    }
    if (fontColor === 'plate') {
      setLigthColor('#ffffff');
    }
    if (fontColor === 'blue') {
      setLigthColor('#8794af');
    }
    if (fontColor === 'red') {
      setLigthColor('#b59e9e');
    }
  }, [fontColor]);

  return (
    <Canvas camera={{ fov: window.innerWidth < 600 ? 50 : 30, position: [0, 0.5, 0.5] }}>
      <SmokeParticles fontColor={fontColor} />
      {window.innerWidth > 600 ? (
        <ScrollControls pages={4}>
          <Model fontColor={fontColor} />
        </ScrollControls>
      ) : (
        <Model2 />
      )}

      {/* Luz ambiental dorada */}
      <ambientLight intensity={5} />
      {/* Luz direccional dorada */}
      {/* <directionalLight intensity={15} position={[0, 0.1, 0.05]} /> */}
      <directionalLight intensity={12} position={[0, 0.1, 0.05]} castShadow color={ligthColor} />

      <directionalLight
        intensity={4}
        position={[-0.05, -0.1, -0.08]}
        castShadow
        color={ligthColor}
      />
      <directionalLight intensity={1} position={[-2, 1, -2]} castShadow color={ligthColor} />
      <directionalLight intensity={0.2} position={[0, 0.05, -0.2]} castShadow color={ligthColor} />
      <directionalLight
        intensity={0.1}
        position={[0.07, 0.03, -0.14]}
        castShadow
        color={ligthColor}
      />

      {/* Descomenta esto si tienes un archivo HDR con tonos dorados */}
      {/* <Environment files={'/models/12.hdr'} /> */}
    </Canvas>
  );
};

export default Scene;
