import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
import quicksand from './fonts/Microsoft Tai Le_Regular.json'
import {  TextGeometry } from 'three/examples/jsm/geometries/TextGeometry'
import { Mesh } from 'three'
import { useRef } from 'react'

type props = {
  text: string,
  size: number,
  height: number
}
const Text3D = (props: props) => {
  const mesh = useRef<Mesh>(null!)
  const font = new FontLoader().parse(quicksand);
  const textOptions = {
    font: font,
    size: props.size,
    height: props.height,
		curveSegments: 12,
		bevelEnabled: false,
		bevelThickness: 10,
		bevelSize: 8,
		bevelOffset: 0,
		bevelSegments: 3
  };
  
  const textGeo = new TextGeometry(props.text, textOptions);
  return(
    <>
      {<ambientLight color={0xcb6198} intensity={0.9} />}
      <mesh
        ref={mesh}
        geometry={textGeo}
        
      >
        <meshStandardMaterial />
      </mesh>
    </>
  )
}
export default Text3D


