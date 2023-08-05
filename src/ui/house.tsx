import { Door, Roof, Walls, Bushes, Chimney } from "../components";
import { bushesList } from "../constants";

export function House() {
  return (
    <group>
      <Walls />
      <Roof />
      <Door />
      <Chimney />
      <Bushes bushesList={bushesList} />
    </group>
  );
}
