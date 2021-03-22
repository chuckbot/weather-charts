import { Sky } from "@react-three/drei";
import { Canvas } from "react-three-fiber";
import { ITemperatureBackground } from "./models";

export const TemperatureBackground = ({
  controllerSnapshot,
}: ITemperatureBackground) => {
  return (
    <Canvas
      style={{
        width: "100vw",
        height: "100vh",
        background: "#323232",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: -1,
      }}
    >
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <Sky {...controllerSnapshot} />
    </Canvas>
  );
};
