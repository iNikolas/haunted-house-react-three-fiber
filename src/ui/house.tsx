import { Door, Roof, Walls, Bushes } from "../components";
import { bushesList } from "../constants";

export function House() {
  return (
    <group>
      <Walls />
      <Roof />
      <Door />
      <Bushes bushesList={bushesList} />
    </group>
  );
}
