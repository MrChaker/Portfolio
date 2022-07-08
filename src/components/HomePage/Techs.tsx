import { Canvas, useFrame } from '@react-three/fiber'
import { useRef, Suspense } from 'react'
import { Mesh, DirectionalLight, Vector3 } from 'three'
import useMouse from '@react-hook/mouse-position'
import type { MousePosition } from '@react-hook/mouse-position'
import techs from './TechsData'
import { SphereGeometry } from 'three'
import TechBall from 'components/threeD/TechBall'
export const Techs = () => {
  const canvas = useRef(null!)
  const pointerPos = useMouse(canvas, {
    enterDelay: 100,
    leaveDelay: 10,
    fps: 60
  })
  return (
    <>
      <h1 className="mt-20 text-center text-5xl text-slate-900 dark:text-slate-200 font-semibold">
        {' '}
        Explore my tech stack{' '}
      </h1>
      <div className=" h-[800px] ">
        <div className="flex h-3/4 items-center justify-center p-8">
          <div ref={canvas} className="h-full w-full">
            <Canvas>
              <Suspense fallback={null}>
                <CanvasComp mousePos={pointerPos} />
              </Suspense>
            </Canvas>
          </div>
        </div>
      </div>
    </>
  )
}

type CanvasProps = {
  mousePos: MousePosition
}

const CanvasComp = (props: CanvasProps) => {
  const light = useRef<DirectionalLight>(null!)

  const ball = new SphereGeometry(
    0.4,
    64,
    32,
    Math.PI * 2,
    Math.PI * 2,
    Math.PI * 2,
    Math.PI
  )

  useFrame(({ clock }) => {})
  return (
    <>
      <ambientLight color={0xffffff} intensity={0.6} />
      <directionalLight
        ref={light}
        color={0xffffff}
        castShadow={true}
        position={[-1, 2, 1]}
      />

      <TechBall
        texture={techs[0].texture}
        geometry={ball}
        startPos={new Vector3(2.1, 1.2, 0)}
      />
      <TechBall texture={techs[1].texture} geometry={ball} speed={1.2} />
      <TechBall
        texture={techs[2].texture}
        geometry={ball}
        speed={1.5}
        startPos={new Vector3(-1.5, 2.8, 0)}
      />
    </>
  )
}
