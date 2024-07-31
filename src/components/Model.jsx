import React, { useEffect, useLayoutEffect, useRef } from 'react';
import { useGLTF, OrbitControls, useScroll, useAnimations, useTexture } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import gsap from 'gsap';
import * as THREE from 'three';

export function Model(props) {
  const group = useRef();
  const texture = useTexture('./1.jpeg');
  const { nodes, materials, animations } = useGLTF('/models/macbook.glb');
  const { actions } = useAnimations(animations, group);
  const scrollControl = useScroll();
  const timeline = useRef();
  const controls = useRef();
  const camera = useThree((state) => state.camera);

  const page_1_ref = useRef();
  const page_2_ref = useRef();
  const page_3_ref = useRef();
  const page_4_ref = useRef();
  const page_5_ref = useRef();

  const pointer_1_ref = useRef();
  const pointer_2_ref = useRef();

  useLayoutEffect(() => {
    page_1_ref.current = document.getElementById('page-1');
    page_2_ref.current = document.getElementById('page-2');
    page_3_ref.current = document.getElementById('page-3');
    page_4_ref.current = document.getElementById('page-4');
    page_5_ref.current = document.getElementById('page-5');

    pointer_1_ref.current = document.getElementById('pointer-1');
    pointer_2_ref.current = document.getElementById('pointer-2');
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
          fov: 23,
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
      x: 0.2,
      duration: 0.5,
    });

    // Reproduce la animación automáticamente al cargar la página
    timeline.play();
  }, [actions, camera, texture]);

  useLayoutEffect(() => {
    timeline.current = gsap.timeline();
    let AnimationsData = [];

    const servicesAnimations = [
      {
        objectToAnimate: page_1_ref.current,
        properties: {
          opacity: 0,
          transform: 'translateY(-50%)',
          duration: 0.5,
        },
        timelinePoint: 0.5,
      },
      {
        objectToAnimate: group.current.rotation,
        properties: {
          x: 0.2,
          y: 0.2,
          z: 1,
          duration: 0.5,
        },
        timelinePoint: 0.3,
      },
      {
        objectToAnimate: controls.current.target,
        properties: {
          x: -0.25,
          z: 0,
          y: 0,
        },
        timelinePoint: 0.2,
      },
      {
        objectToAnimate: camera.position,
        properties: {
          x: 0,
          y: 0.1,
          z: 0.8,
          duration: 0.5,
        },
        timelinePoint: 0.5,
      },

      {
        objectToAnimate: page_2_ref.current,
        properties: {
          opacity: 1,
          display: 'flex',
          transform: 'translateY(0)',
          duration: 0.3,
        },
        timelinePoint: 1,
      },
      {
        objectToAnimate: pointer_1_ref.current,
        properties: {
          pointerEvents: 'visible',
        },
        timelinePoint: 1.1,
      },

      {
        objectToAnimate: camera,
        properties: {
          fov: 30,
          duration: 0.5,
          onUpdate: () => camera.updateProjectionMatrix(),
        },
        timelinePoint: 1,
      },
    ];
    AnimationsData = [...AnimationsData, ...servicesAnimations];

    const projectsAnimations = [
      {
        objectToAnimate: page_2_ref.current,
        properties: {
          opacity: 0,
          display: 'none',
          transform: 'translateY(-50%)',
          duration: 0.3,
        },
        timelinePoint: 1.8,
      },
      {
        objectToAnimate: pointer_2_ref.current,
        properties: {
          pointerEvents: 'none',
        },
        timelinePoint: 1.7,
      },
      {
        objectToAnimate: group.current.rotation,
        properties: {
          x: 1.6,
          y: -0.3,
          z: -1.8,
          duration: 0.5,
        },
        timelinePoint: 1.6,
      },
      {
        objectToAnimate: controls.current.target,
        properties: {
          x: 0.3,
          z: 0,
          y: 0,
          duration: 0.5,
        },
        timelinePoint: 1.6,
      },
      {
        objectToAnimate: camera.position,
        properties: {
          x: 0,
          y: 0.1,
          z: 0.8,
          duration: 0.5,
        },
        timelinePoint: 1.6,
      },

      {
        objectToAnimate: page_3_ref.current,
        properties: {
          opacity: 1,
          display: 'flex',
          transform: 'translateY(0)',

          duration: 0.5,
        },
        timelinePoint: 2,
      },
      {
        objectToAnimate: pointer_2_ref.current,
        properties: {
          pointerEvents: 'visible',
        },
        timelinePoint: 2.2,
      },

      {
        objectToAnimate: camera,
        properties: {
          fov: 30,
          duration: 0.5,
          onUpdate: () => camera.updateProjectionMatrix(),
        },
        timelinePoint: 2,
      },
    ];
    AnimationsData = [...AnimationsData, ...projectsAnimations];

    const aboutMeAnimations = [
      {
        objectToAnimate: page_3_ref.current,
        properties: {
          opacity: 0,
          display: 'none',
          transform: 'translateY(-50%)',

          duration: 0.5,
        },
        timelinePoint: 2.8,
      },
      {
        objectToAnimate: pointer_2_ref.current,
        properties: {
          pointerEvents: 'none',
        },
        timelinePoint: 2.8,
      },
      {
        objectToAnimate: group.current.rotation,
        properties: {
          x: 0,
          y: 0,
          z: 0,
          duration: 0.5,
        },
        timelinePoint: 2.5,
      },
      {
        objectToAnimate: controls.current.target,
        properties: {
          x: 0,
          y: 0.15,
          z: 0,
          duration: 0.5,
        },
        timelinePoint: 2.7,
      },
      {
        objectToAnimate: camera.position,
        properties: {
          x: 0,
          y: 0.3,
          z: 0.7,
          duration: 0.5,
        },
        timelinePoint: 2.7,
      },

      {
        objectToAnimate: page_4_ref.current,
        properties: {
          opacity: 1,
          display: 'flex',
          transform: 'translateY(0)',

          duration: 0.5,
        },
        timelinePoint: 3,
      },

      {
        objectToAnimate: camera,
        properties: {
          fov: 30,
          duration: 0.5,
          onUpdate: () => camera.updateProjectionMatrix(),
        },
        timelinePoint: 3,
      },
    ];
    AnimationsData = [...AnimationsData, ...aboutMeAnimations];

    const contactMeAnimations = [
      {
        objectToAnimate: page_4_ref.current,
        properties: {
          opacity: 0,
          display: 'none',
          transform: 'translateY(-50%)',
          duration: 0.5,
        },
        timelinePoint: 3.8,
      },
      {
        objectToAnimate: camera.position,
        properties: {
          y: 0.2,
          x: 0,
          z: 1,
          duration: 0.5,
        },
        timelinePoint: 3.8,
      },
      {
        objectToAnimate: group.current.rotation,
        properties: {
          x: 0,
          y: -1,
          z: 0,
          duration: 0.5,
        },
        timelinePoint: 3.8,
      },
      {
        objectToAnimate: controls.current.target,
        properties: {
          x: -0.2,
          z: 0,
          y: 0.15,
        },
        timelinePoint: 3.8,
      },

      {
        objectToAnimate: page_5_ref.current,
        properties: {
          opacity: 1,
          display: 'flex',
          transform: 'translateY(0)',

          duration: 0.5,
        },
        timelinePoint: 4,
      },

      {
        objectToAnimate: camera,
        properties: {
          fov: 30,
          duration: 0.8,
          onUpdate: () => camera.updateProjectionMatrix(),
        },
        timelinePoint: 4,
      },
    ];
    AnimationsData = [...AnimationsData, ...contactMeAnimations];

    AnimationsData.map((animation) => {
      timeline.current.to(
        animation.objectToAnimate,
        {
          ...animation.properties,
        },
        animation.timelinePoint
      );
    });
  }, []);

  useFrame(() => {
    const totalTimelineDuration = timeline.current.duration();
    const scrollOffset = scrollControl.offset;
    const animate2 = scrollOffset - 0.3;
    const animate3 = scrollOffset - 0.49;
    const animate4 = scrollOffset - 0.74;

    console.log(scrollOffset);

    if (scrollOffset > 0.04 && scrollOffset < 0.26) {
      actions.Animation.time = 4.5 + scrollOffset * 40;
    }
    if (scrollOffset > 0.3 && scrollOffset < 0.4) {
      actions.Animation.time = animate2 * 15;
    }
    if (scrollOffset > 0.49 && scrollOffset < 0.74) {
      actions.Animation.time = 11.5 + animate3 * 7;
    }
    if (scrollOffset > 0.74 && scrollOffset < 0.9) {
      actions.Animation.time = animate4 * 25;
    }
    // Sincronizar la línea de tiempo con el valor del scroll
    timeline.current.seek(scrollOffset * totalTimelineDuration);
  });

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
