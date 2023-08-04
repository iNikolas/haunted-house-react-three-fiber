import { lightColor, lightIntensity, shadowMapResolution } from "../constants";

export function Light() {
  return (
    <>
      <ambientLight color={lightColor} intensity={lightIntensity} />
      <directionalLight
        castShadow
        color={lightColor}
        intensity={lightIntensity}
        shadow-mapSize-width={shadowMapResolution}
        shadow-mapSize-height={shadowMapResolution}
        shadow-camera-far={15}
      />
    </>
  );
}
