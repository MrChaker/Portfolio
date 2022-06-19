import React, { useEffect, useRef } from 'react'
import {
  DirectionalLight,
  Mesh,
  MeshLambertMaterial,
  SphereGeometry
} from 'three'

const Balls = () => {
  const color = new MeshLambertMaterial({ color: '#3b82f6' })
  const light = useRef<DirectionalLight>(null!)
  const sphere = new SphereGeometry(
    0.3,
    64,
    32,
    Math.PI * 2,
    Math.PI * 2,
    Math.PI * 2,
    Math.PI
  )
  const balls = useRef<number[][]>([])
  useEffect(() => {
    balls.current = setBallsPositions(13)
  })
  const setBallsPositions = (count: number): number[][] => {
    let ballsPos: number[][] = []
    for (let i = 0; i < count; i++) {
      ballsPos.push([i + 2, i, i])
    }
    return ballsPos
  }
  return (
    /*  <>
      {balls.current.map((ball) => (
        <mesh geometry={sphere} material={color} position={ball}></mesh>
      ))}
    </> */
    <>
      <directionalLight
        ref={light}
        color={0xffffff}
        castShadow={true}
        position={[2.5, -2, 1]}
      />
      <directionalLight
        ref={light}
        color={0xec4899}
        castShadow={true}
        position={[-2.5, 2, 1]}
      />
      <mesh geometry={sphere} material={color}></mesh>
    </>
  )
}

export default Balls
