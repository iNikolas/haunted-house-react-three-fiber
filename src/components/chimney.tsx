import { chimneyColor, chimneyDimensions, chimneyPosition } from "../constants";

export function Chimney() {
  return (
    <mesh castShadow receiveShadow position={chimneyPosition}>
      <boxGeometry args={chimneyDimensions} />
      <meshStandardMaterial color={chimneyColor} />
    </mesh>
  );
}
