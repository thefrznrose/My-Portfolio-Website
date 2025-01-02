import React, { useEffect, useRef } from "react";
import {
  Engine,
  Scene,
  ArcRotateCamera,
  HemisphericLight,
  Vector3,
  DirectionalLight,
} from "@babylonjs/core";
import { getMotif } from "@/functions/GetMotif";

const BabylonCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const engine = new Engine(canvasRef.current, true);
    const scene = new Scene(engine);

    const camera = new ArcRotateCamera(
      "camera",
      Math.PI / 2,
      Math.PI / 4, 
      5, 
      new Vector3(0, 0, 0), 
      scene
    );
    camera.attachControl(canvasRef.current, true);
    
    const light = new HemisphericLight("light", new Vector3(0, 1, 0), scene);
    light.intensity = 0.8;
    const directionalLight = new DirectionalLight("dirLight", new Vector3(-1, -2, -1), scene);
    directionalLight.intensity = 1.0;


    // Load the motif
    const loadMotif = async () => {
        try {
          const { motif, center } = await getMotif("1Y26.json", 0xcc2900, 0xff3300, scene);
          console.log(center)
          motif.position = new Vector3(-center[0], -center[1], center[2]);
        } catch (error) {
          console.error("Error loading motif:", error);
        }
      };

    loadMotif();

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
