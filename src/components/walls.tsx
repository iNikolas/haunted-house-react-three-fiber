import * as THREE from "three";
import { useTexture } from "@react-three/drei";
import { houseDimensions } from "../constants";

const wallsGeometry = new THREE.BoxGeometry(...houseDimensions);
wallsGeometry.setAttribute(
  "uv2",
  new THREE.Float32BufferAttribute(wallsGeometry.attributes.uv.array, 2)
);

export function Walls() {
  const textureProps = useTexture({
    map: "/textures/bricks/color.jpg",
    aoMap: "textures/bricks/ambientOcclusion.jpg",
    normalMap: "textures/bricks/normal.jpg",
    roughnessMap: "textures/bricks/roughness.jpg",
  });
  return (
    <mesh
      castShadow
      geometry={wallsGeometry}
      position-y={houseDimensions[1] / 2}
    >
      <meshStandardMaterial {...textureProps} />
    </mesh>
  );
}
