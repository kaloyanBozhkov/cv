import { type ActionName, Luffy } from "../models/Luffy.model";
import useMousePosition from "../hooks/useMousePosition";
import { useRef } from "react";
import { type Group, type Object3DEventMap } from "three";
import { useFrame } from "@react-three/fiber";
import { deg2rad } from "../helpers.common";
import { config, useSpring } from "@react-spring/three";
import { useLuffy } from "@/store/luffy.store";
import { Environment } from "@react-three/drei";

const Main = () => {
  const mousePosition = useMousePosition(),
    ref = useRef<Group<Object3DEventMap>>(null),
    { action } = useLuffy(),
    { rotation } = useSpring({
      rotation: getRotation(action, mousePosition.x),
      config: config.gentle,
    }),
    { position } = useSpring({
      position: getPosition(action),
      config: config.gentle,
    });

  useFrame(() => {
    if (!ref.current) return;
    ref.current.rotation.y = rotation.get();
    const [x, y, z] = position.get();
    ref.current.position.x = x;
    ref.current.position.y = y;
    ref.current.position.z = z;
  });

  return (
    <>
      <group ref={ref}>
        <Luffy />
      </group>
      <ambientLight intensity={0.2} />
      <Environment preset="forest" />
    </>
  );
};

export default Main;

const getPosition = (action: ActionName): [number, number, number] => {
    switch (action) {
      case "wave":
        return [0.2, -2.2, 3.2];
      case "punch":
        return [0.2, -2, 3.8];
      default:
        return [0, -2.2, 4.2];
    }
  },
  getRotation = (action: ActionName, x: number) => {
    switch (action) {
      case "standing":
        return deg2rad(-20) + deg2rad(60 * x);
      default:
        return deg2rad(10) + deg2rad(60 * x);
    }
  };
