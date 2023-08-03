import { doorColor, doorDimensions, houseDimensions } from "../constants";

const zFightingOffset = 0.01;

export function Door() {
  return (
    <mesh
      position-y={doorDimensions[1] / 2}
      position-z={houseDimensions[2] / 2 + zFightingOffset}
    >
      <planeGeometry args={doorDimensions} />
      <meshStandardMaterial color={doorColor} />
    </mesh>
  );
}
