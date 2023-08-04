import { lightColor, lightIntensity } from "../constants";

export function Light() {
  return (
    <>
      <ambientLight color={lightColor} intensity={lightIntensity} />
      <directionalLight color={lightColor} intensity={lightIntensity} />
    </>
  );
}
