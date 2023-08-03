import { houseDimensions, wallsColor } from "../constants";

export function Walls() {
  return (
    <mesh position-y={houseDimensions[1] / 2}>
      <boxGeometry args={houseDimensions} />
      <meshStandardMaterial color={wallsColor} />
    </mesh>
  );
}
