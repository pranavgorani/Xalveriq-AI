"use client";

import { useRef, useState, useEffect, Suspense } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, ContactShadows, Environment } from "@react-three/drei";
import * as THREE from "three";

function FloatingArchitecturalSculpture() {
  const groupRef = useRef<THREE.Group>(null);
  const meshRef = useRef<THREE.Mesh>(null);
  const orbitRef = useRef<THREE.Mesh>(null);
  const cubeRef = useRef<THREE.Mesh>(null);
  const sphereRef = useRef<THREE.Mesh>(null);
  const secondaryTorusRef = useRef<THREE.Mesh>(null);

  const { pointer } = useThree();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    
    // Parallax mouse tilt
    if (groupRef.current) {
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        pointer.x * 0.35,
        0.05
      );
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        -pointer.y * 0.25,
        0.05
      );
    }

    // Main pearl architectural core
    if (meshRef.current) {
      meshRef.current.rotation.y = t * 0.12;
      meshRef.current.rotation.x = Math.sin(t / 4) * 0.15;
    }

    // Orbit line
    if (orbitRef.current) {
      orbitRef.current.rotation.z = t * 0.18;
      orbitRef.current.rotation.x = Math.PI / 3 + Math.sin(t / 3) * 0.1;
    }

    // Secondary accent orbit
    if (secondaryTorusRef.current) {
      secondaryTorusRef.current.rotation.y = -t * 0.15;
      secondaryTorusRef.current.rotation.x = Math.PI / 4 + Math.cos(t / 4) * 0.12;
    }

    // Floating glass cube
    if (cubeRef.current) {
      cubeRef.current.rotation.y = -t * 0.22;
      cubeRef.current.rotation.x = t * 0.15;
      cubeRef.current.position.y = 0.8 + Math.sin(t * 1.4) * 0.12;
    }

    // Floating gold sphere
    if (sphereRef.current) {
      sphereRef.current.position.y = -0.6 + Math.cos(t * 1.6) * 0.15;
      sphereRef.current.position.x = -1.4 + Math.sin(t * 0.8) * 0.1;
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* 1. Central Pearl Ceramic Architectural Sculpture */}
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.7}>
        <mesh ref={meshRef} position={[0, 0.2, 0]}>
          <icosahedronGeometry args={[1.25, 0]} />
          <meshPhysicalMaterial
            color="#FFFFFF"
            roughness={0.18}
            metalness={0.08}
            clearcoat={0.95}
            clearcoatRoughness={0.1}
            transmission={0.05}
            reflectivity={0.9}
          />
        </mesh>
      </Float>

      {/* 2. Delicate Champagne-Gold Orbit Ring */}
      <mesh ref={orbitRef} position={[0, 0.2, 0]}>
        <torusGeometry args={[2.05, 0.022, 16, 120]} />
        <meshPhysicalMaterial
          color="#B08A57"
          roughness={0.2}
          metalness={0.92}
          clearcoat={0.8}
        />
      </mesh>

      {/* 3. Subtle Violet-Cyan Satellite Orbit Ring */}
      <mesh ref={secondaryTorusRef} position={[0, 0.2, 0]}>
        <torusGeometry args={[1.75, 0.015, 16, 100]} />
        <meshPhysicalMaterial
          color="#8B6EFF"
          roughness={0.3}
          metalness={0.8}
          transparent
          opacity={0.7}
        />
      </mesh>

      {/* 4. Levitating Pure Fluted Glass Cube */}
      <Float speed={2.5} rotationIntensity={0.8} floatIntensity={0.8}>
        <mesh ref={cubeRef} position={[1.4, 0.8, -0.4]}>
          <boxGeometry args={[0.65, 0.65, 0.65]} />
          <meshPhysicalMaterial
            color="#14A8D6"
            roughness={0.08}
            metalness={0.1}
            transmission={0.85}
            thickness={1.2}
            transparent
            opacity={0.85}
            ior={1.5}
          />
        </mesh>
      </Float>

      {/* 5. Champagne-Gold Satin Satellite Sphere */}
      <Float speed={3} rotationIntensity={1} floatIntensity={0.9}>
        <mesh ref={sphereRef} position={[-1.4, -0.6, 0.4]}>
          <sphereGeometry args={[0.32, 32, 32]} />
          <meshPhysicalMaterial
            color="#B08A57"
            roughness={0.25}
            metalness={0.88}
            clearcoat={0.85}
          />
        </mesh>
      </Float>

      {/* 6. Soft Warm Contact Shadow on the Ivory Page Floor */}
      <ContactShadows
        position={[0, -1.8, 0]}
        opacity={0.35}
        scale={7}
        blur={2.4}
        far={3}
        color="#16161D"
      />
    </group>
  );
}

