import React from "react";
import * as THREE from "three";
import { useTexture } from "@react-three/drei";

import { floorSize } from "../constants";

export function Floor() {
  const textureProps = useTexture({
    map: "/textures/grass/color.jpg",
    aoMap: "textures/grass/ambientOcclusion.jpg",
    normalMap: "textures/grass/normal.jpg",
    roughnessMap: "textures/grass/roughness.jpg",
  });

  React.useLayoutEffect(() => {
    Object.values(textureProps).map((texture) => {
      texture.wrapS = THREE.RepeatWrapping;
      texture.wrapT = THREE.RepeatWrapping;
      texture.repeat.set(floorSize / 6, floorSize / 6);
    });
  }, [textureProps]);

  return (
    <mesh rotation-x={-Math.PI / 2} receiveShadow>
      <planeGeometry args={[floorSize, floorSize]} />
      <meshStandardMaterial {...textureProps} />
    </mesh>
  );
}
