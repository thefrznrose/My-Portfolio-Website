import React, { useEffect, useRef } from "react";
import { Engine, Scene, ArcRotateCamera, HemisphericLight, Vector3, MeshBuilder } from "@babylonjs/core";

const BabylonCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const engine = new Engine(canvasRef.current, true);
    const scene = new Scene(engine);

    // Create a sphere
    const sphere = MeshBuilder.CreateSphere("sphere", { diameter: 2 }, scene);

    // Add a camera
    const camera = new ArcRotateCamera("camera", Math.PI / 2, Math.PI / 2, 10, sphere.position, scene);
    camera.attachControl(canvasRef.current, true);

    // Add a light
    new HemisphericLight("light", new Vector3(0, 1, 0), scene);

    engine.runRenderLoop(() => {
      scene.render();
    });

    const resizeHandler = () => {
      engine.resize();
    };

    window.addEventListener("resize", resizeHandler);

    return () => {
      scene.dispose();
      engine.dispose();
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  return <canvas ref={canvasRef} style={{ width: "100%", height: "100%" }} />;
};

export default BabylonCanvas;
