import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Model } from './Model';
import { Environment, ScrollControls } from '@react-three/drei';

const Scene = () => {
  return (
    <Canvas camera={{ fov: 30, position: [0, 0.5, 0.5] }}>
      <ScrollControls pages={4} damping={0.25}>
        <Model />
      </ScrollControls>
      <ambientLight intensity={6} />
      <Environment files={'/models/12.hdr'} />
    </Canvas>
  );
};

export default Scene;
