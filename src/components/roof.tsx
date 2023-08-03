import { houseDimensions, roofColor, roofDimensions } from "../constants";

export function Roof() {
  return (
    <mesh
      position-y={houseDimensions[1] + roofDimensions[1] / 2}
      rotation-y={Math.PI / 4}
    >
      <coneGeometry args={roofDimensions} />
      <meshStandardMaterial color={roofColor} />
    </mesh>
  );
}
