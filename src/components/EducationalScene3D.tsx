
import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, OrbitControls, Sphere, Box, Float, Environment, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

// Floating Book Component
const FloatingBook = ({ position, color, text }: { position: [number, number, number]; color: string; text: string }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.2;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.1} floatIntensity={0.2}>
      <group position={position}>
        <Box ref={meshRef} args={[0.8, 1.2, 0.1]}>
          <meshStandardMaterial color={color} />
        </Box>
        <Text
          position={[0, 0, 0.06]}
          fontSize={0.15}
          color="white"
          anchorX="center"
          anchorY="middle"
          font="/fonts/Arial-Bold.woff"
        >
          {text}
        </Text>
      </group>
    </Float>
  );
};

// Rotating Globe Component
const EducationalGlobe = () => {
  const globeRef = useRef<THREE.Mesh>(null);
  
  useFrame(() => {
    if (globeRef.current) {
      globeRef.current.rotation.y += 0.005;
    }
  });

  return (
    <Float speed={1} rotationIntensity={0.1} floatIntensity={0.3}>
      <Sphere ref={globeRef} args={[1, 32, 32]} position={[0, 0, 0]}>
        <meshStandardMaterial
          color="#4F46E5"
          wireframe={false}
          transparent={true}
          opacity={0.8}
        />
      </Sphere>
      {/* Globe rings */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.2, 0.02, 8, 32]} />
        <meshStandardMaterial color="#10B981" />
      </mesh>
      <mesh rotation={[0, 0, Math.PI / 3]}>
        <torusGeometry args={[1.3, 0.02, 8, 32]} />
        <meshStandardMaterial color="#F59E0B" />
      </mesh>
    </Float>
  );
};

// Knowledge Particles
const KnowledgeParticles = () => {
  const particlesRef = useRef<THREE.Points>(null);
  
  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y += 0.002;
      particlesRef.current.rotation.x += 0.001;
    }
  });

  const particleCount = 100;
  const positions = new Float32Array(particleCount * 3);
  
  for (let i = 0; i < particleCount * 3; i++) {
    positions[i] = (Math.random() - 0.5) * 10;
  }

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial color="#8B5CF6" size={0.05} />
    </points>
  );
};

// Main 3D Scene
const Scene3D = () => {
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 8]} />
      <OrbitControls enablePan={false} enableZoom={true} maxDistance={12} minDistance={4} />
      
      {/* Lighting */}
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#8B5CF6" />
      
      {/* Central Globe */}
      <EducationalGlobe />
      
      {/* Floating Books around the globe */}
      <FloatingBook position={[-3, 2, 0]} color="#EF4444" text="READING" />
      <FloatingBook position={[3, 2, 0]} color="#10B981" text="LISTENING" />
      <FloatingBook position={[-3, -2, 0]} color="#8B5CF6" text="SPEAKING" />
      <FloatingBook position={[3, -2, 0]} color="#F59E0B" text="WRITING" />
      
      {/* Knowledge Particles */}
      <KnowledgeParticles />
      
      {/* Main Title */}
      <Float speed={1} rotationIntensity={0.1} floatIntensity={0.1}>
        <Text
          position={[0, 3.5, 0]}
          fontSize={0.8}
          color="#1F2937"
          anchorX="center"
          anchorY="middle"
          font="/fonts/Arial-Bold.woff"
        >
          TOEFL Master
        </Text>
      </Float>
      
      {/* Subtitle */}
      <Text
        position={[0, -3.5, 0]}
        fontSize={0.3}
        color="#6B7280"
        anchorX="center"
        anchorY="middle"
        font="/fonts/Arial-Bold.woff"
      >
        Interactive Learning Experience
      </Text>
      
      {/* Environment for better lighting */}
      <Environment preset="city" />
    </>
  );
};

// Main Component
const EducationalScene3D = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="relative w-full h-96 bg-gradient-to-b from-blue-50 to-purple-50 rounded-2xl overflow-hidden shadow-lg">
      <Canvas
        onCreated={() => setIsLoaded(true)}
        className="w-full h-full"
        gl={{ antialias: true, alpha: true }}
      >
        <Scene3D />
      </Canvas>
      
      {!isLoaded && (
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
