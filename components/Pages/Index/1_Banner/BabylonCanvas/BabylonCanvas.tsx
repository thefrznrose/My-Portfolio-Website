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
  StandardMaterial,
  Color3
} from "@babylonjs/core";

import { getMotif } from "@/functions/GetMotif";

// Initialize the canvas function that returns engine and scene.
function initializeCanvas(canvasRef: HTMLCanvasElement | null) {
  if (!canvasRef) return { engine: null, scene: null };
  // Initilizing the engine and scene.
  const engine = new Engine(canvasRef, true);
  const scene = new Scene(engine);
  scene.clearColor = new Color4(1, 1, 1, 1); 

  //Initializing the camera.
  const camera = new ArcRotateCamera(
    "camera",
    Math.PI / 2,
    Math.PI / 4, 
    5, 
    new Vector3(0, 0, 0), 
    scene
  );
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
  const motifRef = useRef<Mesh[]>([]); 
  const defaultRotationSpeed = 0.005;
  let currentRotationSpeed = 0.005;

  const scaleMotif = (scene: Scene, baseScale: number) => {
    const width = window.innerWidth;
  
    // Dynamically adjust scaling based on screen width
    let aspectScale = width / 15000; // Default scale factor
    if (width < 768) {
      // Phones
      aspectScale = width / 10000;
    } else if (width < 1024) {
      // Tablets
      aspectScale = width / 15000;
    }
  
    const finalScale = Math.max(aspectScale * baseScale, 0.035); // Clamp to prevent overly small motifs
    motifRef.current.forEach((motif) => {
      motif.scaling = new Vector3(finalScale, finalScale, finalScale);
    });
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
    
        // Apply scaling after loading motifs
        scaleMotif(scene, 0.3);
      } catch (error) {
        console.error("Error loading motif:", error);
      }
    };
    loadMotif();
        
    const handleScroll = () => {
      currentRotationSpeed += .0015;
    };
    
    window.addEventListener("scroll", handleScroll);

    engine.runRenderLoop(() => {
      const dragFactor = 0.01; 
      const rotationDrag = (currentRotationSpeed - defaultRotationSpeed) * dragFactor;
    
      if (currentRotationSpeed > defaultRotationSpeed) {
        currentRotationSpeed -= rotationDrag;
      } else if (currentRotationSpeed < defaultRotationSpeed) {
        currentRotationSpeed += rotationDrag; // If speed drops below default, restore it
      }
    
      if (Math.abs(currentRotationSpeed - defaultRotationSpeed) < 0.00001) {
        currentRotationSpeed = defaultRotationSpeed;
      }
    
      motifRef.current.forEach((motif) => {
        // Apply a slow rotation on each frame
        motif.rotation.y += currentRotationSpeed / 10;
        motif.rotation.x += currentRotationSpeed;
      });
    
      scene.render();
    });
    
    // Add resize handling
    const resizeHandler = () => {
      engine.resize();
      scaleMotif(scene, 0.3);
    };
    window.addEventListener("resize", resizeHandler);

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
