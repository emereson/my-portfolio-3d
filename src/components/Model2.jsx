import React, { useEffect, useLayoutEffect, useRef } from 'react';
import { useGLTF, OrbitControls, useScroll, useAnimations, useTexture } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import gsap from 'gsap';
import * as THREE from 'three';

export function Model2(props) {
  const group = useRef();
  const texture = useTexture('./1.jpeg');
  const { nodes, materials, animations } = useGLTF('/models/macbook.glb');
  const { actions } = useAnimations(animations, group);

  const controls = useRef();
  const camera = useThree((state) => state.camera);

  const page_1_ref = useRef();
  const page_2_ref = useRef();
  const page_3_ref = useRef();
  const page_4_ref = useRef();
  const page_5_ref = useRef();

  const pointer_1_ref = useRef();
  const pointer_2_ref = useRef();
  const next_1_ref = useRef();

  const screenWidth = window.innerWidth;

  useLayoutEffect(() => {
    page_1_ref.current = document.getElementById('page-1');
    page_2_ref.current = document.getElementById('page-2');
    page_3_ref.current = document.getElementById('page-3');
    page_4_ref.current = document.getElementById('page-4');
    page_5_ref.current = document.getElementById('page-5');

    pointer_1_ref.current = document.getElementById('pointer-1');
    pointer_2_ref.current = document.getElementById('pointer-2');
    next_1_ref.current = document.getElementById('next_1');
  }, []);

  useEffect(() => {
    if (group.current) {
      const mesh = group.current.getObjectByName('Object_7');
      if (mesh) {
        mesh.material = new THREE.MeshStandardMaterial({
          map: texture,
          roughness: 0.2,
          metalness: 0.9,
        });
      }
    }
  }, [texture]);

  useEffect(() => {
    const timeline = gsap.timeline();

    timeline.to(camera.position, {
      y: 0.2,
      x: 0,
      z: 1,
      duration: 1,
      onStart: () => {
        actions.Animation.play();
        actions.Animation.timeScale = 4.5;
      },
      onComplete: () => {
        gsap.to(camera, {
          fov: screenWidth < 600 ? 48 : 23,
          duration: 0.5,
          onUpdate: () => camera.updateProjectionMatrix(),
        });
        actions.Animation.paused = true;
        gsap.to(camera.position, {
          x: -0.5,
          duration: 0.5,
        });

        gsap.to(page_1_ref.current, {
          opacity: 1,
          transform: 'translateY(0)',
          duration: 0.5,
        });
      },
    });
    timeline.to(controls.current.target, {
      x: screenWidth < 600 ? 0 : 0.13,
      y: screenWidth < 600 ? 0.23 : 0.1,
      duration: 0.5,
    });

    gsap.to(group.current.rotation, {
      y: screenWidth < 600 ? 0 : 0.6,
      duration: 0.5,
    });

    timeline.play();
  }, [actions, camera, texture]);

  return (
    <>
      <group ref={group} {...props} dispose={null}>
        <group name="Sketchfab_Scene">
          <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
            <group name="root">
              <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
                <group name="Bevels_2" position={[0, 0.008, -0.104]} scale={0.275}>
                  <mesh
                    name="Object_4"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_4.geometry}
                    material={materials.Black_Glass}
                  />
                  <mesh
                    name="Object_5"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_5.geometry}
                    material={materials.Black_Plastic}
                  />
                  <mesh
                    name="Object_6"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_6.geometry}
                    material={materials.Glass}
                  />
                  <mesh
                    name="Object_7"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_7.geometry}
                    material={null}
                  />
                  <mesh
                    name="Object_8"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_8.geometry}
                    material={materials.Space_Grey}
                  />
                  <mesh
                    name="Object_9"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_9.geometry}
                    material={materials['Space_Grey.001']}
                  />
                  <group
                    name="Empty_1"
                    position={[0, 0.001, 0]}
                    rotation={[-Math.PI, 0, 0]}
                    scale={[-0.039, 0.039, 0.039]}
                  >
                    <group
                      name="Camera_Light_0"
                      position={[0, 0.077, -0.044]}
                      rotation={[-1.192, 0, 0]}
                      scale={[-25.381, 25.381, 25.381]}
                    >
                      <mesh
                        name="Object_12"
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_12.geometry}
                        material={materials.Camera_Light}
                      />
                    </group>
                  </group>
                </group>
                <group name="Caps_Lock_Light_3" position={[0, -0.014, 0]} scale={0.275}>
                  <mesh
                    name="Object_14"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_14.geometry}
                    material={materials.Caps_Lock_Light}
                  />
                </group>
                <group
                  name="Macbook_Pro_4"
                  position={[0, 0.008, -0.104]}
                  rotation={[1.949, 0, 0]}
                  scale={0.275}
                >
                  <mesh
                    name="Object_16"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_16.geometry}
                    material={materials['Material.001']}
                  />
                </group>
                <group name="Main_Body_5" position={[0, -0.014, 0]} scale={0.275}>
                  <mesh
                    name="Object_18"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_18.geometry}
                    material={materials.Space_Grey}
                  />
                  <mesh
                    name="Object_19"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_19.geometry}
                    material={materials.Black_Plastic}
                  />
                  <mesh
                    name="Object_20"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_20.geometry}
                    material={materials.Black_Plastic}
                  />
                  <mesh
                    name="Object_21"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_21.geometry}
                    material={materials['Keys.001']}
                  />
                </group>
                <group name="Touch_Bar_6" position={[0, -0.014, 0]} scale={0.275}>
                  <mesh
                    name="Object_23"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_23.geometry}
                    material={materials.Black_Plastic}
                  />
                  <mesh
                    name="Object_24"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_24.geometry}
                    material={materials.Black_Glass}
                  />
                  <mesh
                    name="Object_25"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_25.geometry}
                    material={materials.Keys}
                  />
                </group>
                <group name="Touch_Bar_Shot_7" position={[0, -0.014, 0]} scale={0.275}>
                  <mesh
                    name="Object_27"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_27.geometry}
                    material={materials['Touch_Bar_Shot_2021-04-02_at_18.13.28']}
                  />
                </group>
                <group name="Keyboard_8" position={[0, -0.014, 0]} scale={0.275}>
                  <mesh
                    name="Object_29"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_29.geometry}
                    material={materials.Black_Plastic}
                  />
                  <mesh
                    name="Object_30"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_30.geometry}
                    material={materials.Keys}
                  />
                </group>
                <group name="Cube_9" position={[0, -0.014, 0]}>
                  <mesh
                    name="Object_32"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_32.geometry}
                    material={materials.Black_Plastic}
                  />
                </group>
                <group
                  name="Circle001_12"
                  position={[0.203, 0.008, -0.104]}
                  rotation={[0.011, -0.75, 1.274]}
                />
              </group>
            </group>
          </group>
        </group>
      </group>
      <OrbitControls enableZoom={false} ref={controls} target={[0, 0.1, 0]} />
    </>
  );
}

useGLTF.preload('/models/macbook.glb');
