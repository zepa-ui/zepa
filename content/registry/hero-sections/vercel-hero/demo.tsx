"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Grid, OrbitControls } from "@react-three/drei";
import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";

function AnimatedBox({
  initialPosition,
}: {
  initialPosition: [number, number, number];
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [targetPosition, setTargetPosition] = useState(
    () => new THREE.Vector3(...initialPosition)
  );
  const currentPosition = useRef(new THREE.Vector3(...initialPosition));
  const edgeGeometry = useMemo(() => new THREE.BoxGeometry(1, 1, 1), []);

  useEffect(() => {
    const interval = setInterval(() => {
      const current = currentPosition.current;
      const directions = [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1],
      ] as const;
      const [dx, dz] =
        directions[Math.floor(Math.random() * directions.length)];
      const newPosition = new THREE.Vector3(
        current.x + dx * 3,
        0.5,
        current.z + dz * 3
      );
      newPosition.x = Math.max(-15, Math.min(15, newPosition.x));
      newPosition.z = Math.max(-15, Math.min(15, newPosition.z));
      setTargetPosition(newPosition);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useFrame(() => {
    if (meshRef.current) {
      currentPosition.current.lerp(targetPosition, 0.1);
      meshRef.current.position.copy(currentPosition.current);
    }
  });

  return (
    <mesh ref={meshRef} position={initialPosition}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#ffffff" opacity={0.9} transparent />
      <lineSegments>
        <edgesGeometry attach="geometry" args={[edgeGeometry]} />
        <lineBasicMaterial attach="material" color="#000000" />
      </lineSegments>
    </mesh>
  );
}

function Scene() {
  const initialPositions: [number, number, number][] = [
    [-9, 0.5, -9],
    [-3, 0.5, -3],
    [0, 0.5, 0],
    [3, 0.5, 3],
    [9, 0.5, 9],
    [-6, 0.5, 6],
    [6, 0.5, -6],
    [-12, 0.5, 0],
    [12, 0.5, 0],
    [0, 0.5, 12],
  ];

  return (
    <>
      <OrbitControls />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Grid
        renderOrder={-1}
        position={[0, 0, 0]}
        infiniteGrid
        cellSize={1}
        cellThickness={0.5}
        sectionSize={3}
        sectionThickness={1}
        sectionColor="#808080"
        fadeDistance={50}
      />
      {initialPositions.map((position, index) => (
        <AnimatedBox key={index} initialPosition={position} />
      ))}
    </>
  );
}

function VercelHero() {
  return (
    <div className="relative h-screen min-h-screen w-full overflow-hidden bg-black font-sans text-white">
      <div className="absolute top-1/3 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 transform text-center">
        <h1 className="mx-auto mb-8 max-w-4xl text-4xl font-bold md:text-6xl">
          A unified API for on-chain transactions
        </h1>
        <h2 className="mb-10 px-4 text-lg md:text-xl">
          Route transactions from your dapp between L2 chains in real time
        </h2>
        <button
          type="button"
          className="rounded-md bg-white px-6 py-3 font-bold text-black transition duration-300 hover:bg-gray-200"
        >
          Join waitlist
        </button>
      </div>
      <Canvas
        shadows
        camera={{ position: [30, 30, 30], fov: 50 }}
        className="absolute inset-0"
      >
        <Scene />
      </Canvas>
    </div>
  );
}

export { VercelHero };
export default VercelHero;
