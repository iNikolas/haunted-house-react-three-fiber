import { fogColor } from "../constants";

export function Fog() {
  return <fog attach="fog" color={fogColor} near={1} far={15} />;
}
