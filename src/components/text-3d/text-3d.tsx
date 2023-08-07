import React from "react";
import * as THREE from "three";
import { Center } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader.js";

import * as ChildWitchRegular from "./Child Witch_Regular.json";
import { initialCameraPosition } from "../../constants";

const font = new FontLoader().parse(ChildWitchRegular);

const textDirection = new THREE.Vector3(...initialCameraPosition);

export function Text3d({ children: text }: { children: string }) {
  const [elapsedTime, setElapsedTime] = React.useState(0);

  useFrame((_, delta) => {
    setElapsedTime((prevTime) => prevTime + delta);
  });

  return (
    <Center
      onUpdate={(self) => self.lookAt(textDirection)}
      position={[
        initialCameraPosition[0] - 1,
        initialCameraPosition[1] - 0.3,
        initialCameraPosition[2] - 1,
      ]}
    >
      <spotLight
        position={[Math.abs(Math.sin(elapsedTime * 0.5)) * 0.8, 0, 0.5]}
        args={[0xd6b72d, 0.5, 0.8, Math.PI / 2, 0.6]}
      />
      <mesh rotation-x={-0.1} rotation-y={-0.1}>
        <textGeometry
          args={[
            text,
            {
              font: font,
              size: 0.1,
              height: 0.2,
            },
          ]}
        />
        <meshStandardMaterial transparent opacity={0.9} />
      </mesh>
    </Center>
  );
}
