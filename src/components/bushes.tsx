import * as THREE from "three";

import { bushColor } from "../constants";

const bushGeometry = new THREE.SphereGeometry(1, 16, 16);
const bushMateruial = new THREE.MeshStandardMaterial({ color: bushColor });

export function Bushes({
  bushesList,
}: {
  bushesList: { scale: number; position: [x: number, y: number, z: number] }[];
}) {
  return bushesList.map((bush) => (
    <mesh
      position={bush.position}
      scale={bush.scale}
      key={`bush-${bush.scale}${bush.position.map((p) => `-${p}`)}`}
      geometry={bushGeometry}
      material={bushMateruial}
      castShadow
    />
  ));
}
