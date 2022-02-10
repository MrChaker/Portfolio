import { Canvas, useLoader, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Mesh } from "three";
const Cube3d = () => {
  const cube = useRef<Mesh>(null!);
  useFrame(() => {
    cube.current.rotation.x += 0.05;
    cube.current.rotation.y = 1;
    cube.current.rotation.z = 1;
  });
  return (
    <>
      <ambientLight color={0xcb6138} intensity={0.9} />
      <directionalLight
        color={0xca5030}
        castShadow={true}
        position={[1, 0, 0]}
      />
      <mesh ref={cube}>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial />
      </mesh>
    </>
  );
};
export default Cube3d;
