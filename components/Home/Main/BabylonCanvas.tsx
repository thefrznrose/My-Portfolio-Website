import React, { useEffect, useRef } from "react";
import {
  Engine,
  Scene,
  ArcRotateCamera,
  HemisphericLight,
  Vector3,
} from "@babylonjs/core";
import { getMotif } from "@/functions/GetMotif";

const BabylonCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const engine = new Engine(canvasRef.current, true);
    const scene = new Scene(engine);

    // Add a camera
    const camera = new ArcRotateCamera(
      "camera",
      Math.PI / 2,
      Math.PI / 2,
      50,
      new Vector3(0, 0, 0),
      scene
    );
    camera.attachControl(canvasRef.current, true);

    // Add lighting
    const light = new HemisphericLight("light", new Vector3(0, 1, 0), scene);
    light.intensity = 0.8;

    // Load the motif
    const loadMotif = async () => {
        try {
          console.log("Gamble")
          // Ensure you pass all four arguments to getMotif
          const motifNode = await getMotif("1Y26.json", 0xcc2900, 0xff3300, scene);
          
          motifNode.position = new Vector3(1, 1, -1); // Adjust as needed
        } catch (error) {
          console.error("Error loading motif:", error);
        }
      };

    loadMotif();

    // Render loop
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
