import { Canvas, useLoader } from "@react-three/fiber";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
const Laptop = () =>{
const gltf = useLoader(GLTFLoader, '/macbook_pro_copy.gltf');
return(
  <>
    <primitive object={gltf.scene}/>
  </>
)
}
export default Laptop