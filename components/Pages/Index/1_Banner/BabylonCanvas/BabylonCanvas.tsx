
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
  ActionManager,
  ExecuteCodeAction
} from "@babylonjs/core";
import { getMotif } from "@/functions/GetMotif";

function initializeEngineAndScene(canvasRef: HTMLCanvasElement | null) {
  if (!canvasRef) return { engine: null, scene: null };
  const engine = new Engine(canvasRef, true);
  const scene = new Scene(engine);
  scene.clearColor = new Color4(1, 1, 1, 1); 
  const camera = new ArcRotateCamera(
    "camera",
    Math.PI / 2,
    Math.PI / 4, 
    5, 
    new Vector3(0, 0, 0), 
    scene
  );
  const light = new HemisphericLight("light", new Vector3(0, 1, 0), scene);
  light.intensity = 0.8;
  const directionalLight = new DirectionalLight("dirLight", new Vector3(-1, -2, -1), scene);
  directionalLight.intensity = 1.0;
  return { engine, scene };
}

const BabylonCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const motifRef = useRef<Mesh[]>([]); 
  const defaultRotationSpeed = 0.005;
  let currentRotationSpeed = 0.005;
  const scaleMotif = (scene: Scene, baseScale: number) => {
    const width = window.innerWidth;
    let aspectScale = width / 15000; 
    if (width < 768) {
      aspectScale = width / 10000;
    } else if (width < 1024) {
      aspectScale = width / 15000;
    }
    const finalScale = Math.max(aspectScale * baseScale, 0.035); // Clamp to prevent overly small motifs
    motifRef.current.forEach((motif) => {
      motif.scaling = new Vector3(finalScale, finalScale, finalScale);
    });
  };

  useEffect(() => {
    const { engine, scene } = initializeEngineAndScene(canvasRef.current);
    if (!engine || !scene) return;
  
    let renderLoopStarted = false;
  
    const startRenderLoop = () => {
      if (renderLoopStarted) return;
      renderLoopStarted = true;
  
      engine.runRenderLoop(() => {
        const dragFactor = 0.01;
        const rotationDrag = (currentRotationSpeed - defaultRotationSpeed) * dragFactor;
  
        if (currentRotationSpeed > defaultRotationSpeed) {
          currentRotationSpeed -= rotationDrag;
        } else if (currentRotationSpeed < defaultRotationSpeed) {
          currentRotationSpeed += rotationDrag;
        }
        if (Math.abs(currentRotationSpeed - defaultRotationSpeed) < 0.00001) {
          currentRotationSpeed = defaultRotationSpeed;
        }
  
        motifRef.current.forEach((motif) => {
          motif.rotation.y += currentRotationSpeed / 10;
          motif.rotation.x += currentRotationSpeed;
        });
  
        scene.render();
      });
    };
  
    const loadMotif = async () => {
      try {
        const { motif: redMotif, center: redCenter } = await getMotif(
          "1Y26.json", "0xcc2900", 0xff3300, 1, scene
        );
        redMotif.position = new Vector3(-redCenter[0] + 3.25, -redCenter[1], redCenter[2]);
        motifRef.current.push(redMotif);
  
        const { motif: blueMotif, center: blueCenter } = await getMotif(
          "1Y26.json", "0x0000ff", 0x0000cc, 1, scene
        );
        blueMotif.position = new Vector3(-blueCenter[0] - 3.25, -blueCenter[1], blueCenter[2]);
        motifRef.current.push(blueMotif);
  
        // Scale them BEFORE rendering
        scaleMotif(scene, 0.3);
  
        // Add hover actions
        motifRef.current.forEach((motif) => {
          motif.actionManager = new ActionManager(scene);
          motif.metadata = { isBobbing: false, bobStartTime: 0 };
          motif.actionManager.registerAction(
            new ExecuteCodeAction(ActionManager.OnPointerOverTrigger, () => {
              motif.metadata.isBobbing = true;
              motif.metadata.bobStartTime = performance.now();
            })
          );
          motif.actionManager.registerAction(
            new ExecuteCodeAction(ActionManager.OnPointerOutTrigger, () => {
              motif.metadata.isBobbing = false;
              motif.position.y = 0;
            })
          );
        });
  
        // Only NOW start rendering
        startRenderLoop();
      } catch (error) {
        console.error("Error loading motif:", error);
      }
    };
  
    loadMotif();
  
    const handleScroll = () => {
      currentRotationSpeed += 0.0015;
    };
  
    const resizeHandler = () => {
      engine.resize();
      scaleMotif(scene, 0.3);
    };
  
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", resizeHandler);
  
    return () => {
      scene.dispose();
      engine.dispose();
      window.removeEventListener("resize", resizeHandler);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  return <canvas ref={canvasRef} style={{ width: "100%", height: "100%" }} />;
};

export default BabylonCanvas;
