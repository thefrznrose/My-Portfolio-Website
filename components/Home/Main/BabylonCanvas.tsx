import React, { useEffect, useRef, useState } from "react";
import {
  Engine,
  Scene,
  ArcRotateCamera,
  HemisphericLight,
  Vector3,
  DirectionalLight,
  Mesh,
} from "@babylonjs/core";

import { getMotif } from "@/functions/GetMotif";

// Initialize the canvas function that returns engine and scene.
function initializeCanvas(canvasRef: HTMLCanvasElement | null) {
  if (!canvasRef) return { engine: null, scene: null };
  // Initilizing the engine and scene.
  const engine = new Engine(canvasRef, true);
  const scene = new Scene(engine);
  //Initializing the camera.
  const camera = new ArcRotateCamera(
    "camera",
    Math.PI / 2,
    Math.PI / 4, 
    5, 
    new Vector3(0, 0, 0), 
    scene
  );
  camera.attachControl(canvasRef, true);
  //Initializing the light.
  const light = new HemisphericLight("light", new Vector3(0, 1, 0), scene);
  light.intensity = 0.8;
  const directionalLight = new DirectionalLight("dirLight", new Vector3(-1, -2, -1), scene);
  directionalLight.intensity = 1.0;
  // Return the engine and scene
  return { engine, scene };
}

// Declaring the babylon canvas.
const BabylonCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const motifRef = useRef<Mesh | null>(null);
  useEffect(() => {
    // Initializing the canvas.
    const {engine, scene} = initializeCanvas(canvasRef.current)
    if (!engine || !scene) return;
    // Load a motif from the public directory.
    const loadMotif = async () => {
        try {
          const { motif, center } = await getMotif("1Y26.json", "0xcc2900", 0xff3300, 1, scene);
          motif.position = new Vector3(-center[0], -center[1], center[2]);
          // motif.position = new Vector3(0,0,0)
          motifRef.current = motif;
        } catch (error) {
          console.error("Error loading motif:", error);
        }
      };
    loadMotif();
    //Render loop.
    engine.runRenderLoop(() => {
      if (motifRef.current) {
        // Apply a slow rotation on each frame
        motifRef.current.rotation.y += 0.01; // Adjust the value for faster/slower rotation
      }
      scene.render();
    });
    // Event lister to handle resizing.
    const resizeHandler = () => {
      engine.resize();
    };
    window.addEventListener("resize", resizeHandler);
    //Clean up after unmounting..
    return () => {
      scene.dispose();
      engine.dispose();
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);
  return <canvas ref={canvasRef} style={{ width: "100%", height: "100%" }} />;
};

export default BabylonCanvas;
