
import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, Torus, Box } from '@react-three/drei';
import * as THREE from 'three';

const FloatingGeometry = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const torusRef = useRef<THREE.Mesh>(null);
  const sphereRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.2;
      meshRef.current.rotation.y += delta * 0.3;
    }
    if (torusRef.current) {
      torusRef.current.rotation.x += delta * 0.1;
      torusRef.current.rotation.z += delta * 0.2;
    }
    if (sphereRef.current) {
      sphereRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.5;
    }
  });

  return (
    <>
      {/* Ambient and directional lighting */}
      <ambientLight intensity={0.4} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#D4AF37" />
      
      {/* Central mandap-inspired structure */}
      <Box ref={meshRef} args={[1, 0.1, 1]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#D4AF37" metalness={0.8} roughness={0.2} />
      </Box>
      
      {/* Decorative torus */}
      <Torus ref={torusRef} args={[1.2, 0.1, 16, 32]} position={[0, 0.5, 0]}>
        <meshStandardMaterial color="#FF9933" metalness={0.6} roughness={0.3} />
      </Torus>
      
      {/* Floating sphere */}
      <Sphere ref={sphereRef} args={[0.2]} position={[2, 1, 0]}>
        <meshStandardMaterial color="#6D1A36" metalness={0.9} roughness={0.1} />
      </Sphere>
      
      {/* Additional decorative elements */}
      <Sphere args={[0.15]} position={[-2, -1, 1]}>
        <meshStandardMaterial color="#B76E79" metalness={0.7} roughness={0.2} />
      </Sphere>
    </>
  );
};

const FloatingMandap = () => {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas camera={{ position: [5, 2, 5], fov: 60 }}>
        <FloatingGeometry />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 4}
        />
      </Canvas>
    </div>
  );
};

export default FloatingMandap;
