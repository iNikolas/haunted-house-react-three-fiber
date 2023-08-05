import * as THREE from "three";
import {
  graveColor,
  graveDimensions,
  graveMaxRadiusThreshold,
  graveMinRadiusThreshold,
  gravesNumber,
  maxGraveInclination,
} from "../constants";

const graveBumpsCompensation = 0.1;

const graveGeometry = new THREE.BoxGeometry(...graveDimensions);
const graveMaterial = new THREE.MeshStandardMaterial({ color: graveColor });

const graves = Array(gravesNumber)
  .fill(null)
  .map(() => {
    const angle = Math.random() * Math.PI * 2;
    const radius =
      graveMinRadiusThreshold + Math.random() * graveMaxRadiusThreshold;
    const x = Math.cos(angle) * radius;
    const z = Math.sin(angle) * radius;

    return (
      <mesh
        key={`${angle}-${radius}`}
        position={[x, graveDimensions[1] / 2 - graveBumpsCompensation, z]}
        rotation-z={(Math.random() - 0.5) * maxGraveInclination}
        rotation-y={(Math.random() - 0.5) * maxGraveInclination}
        geometry={graveGeometry}
        material={graveMaterial}
        castShadow
        receiveShadow
      />
    );
  });

export function Graves() {
  return <group>{graves}</group>;
}
