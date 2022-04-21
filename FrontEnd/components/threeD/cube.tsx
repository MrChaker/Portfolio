import {  useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Mesh } from "three";
const Cube3d = () => {
  const cube = useRef<Mesh>(null!);
  useFrame(() => {
    
  });
  return (
    <>
      {<ambientLight color={0xcb6138} intensity={0.9} />}
      {<directionalLight
        color={0xca5030}
        castShadow={true}
        position={[1, 0, 0]}
      />}
      <mesh ref={cube}>
        <sphereGeometry args={[2, 2, 2]}/>
        <meshStandardMaterial />
      </mesh>
    </>
  );
};
export default Cube3d;
