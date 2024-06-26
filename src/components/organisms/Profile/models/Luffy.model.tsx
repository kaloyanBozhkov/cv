/*
Auto-generated by: https://github.com/pmndrs/gltfjsx & edited by me ;)
Command: npx gltfjsx@6.2.16 scene.gltf -t 
Author: nitwit.friends (https://sketchfab.com/nitwit.friends)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/monkey-d-luffy-3d9fb8bd86854aa69ee6f69fcbeaca51
Title: Monkey D. Luffy
*/

import type * as THREE from "three";
import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { type GLTF } from "three-stdlib";
import { useLuffy } from "@/store/luffy.store";

type GLTFResult = GLTF & {
  nodes: {
    Object_7: THREE.SkinnedMesh;
    Object_8: THREE.SkinnedMesh;
    _rootJoint: THREE.Bone;
  };
  materials: {
    LuffyD: THREE.MeshStandardMaterial;
    lambert4: THREE.MeshStandardMaterial;
  };
  animations: GLTFAction[];
};

export type ActionName =
  | "jumpDown"
  | "punch"
  | "run"
  | "standing"
  | "strafeLeft"
  | "strafeRight"
  | "walk"
  | "wave";
interface GLTFAction extends THREE.AnimationClip {
  name: ActionName;
}

export function Luffy(props: JSX.IntrinsicElements["group"]) {
  const group = useRef<THREE.Group>(null),
    { nodes, materials, animations } = useGLTF(
      "/assets/models/luffy/scene.gltf",
    ) as GLTFResult,
    { actions } = useAnimations(animations, group),
    { action } = useLuffy();

  useEffect(() => {
    if (!actions[action]) return;
    actions[action]!.reset().fadeIn(0.5).play();
    return () => {
      actions[action]!.reset().fadeOut(0.5);
    };
  }, [actions, action]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group
          name="Sketchfab_model"
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0.015}
        >
          <group name="fbx_mergefbx" rotation={[Math.PI / 2, 0, 0]}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="Object_4">
                  <primitive object={nodes._rootJoint} />
                  <group name="Object_6" position={[0, 90.213, -3.534]} />
                  <group name="Luffy">
                    <group
                      name="21_teeth_1_0_0"
                      position={[0, 90.213, -3.534]}
                    />
                  </group>
                  <skinnedMesh
                    name="Object_7"
                    geometry={nodes.Object_7.geometry}
                    material={materials.LuffyD}
                    skeleton={nodes.Object_7.skeleton}
                  />
                  <skinnedMesh
                    name="Object_8"
                    geometry={nodes.Object_8.geometry}
                    material={materials.lambert4}
                    skeleton={nodes.Object_8.skeleton}
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/assets/models/luffy/scene.gltf");
