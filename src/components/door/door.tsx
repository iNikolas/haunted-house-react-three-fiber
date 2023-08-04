import * as THREE from "three";
import { useTexture } from "@react-three/drei";

import { doorDimensions, houseDimensions } from "../../constants";
import { DoorLight } from "./door-light";

const zFightingOffset = 0.01;

const doorGeometry = new THREE.PlaneGeometry(...doorDimensions, 100, 100);
doorGeometry.setAttribute(
  "uv2",
  new THREE.Float32BufferAttribute(doorGeometry.attributes.uv.array, 2)
);

export function Door() {
  const textureProps = useTexture({
    map: "/textures/door/color.jpg",
    alphaMap: "/textures/door/alpha.jpg",
    aoMap: "textures/door/ambientOcclusion.jpg",
    displacementMap: "textures/door/height.jpg",
    normalMap: "textures/door/normal.jpg",
    metalnessMap: "textures/door/metalness.jpg",
    roughnessMap: "textures/door/roughness.jpg",
  });
  return (
    <mesh
      geometry={doorGeometry}
      position-y={doorDimensions[1] / 2}
      position-z={houseDimensions[2] / 2 + zFightingOffset}
    >
      <meshStandardMaterial
        transparent
        displacementScale={0.1}
        aoMapIntensity={1}
        {...textureProps}
      />
      <DoorLight />
    </mesh>
  );
}
