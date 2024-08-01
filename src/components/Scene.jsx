import React, { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { Model } from './Model';
import { ScrollControls } from '@react-three/drei';
import { Model2 } from './Model2';

const Scene = () => {
  // Usa `key` como una clave para reiniciar el componente Canvas
  return (
    <Canvas camera={{ fov: window.innerWidth < 600 ? 50 : 30, position: [0, 0.5, 0.5] }}>
      {window.innerWidth > 600 ? (
        <ScrollControls pages={4}>
          <Model />
        </ScrollControls>
      ) : (
        <Model2 />
      )}
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
