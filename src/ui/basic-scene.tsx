import React from "react";
import { Loader, OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Floor } from "../components";
import { House } from "./house";

export function BasicScene() {
  return (
    <>
      <Canvas shadows>
        <ambientLight />
        <React.Suspense fallback={null}>
          <Floor />
          <House />
        </React.Suspense>
        <PerspectiveCamera makeDefault position={[0, 2, 5]} />
        <OrbitControls />
      </Canvas>
      <Loader />
    </>
  );
}
