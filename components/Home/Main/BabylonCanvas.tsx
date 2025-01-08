import React, { useEffect, useRef, useState } from "react";
import {
  Engine,
  Scene,
  ArcRotateCamera,
  HemisphericLight,
  Vector3,
  DirectionalLight,
  Mesh,
  Color4,
} from "@babylonjs/core";

import { getMotif } from "@/functions/GetMotif";

// Initialize the canvas function that returns engine and scene.
function initializeCanvas(canvasRef: HTMLCanvasElement | null) {
  if (!canvasRef) return { engine: null, scene: null };
  // Initilizing the engine and scene.
  const engine = new Engine(canvasRef, true);
  const scene = new Scene(engine);
  scene.clearColor = new Color4(1, 1, 1, 1); // RGBA for white (alpha = 1 for full opacity)

  //Initializing the camera.
  const camera = new ArcRotateCamera(
    "camera",
    Math.PI / 2,
    Math.PI / 4, 
    5, 
    new Vector3(0, 0, 0), 
    scene
  );
  // camera.attachControl(canvasRef, false);
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
  const motifRef = useRef<Mesh[]>([]); // Array to hold multiple motifs


  const scaleMotif = (engine: Engine, scene: Scene, scale: number) => {
    const aspectRatio = window.innerWidth / 20000;
    // console.log(aspectRatio)
    if(aspectRatio > 0.7) {
      motifRef.current.forEach((motif) => {
        motif.scaling = new Vector3(aspectRatio * scale, aspectRatio * scale, aspectRatio * scale);
      });
    }
  };
  
  useEffect(() => {
    // Initializing the canvas.
    const {engine, scene} = initializeCanvas(canvasRef.current)
    if (!engine || !scene) return;
        const loadMotif = async () => {
          try {
            const { motif: redMotif, center: redCenter } = await getMotif(
              "1Y26.json",
              "0xcc2900", // Red color
              0xff3300,
              1,
              scene
            );
            redMotif.position = new Vector3(-redCenter[0] + 3, -redCenter[1], redCenter[2]);
            motifRef.current.push(redMotif); // Add red motif to the array
            const { motif: blueMotif, center: blueCenter } = await getMotif(
              "1Y26.json",
              "0x0000ff", // Blue color
              0x0000cc,
              1,
              scene
            );
            blueMotif.position = new Vector3(-blueCenter[0] - 3, -blueCenter[1], blueCenter[2]);
            motifRef.current.push(blueMotif); // Add blue motif to the array
          } catch (error) {
            console.error("Error loading motif:", error);
          }
    
          // Set initial scaling and position
          motifRef.current.forEach((motif, index) => {
            const aspectRatio = window.innerWidth / 20000
            const scale = 0.3;
            motif.scaling = new Vector3(aspectRatio * scale, aspectRatio * scale, aspectRatio * scale);
          });
        };
        loadMotif();
    
      engine.runRenderLoop(() => {
        motifRef.current.forEach((motif) => {
          // Apply a slow rotation on each frame
          motif.rotation.y += 0.005; // Adjust the value for faster/slower rotation
          motif.rotation.x += 0.005;
        });
        scene.render();
      });
    // Event lister to handle resizing.
    const resizeHandler = () => {
      engine.resize();
      scaleMotif(engine, scene, 0.3); // Scale the motif when resizing
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
