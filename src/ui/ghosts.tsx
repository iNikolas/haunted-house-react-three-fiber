import React from "react";

import { ghostLighting, ghostScale, shadowMapResolution } from "../constants";
import { useFrame } from "@react-three/fiber";
import { Clone, useGLTF } from "@react-three/drei";

type Coord3 = [x: number, y: number, z: number];

export function Ghosts({
  ghostsList,
}: {
  ghostsList: Array<{
    color: string;
    getGhostPosition: (elapsedTime: number) => Coord3;
    getGhostRotation?: (elapsedTime: number) => Coord3;
  }>;
}) {
  const [elapsedTime, setElapsedTime] = React.useState(0);

  const { scene: ghostModel } = useGLTF("/models/ghost.glb");

  const ghostsRenderer = ghostsList.map(
    ({ color, getGhostPosition, getGhostRotation }, index) => (
      <pointLight
        key={index}
        args={[color, ...ghostLighting]}
        color={color}
        intensity={color !== "none" ? ghostLighting[0] : 0}
        distance={ghostLighting[1]}
        {...(getGhostRotation && { rotation: getGhostRotation(elapsedTime) })}
        position={getGhostPosition(elapsedTime)}
        castShadow
        shadow-mapSize-width={shadowMapResolution}
        shadow-mapSize-height={shadowMapResolution}
        shadow-camera-far={7}
      >
        <Clone
          scale={ghostScale}
          object={ghostModel}
          // rotation={[
          //   Math.sin(elapsedTime) - 0.5,
          //   Math.cos(elapsedTime) - 0.5,
          //   Math.sin(elapsedTime) * Math.cos(elapsedTime) - 0.5,
          // ]}
        />
      </pointLight>
    )
  );

  useFrame((_, delta) => setElapsedTime((prevTime) => prevTime + delta));

  return <group>{ghostsRenderer}</group>;
}
