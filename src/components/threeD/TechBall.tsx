import { useTexture } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useWindowWidth } from 'hooks/useWindowWidth'
import { useEffect, useRef, useState } from 'react'
import { SphereGeometry, Mesh, Vector3, Vector } from 'three'
import { animated } from '@react-spring/three'

type PropsType = {
  texture: string
  geometry: SphereGeometry
  startPos: Vector3
  speed: number
}
const TechBall = (props: PropsType) => {
  const [hovered, setHovered] = useState(false)
  const [called, setCalled] = useState(false)
  const width: boolean = useWindowWidth(765)
  const texture = useTexture(props.texture)
  const sphere = useRef<Mesh>(null!)
  /* const [randomPos, setRandomPos] = useState<Vector3>(props.startPos)
  const [prevRandom, setPrevRandom] = useState<Vector3>(props.startPos)
  useEffect(() => {
    setInterval(() => {
      setRandomPos(new Vector3(Math.random() * 3, Math.random() * 3, 0))
    }, 2500)
  }, []) */

  useFrame(({ clock }) => {
    const move = clock.getElapsedTime() * props.speed

    sphere.current.rotation.y = -2 + move
    sphere.current.position.x = 1.4 * Math.sin(move)
    sphere.current.position.y = 1.8 * Math.cos(move)

    if (hovered) {
      document.body.style.cursor = 'pointer'
    } else {
      document.body.style.cursor = ''
    }
    if (width && !called) {
      scaleMesh(sphere.current, [0.6, 0.6, 0.6])
      setCalled(true)
    }
    if (!width && called) {
      scaleMesh(sphere.current, [0.4, 0.4, 0.4])
      setCalled(false)
    }
  })

  return (
    <animated.mesh
      ref={sphere}
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => setHovered(false)}
      geometry={props.geometry}
      position={props.startPos}
    >
      <meshStandardMaterial map={texture} />
    </animated.mesh>
  )
}

TechBall.defaultProps = {
  speed: 1,
  startPos: [0, 0, 0]
}

export const scaleMesh = (mesh: Mesh, [x, y, z]: number[]): void => {
  mesh.scale.x = x
  mesh.scale.y = y
  mesh.scale.z = z
}

export default TechBall
