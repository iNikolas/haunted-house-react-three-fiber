export const floorSize = 50;
export const gravesNumber = 50;
export const graveMinRadiusThreshold = 3;
export const graveMaxRadiusThreshold = 3;
export const maxGraveInclination = 0.4;
export const lightIntensity = 0.12;
export const shadowMapResolution = 256;
export const maxCameraDistance = 14;

type Coord3 = [x: number, y: number, z: number];

export const houseDimensions: [width: number, height: number, length: number] =
  [4, 2.5, 4];
export const graveDimensions: [width: number, height: number, length: number] =
  [0.6, 0.8, 0.2];
export const ghostScale: Coord3 = [0.4, 0.4, 0.4];
export const initialCameraPosition: Coord3 = [8, 6, 8];

const basicRoofSize = Math.sqrt((houseDimensions[0] * houseDimensions[0]) / 2);
const roofProtrusion = 0.7;

export const minCameraDistance = houseDimensions[0];

export const roofDimensions: [size: number, height: number, segments: number] =
  [basicRoofSize + roofProtrusion, 1, 4];
export const doorDimensions: [width: number, height: number] = [2.2, 2.2];
export const chimneyDimensions: Coord3 = [0.3, 0.6, 0.3];
export const chimneyPosition: Coord3 = [1.5, 3.1, 0];

export const roofColor = "#b35f45";
export const bushColor = "#89c854";
export const graveColor = "#b2b6b1";
export const lightColor = "#b9d5ff";
export const doorLightColor = "#ff7d46";
export const fogColor = "#262837";
export const chimneyColor = "#777777";

export const ghostLighting: [intensity: number, distance: number] = [2, 3];

export const bushesList: {
  scale: number;
  position: [number, number, number];
}[] = [
  { scale: 0.5, position: [0.8, 0.2, 2.2] },
  { scale: 0.25, position: [1.4, 0.1, 2.1] },
  { scale: 0.4, position: [-0.8, 0.1, 2.2] },
  { scale: 0.15, position: [-1, 0.05, 2.6] },
];

export const ghostsList = [
  {
    color: "#ff00ff",
    getGhostPosition: (elapsedTime: number): Coord3 => {
      const angle = elapsedTime * 0.2;

      return [
        Math.cos(angle) * 4,
        Math.sin(angle) * 4,
        Math.sin(elapsedTime * 3),
      ];
    },
    getGhostRotation: (elapsedTime: number): Coord3 => {
      const angle = elapsedTime * 0.1;
      return [Math.sin(angle) * 0.5, 0, Math.sin(angle) * 0.5];
    },
  },
  {
    color: "#00ffff",
    getGhostPosition: (elapsedTime: number): Coord3 => {
      const angle = -elapsedTime * 0.16;

      return [
        Math.cos(angle) * 5,
        Math.sin(elapsedTime * 4) + Math.sin(elapsedTime * 2.5),
        Math.sin(angle) * 5,
      ];
    },
    getGhostRotation: (elapsedTime: number): Coord3 => {
      const angle = elapsedTime * 0.1;
      return [Math.sin(angle) * 0.05, elapsedTime, Math.sin(angle) * 0.05];
    },
  },
  {
    color: "#ffff00",
    getGhostPosition: (elapsedTime: number): Coord3 => {
      const angle = -elapsedTime * 0.1;

      return [
        Math.cos(angle) * (7 + Math.sin(elapsedTime * 0.32)),
        Math.sin(elapsedTime * 4) + Math.sin(elapsedTime * 2.5),
        Math.sin(angle) * (7 + Math.sin(elapsedTime * 0.5)),
      ];
    },
    getGhostRotation: (elapsedTime: number): Coord3 => {
      const angle = elapsedTime * 0.5;
      return [
        Math.sin(angle) * 0.3,
        (Math.abs(Math.sin(angle)) * Math.PI) / 4,
        -Math.sin(angle) * 0.3,
      ];
    },
  },
  {
    color: "none",
    getGhostPosition: (elapsedTime: number): Coord3 => {
      const angle = elapsedTime * 0.2;
      return [0, Math.abs(Math.sin(angle)) * 3.5, 1];
    },
    getGhostRotation: (elapsedTime: number): Coord3 => {
      const angle = elapsedTime * 0.5;
      return [Math.sin(angle) * 0.05, angle, Math.cos(angle) * 0.05];
    },
  },
  {
    color: "none",
    getGhostPosition: (elapsedTime: number): Coord3 => {
      const angle = elapsedTime * 0.6;
      return [0, 0.6, -2.2 + Math.sin(angle) * 1];
    },
    getGhostRotation: (elapsedTime: number): Coord3 => {
      const angle = elapsedTime * 0.4;
      return [
        Math.sin(angle) * 0.1,
        Math.PI + Math.sin(angle) * 0.3,
        -Math.sin(angle) * 0.05,
      ];
    },
  },
];
