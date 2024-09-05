import { useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

// css
import "./App.css";

export default function App() {
  return (
    <div className="box-container">
      <Canvas className="box-container">
        <ambientLight intensity={Math.PI / 2}/>
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI}/>
        <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
        <Box position={[-1.2, 0, 0]} />
        <Box position={[1.2, 0, 0]} />
        <OrbitControls />
      </Canvas>
    </div>
  );
}

function Box(props) {

  const ref = useRef();
  const [clicked, setClick] = useState(false);

  return (
    <mesh
      {...props}
      ref = {ref}
      onClick={()=> setClick(!clicked)}
    >
      <boxGeometry args={[1, 1, 1]}/>
      <meshStandardMaterial color={clicked ? "hotpink" : "orange"} />
    </mesh>
  );
}