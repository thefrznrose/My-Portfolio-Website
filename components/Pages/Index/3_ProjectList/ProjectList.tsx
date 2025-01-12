import React from "react";
import RNAnnotations from "./Projects/RNAnnotations";
import CodeOrientedOralExamManager from "./Projects/CodeOrientedOralExamManager";
import DisceRNA from "./Projects/DisceRNA";
import BasePairing from "./Projects/BasePairing";
import BigSurLandTrust from "./Projects/BigSurLandTrust";

export default function ProjectList() {
  return (
    <>
    <RNAnnotations/>
    <BasePairing/>
    <DisceRNA/>
    <BigSurLandTrust/>
    <CodeOrientedOralExamManager/>
    </>
  );
}