export function AntigravityRoom() {
  const [mounted, setMounted] = useState(false);
  const [hasWebGL, setHasWebGL] = useState(true);

  useEffect(() => {
    setMounted(true);
    try {
      const canvas = document.createElement("canvas");
      const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
      if (!gl) setHasWebGL(false);
    } catch (e) {
      setHasWebGL(false);
    }
  }, []);

  if (!mounted) {
    return (
      <div className="w-full h-full min-h-[420px] flex items-center justify-center">
        <div className="w-48 h-48 rounded-full border border-dashed border-[#B08A57]/40 animate-spin" />
      </div>
    );
  }

  if (!hasWebGL) {
    // 2D CSS Fallback for low-spec or headless environments
    return (
      <div className="relative w-full h-full min-h-[420px] flex items-center justify-center">
        <div className="relative w-64 h-64 rounded-3xl bg-white/90 border border-[#E4DCCF] p-8 shadow-[0_16px_40px_rgba(22,22,29,0.08)] flex flex-col items-center justify-center text-center animate-float-slow">
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-[#6D4AFF] via-[#14A8D6] to-[#B08A57] p-[2px] mb-4 shadow-sm">
            <div className="w-full h-full bg-white rounded-[14px] flex items-center justify-center">
              <span className="font-display font-bold text-3xl text-[#16161D]">X</span>
            </div>
          </div>
          <p className="text-xs uppercase tracking-widest text-[#B08A57] font-semibold">
            Antigravity Spatial Lab
          </p>
          <span className="text-[11px] text-[#5E5A55] mt-1">Pune, India</span>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-full min-h-[450px] lg:min-h-[580px]">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
      >
        <ambientLight intensity={1.4} color="#FFFDF9" />
        <directionalLight position={[10, 15, 8]} intensity={1.8} color="#FFFFFF" />
        <directionalLight position={[-10, 10, -5]} intensity={0.8} color="#F1EBE1" />
        <pointLight position={[-8, -4, -4]} intensity={1.2} color="#6D4AFF" />
        <pointLight position={[6, -4, 4]} intensity={1.0} color="#14A8D6" />
        <pointLight position={[0, 6, 2]} intensity={1.4} color="#B08A57" />

        <Suspense fallback={null}>
          <FloatingArchitecturalSculpture />
          <Environment preset="city" />
        </Suspense>
      </Canvas>

      {/* Floating UI HUD elements on the 3D scene */}
      <div className="absolute bottom-4 left-4 z-10 hidden sm:flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-white/85 border border-[#E4DCCF] backdrop-blur-md shadow-[0_4px_20px_rgba(22,22,29,0.06)]">
        <span className="w-2 h-2 rounded-full bg-[#14A8D6] animate-pulse" />
        <span className="text-[11px] font-mono text-[#16161D] font-medium tracking-wide">
          3D SPATIAL ENGINE • ACTIVE
        </span>
      </div>

      <div className="absolute top-4 right-4 z-10 hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-[#B08A57]/35 backdrop-blur-md shadow-[0_4px_16px_rgba(176,138,87,0.12)]">
        <span className="text-[11px] font-semibold text-[#8E6835]">
          Zero-Gravity Architecture
        </span>
      </div>
    </div>
  );
}
