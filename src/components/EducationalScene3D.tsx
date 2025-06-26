
import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

// Simple rotating cube with text
const EducationalCube = ({ position, color, text }: { position: [number, number, number]; color: string; text: string }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <group position={position}>
      <mesh ref={meshRef}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={color} />
      </mesh>
      <Text
        position={[0, 1.5, 0]}
        fontSize={0.3}
        color="#1F2937"
        anchorX="center"
        anchorY="middle"
      >
        {text}
      </Text>
    </group>
  );
};

// Central rotating sphere
const CentralSphere = () => {
  const sphereRef = useRef<THREE.Mesh>(null);
  
  useFrame(() => {
    if (sphereRef.current) {
      sphereRef.current.rotation.y += 0.005;
    }
  });

  return (
    <mesh ref={sphereRef}>
      <sphereGeometry args={[1.2, 32, 32]} />
      <meshStandardMaterial color="#4F46E5" wireframe={false} transparent opacity={0.8} />
    </mesh>
  );
};

// Simple 3D Scene
const Scene3D = () => {
  return (
    <>
      <OrbitControls enablePan={false} enableZoom={true} maxDistance={8} minDistance={4} />
      
      {/* Basic lighting */}
      <ambientLight intensity={0.6} />
      <pointLight position={[10, 10, 10]} intensity={0.8} />
      
      {/* Central sphere */}
      <CentralSphere />
      
      {/* Four educational cubes */}
      <EducationalCube position={[-3, 0, 0]} color="#EF4444" text="READING" />
      <EducationalCube position={[3, 0, 0]} color="#10B981" text="LISTENING" />
      <EducationalCube position={[0, 0, -3]} color="#8B5CF6" text="SPEAKING" />
      <EducationalCube position={[0, 0, 3]} color="#F59E0B" text="WRITING" />
      
      {/* Main title */}
      <Text
        position={[0, 3, 0]}
        fontSize={0.6}
        color="#1F2937"
        anchorX="center"
        anchorY="middle"
      >
        TOEFL Master
      </Text>
      
      {/* Subtitle */}
      <Text
        position={[0, -3, 0]}
        fontSize={0.25}
        color="#6B7280"
        anchorX="center"
        anchorY="middle"
      >
        Interactive Learning Experience
      </Text>
    </>
  );
};

// Main Component
const EducationalScene3D = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    // Reset error state when component mounts
    setHasError(false);
  }, []);

  const handleError = () => {
    console.log('3D scene error occurred');
    setHasError(true);
  };

  if (hasError) {
    return (
      <div className="relative w-full h-96 bg-gradient-to-b from-blue-50 to-purple-50 rounded-2xl overflow-hidden shadow-lg flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">🎓</div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">TOEFL Master</h3>
          <p className="text-gray-600">Interactive Learning Experience</p>
          <div className="grid grid-cols-2 gap-4 mt-6">
            <div className="bg-red-100 p-3 rounded-lg">
              <div className="text-red-600 font-semibold">📚 READING</div>
            </div>
            <div className="bg-green-100 p-3 rounded-lg">
              <div className="text-green-600 font-semibold">🎧 LISTENING</div>
            </div>
            <div className="bg-purple-100 p-3 rounded-lg">
              <div className="text-purple-600 font-semibold">🎤 SPEAKING</div>
            </div>
            <div className="bg-orange-100 p-3 rounded-lg">
              <div className="text-orange-600 font-semibold">✍️ WRITING</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-96 bg-gradient-to-b from-blue-50 to-purple-50 rounded-2xl overflow-hidden shadow-lg">
      <Canvas
        onCreated={() => setIsLoaded(true)}
        onError={handleError}
        className="w-full h-full"
        camera={{ position: [0, 0, 6], fov: 75 }}
        gl={{ antialias: true, alpha: true }}
      >
        <Scene3D />
      </Canvas>
      
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-b from-blue-50 to-purple-50">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-2"></div>
            <p className="text-gray-600">Loading 3D Experience...</p>
          </div>
        </div>
      )}
      
      <div className="absolute bottom-4 left-4 text-sm text-gray-600 bg-white/80 px-2 py-1 rounded">
        🖱️ Drag to rotate • 🔍 Scroll to zoom
      </div>
    </div>
  );
};

export default EducationalScene3D;
