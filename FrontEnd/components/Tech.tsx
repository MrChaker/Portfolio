import { useThemeContext } from "./layout";
import { GradientButton } from "./reUseable/GradientButton";
import { Canvas, useLoader, useFrame } from "@react-three/fiber";
import { useState, useEffect, useRef, Suspense } from "react";
import { useWindowWidth } from "../../hooks/useWindowWidth";
import { Mesh, DirectionalLight, TextureLoader } from "three";

export const Techs = () => {
  const { darkTheme } = useThemeContext();
  return (
    <>
      <h1 className="mt-20 text-center text-5xl text-slate-900 dark:text-slate-200 ">
        {" "}
        Explore my technologies{" "}
      </h1>
      <div className=" h-[600px] ">
        <div className="flex h-3/4 items-center justify-center p-8">
          <div id="canvas-container" className="h-full w-full">
            <Canvas>
              <Suspense fallback={null}>
                <CanvasComp />
              </Suspense>
            </Canvas>
          </div>
          {/* <GradientButton 
                        text = "Click to Explore "
                        outline
                        from = "#3b82f6"
                        to = "#ec4899"
                        color = { darkTheme ? "#0f172a" : "#e2e8f0"}
                        size = "1.55rem"
                        rounded
                    />  */}
        </div>
      </div>
    </>
  );
};
export const scaleMesh = (mesh: Mesh, [x, y, z]: number[]): void => {
  mesh.scale.x = x;
  mesh.scale.y = y;
  mesh.scale.z = z;
};

const CanvasComp = () => {
  const colorMap = useLoader(TextureLoader, "PavingStones092_1K_Color.jpg");
  const sphere = useRef<Mesh>(null!);
  const light = useRef<DirectionalLight>();
  const width: boolean = useWindowWidth(765);
  const [called, setCalled] = useState<boolean>(false);
  useFrame(({ clock }) => {
    /* if (light.current){
            light.current.position.z = clock.getElapsedTime() % 3 ;
            light.current.position.z = (clock.getElapsedTime() % 3 )* -1 ;
        } */
    sphere.current.rotation.y = clock.getElapsedTime() * 0.3;
    sphere.current.rotation.x = clock.getElapsedTime() * 0.2;

    if (width && !called) {
      scaleMesh(sphere.current, [0.6, 0.6, 0.6]);
      setCalled(true);
    }
    if (!width && called) {
      scaleMesh(sphere.current, [1, 1, 1]);
      setCalled(false);
    }
  });
  return (
    <>
      {/*  <ambientLight color={ 0x02f003 } intensity={0.3} />  */}
      <directionalLight
        ref={light}
        color={0xffffff}
        castShadow={true}
        position={[0, 2, 1]}
      />

      <mesh ref={sphere}>
        <sphereGeometry
          args={[3, 64, 32, Math.PI * 2, Math.PI * 2, Math.PI * 2, Math.PI]}
        />
        <meshStandardMaterial map={colorMap} />
      </mesh>
    </>
  );
};
