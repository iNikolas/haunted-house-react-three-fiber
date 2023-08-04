import React from "react";
import {
  Loader,
  OrbitControls,
  PerspectiveCamera,
  Stats,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Floor, Fog, Light } from "../components";
import { House } from "./house";
import { Graves } from "./graves";
import { fogColor } from "../constants";

export function BasicScene() {
  return (
    <>
      <Canvas onCreated={(state) => state.gl.setClearColor(fogColor)} shadows>
        <Light />
        <Fog />
        <React.Suspense fallback={null}>
          <Floor />
          <House />
          <Graves />
        </React.Suspense>
        <PerspectiveCamera makeDefault position={[5, 3, 5]} />
        <OrbitControls />
        <Stats />
      </Canvas>
      <Loader />
    </>
  );
}
