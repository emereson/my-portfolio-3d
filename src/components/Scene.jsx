import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Model } from './Model';
import { Environment, ScrollControls } from '@react-three/drei';

const Scene = () => {
  const screenWidth = window.innerWidth;
  console.log(screenWidth);
  return (
    <Canvas camera={{ fov: screenWidth < 600 ? 50 : 30, position: [0, 0.5, 0.5] }}>
      <ScrollControls pages={4}>
        <Model />
      </ScrollControls>
      {/* Luz ambiental dorada */}
      <ambientLight intensity={5} />
      {/* Luz direccional dorada */}
      <directionalLight intensity={15} color={'#eadb97'} position={[0, 0.1, 0]} />
      <directionalLight intensity={10} color={'#eadb97'} position={[0, -0.1, -0.1]} />

      {/* Descomenta esto si tienes un archivo HDR con tonos dorados */}
      {/* <Environment files={'/models/12.hdr'} /> */}
    </Canvas>
  );
};

export default Scene;
