import { doorDimensions, doorLightColor } from "../../constants";

const doorLightTopOffset = 0.2;
const doorLightWallOffset = 0.7;

export function DoorLight() {
  return (
    <pointLight
      position-y={doorDimensions[1] / 2 + doorLightTopOffset}
      position-z={doorLightWallOffset}
      color={doorLightColor}
    />
  );
}
