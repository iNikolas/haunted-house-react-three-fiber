import React from "react";

import { ghostLighting, shadowMapResolution } from "../constants";
import { useFrame } from "@react-three/fiber";

export function Ghosts({
  ghostsList,
}: {
  ghostsList: Array<{
    color: string;
    getGhostPosition: (
      elapsedTime: number
    ) => [x: number, y: number, z: number];
  }>;
}) {
  const [elapsedTime, setElapsedTime] = React.useState(0);

  const ghostsRenderer = ghostsList.map(
    ({ color, getGhostPosition }, index) => (
      <pointLight
        key={index}
        args={[color, ...ghostLighting]}
        position={getGhostPosition(elapsedTime)}
        castShadow
        shadow-mapSize-width={shadowMapResolution}
        shadow-mapSize-height={shadowMapResolution}
        shadow-camera-far={7}
      />
    )
  );

  useFrame((_, delta) => setElapsedTime((prevTime) => prevTime + delta));

  return <group>{ghostsRenderer}</group>;
}
