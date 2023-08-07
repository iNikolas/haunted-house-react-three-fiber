import React from "react";
import {
  Loader,
  OrbitControls,
  PerspectiveCamera,
  Stats,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

import { Floor, Fog, Light, Text3d, TextNotification } from "../components";
import { House } from "./house";
import { Graves } from "./graves";
import {
  fogColor,
  ghostsList,
  initialCameraPosition,
  maxCameraDistance,
  minCameraDistance,
} from "../constants";
import { Ghosts } from "./ghosts";

export function BasicScene() {
  const [showNotification, setShowNotification] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => setShowNotification(false), 12000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Canvas onCreated={(state) => state.gl.setClearColor(fogColor)} shadows>
        <Light />
        <Fog />
        <React.Suspense fallback={null}>
          <Text3d>Haunted House</Text3d>
          <Floor />
          <House />
          <Graves />
          <Ghosts ghostsList={ghostsList} />
        </React.Suspense>
        <PerspectiveCamera makeDefault position={initialCameraPosition}>
          {showNotification && (
            <TextNotification position-z={-1}>
              {"SCROLL TO ZOOM \n\r HOLD LMB TO MOVE THE CAMERA"}
            </TextNotification>
          )}
        </PerspectiveCamera>
        <OrbitControls
          minDistance={minCameraDistance}
          maxDistance={maxCameraDistance}
          maxPolarAngle={Math.PI / 2 - 0.02}
        />
        <Stats className="stats" />
      </Canvas>
      <Loader />
    </>
  );
}
