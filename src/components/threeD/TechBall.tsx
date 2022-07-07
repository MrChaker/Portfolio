import { useTexture } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useWindowWidth } from 'hooks/useWindowWidth'
import { useRef, useState } from 'react'
import { SphereGeometry, Mesh, Vector3 } from 'three'

type PropsType = {
  texture: string
  geometry: SphereGeometry
  startPos?: Vector3
  speed: number
}
const TechBall = (props: PropsType) => {
  const [hovered, setHovered] = useState(false)
  const [called, setCalled] = useState(false)
  const width: boolean = useWindowWidth(765)
  const texture = useTexture(props.texture)
  const sphere = useRef<Mesh>(null!)
  useFrame(({ clock }) => {
    const move = clock.getElapsedTime() * props.speed
    sphere.current.rotation.y = -2 + Math.sin(move)
    sphere.current.position.x = props.startPos?.x
      ? props.startPos?.x + Math.sin(move)
      : Math.sin(move)

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
    <mesh
      ref={sphere}
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => setHovered(false)}
      geometry={props.geometry}
      position={props.startPos}
    >
      <meshStandardMaterial map={texture} />
    </mesh>
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
