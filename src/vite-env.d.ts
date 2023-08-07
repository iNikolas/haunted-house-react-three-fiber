/// <reference types="vite/client" />
import { ReactThreeFiber } from "@react-three/fiber";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      textGeometry: ReactThreeFiber.Object3DNode<
        TextGeometry,
        typeof TextGeometry
      >;
    }
  }
}
