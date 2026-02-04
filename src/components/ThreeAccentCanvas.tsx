"use client";

import * as React from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import type { Mesh } from "three";

function Orb() {
  const ref = React.useRef<Mesh | null>(null);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    const t = clock.getElapsedTime();
    ref.current.rotation.y = t * 0.25;
    ref.current.rotation.x = 0.15 + Math.sin(t * 0.6) * 0.05;
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[1.05, 48, 48]} />
      <meshStandardMaterial
        color="#10b981"
        roughness={0.25}
        metalness={0.1}
        emissive="#34d399"
        emissiveIntensity={0.35}
      />
    </mesh>
  );
}

export default function ThreeAccentCanvas() {
  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 3.1], fov: 40 }}
      gl={{
        antialias: true,
        alpha: true,
        powerPreference: "low-power",
      }}
    >
      <ambientLight intensity={0.7} />
      <directionalLight position={[2, 2, 2]} intensity={1.1} />
      <pointLight position={[-2, -1, 2]} intensity={0.6} />
      <Orb />
    </Canvas>
  );
}

