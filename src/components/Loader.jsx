import React from "react";
import { Html, useProgress } from "@react-three/drei";

const Loader = () => {
  const { progress } = useProgress();

  return (
    <Html>
      <span className="canvas-load">
        <a
          className="radial-progress"
          style={{
            fontSize: 14,
            color: "#f1f1f1",
            fontWeight: 800,
            marginTop: 40,
            "--value": progress,
          }}
        >
          {progress.toFixed(2)}%
        </a>
      </span>
    </Html>
  );
};

export default Loader;
