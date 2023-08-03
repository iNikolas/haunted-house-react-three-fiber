export const floorSize = 50;

export const houseDimensions: [width: number, height: number, length: number] =
  [4, 2.5, 4];

const basicRoofSize = Math.sqrt((houseDimensions[0] * houseDimensions[0]) / 2);
const roofProtrusion = 0.7;

export const roofDimensions: [size: number, height: number, segments: number] =
  [basicRoofSize + roofProtrusion, 1, 4];
export const doorDimensions: [width: number, height: number] = [2, 2];

export const wallsColor = "#ac8e82";
export const roofColor = "#b35f45";
export const doorColor = "#aa7b7b";
export const bushColor = "#89c854";

export const bushesList: {
  scale: number;
  position: [number, number, number];
}[] = [
  { scale: 0.5, position: [0.8, 0.2, 2.2] },
  { scale: 0.25, position: [1.4, 0.1, 2.1] },
  { scale: 0.4, position: [-0.8, 0.1, 2.2] },
  { scale: 0.15, position: [-1, 0.05, 2.6] },
];
