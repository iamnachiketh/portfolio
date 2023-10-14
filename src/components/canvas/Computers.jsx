import React,{useEffect,useState,Suspense} from 'react'
import {Canvas} from "@react-three/fiber"
import {useGLTF,Preload,OrbitControls} from "@react-three/drei";
import CanvasLoader from "../Loader";
const Computers = ({isMobile}) => {
  const computer = useGLTF('./desktop_pc/scene.gltf');
  return (
    <mesh>
      <hemisphereLight intensity={3} 
      groundColor="black"/>
      <pointLight intensity={2.5}/>
      <spotLight position={[-20,50,10]}
      angle={0.12}
      penumbra={1}
      castShadow
      intensity={1}
      shadow-mapSize={1024}
      />
      <primitive 
      object={computer.scene}
      position={isMobile? [0,-3,-2.2] : [0,-3.35,-1.5]}
      scale={isMobile? 0.7 : 0.75}
      rotation={[-0.01,-0.2,-0.1]}
      />
    </mesh>
  )
}

const ComputersCanvas = ()=>{
  const [isMobile,setIsMobile] = useState(false);
  useEffect(()=>{
    //Add an event listener that changes to the size of the device  
    const mediaQuery = window.matchMedia('(max-width:600px)');
    // set the intial value of isMobile state variable 
      setIsMobile(mediaQuery.matches);
    // define a call back function to handle changes to the media query
      const handleMediaQueryChanges = (e)=>{
          setIsMobile(e.matches)
      }
    // Add callback function as a listener for the changes to the media query
      mediaQuery.addEventListener('change',handleMediaQueryChanges);
    // remove the listener when the component unmounted
      return ()=>{
         mediaQuery.removeEventListener('change',handleMediaQueryChanges);
      }
  },[])
  return(
     <Canvas
     frameloop="demand"
     shadows
     camera={{position:[20,3,5],fov:25}}
     gl={{preserveDrawingBuffer:true}}
     >
     <Suspense fallback={<CanvasLoader/>}>
       <OrbitControls 
       enableZoom={false}
       maxPolarAngle={Math.PI/2}
       minPolarAngle={Math.PI/2}
       />
       <Computers isMobile={isMobile}/>
       </Suspense>
     <Preload all/>
     </Canvas>
  )
}

export default ComputersCanvas