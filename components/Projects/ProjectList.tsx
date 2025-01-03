import { Divider } from "@mantine/core";
import ProjectListItem from "./ListItems/ProjectListItem";

export default function ProjectList() {
  const projects = [
    {
      title: "Big Sur Land Trust Fire Recovery Monitoring Web Service",
      bulletPoints: [
        "Designed and developed a citizen science platform to monitor forest fire recovery in the Mittledorf Preserve.",
        "Implemented features for interactive photo uploads, metadata management, and timelapse generation using Next.js, Express.js, MoviePy, and FFmpeg.",
        "Integrated photo caching for offline uploads and real-time location tracking to improve data accuracy in low-service areas.",
      ],
      gifSrc: "/tempGIF.gif",
    },
    {
      title: "DisceRNA Citizen Science Game",
      bulletPoints: [
        "Co-designed a citizen science platform for analyzing RNA tertiary structures and motifs.",
        "Implemented interactive front-end features using Next.js and THREE.js for 3D graphics.",
        "Facilitated user participation in RNA motif analysis to support the identification of novel motifs.",
      ],
      gifSrc: "/tempGIF.gif",
    },
    {
      title: "RNAnnotations",
      bulletPoints: [
        "Created a tool for annotating RNA motifs to support professional RNA researchers.",
        "Utilized Next.js and THREE.js to visualize structural motifs in 3D.",
        "Integrated features for tagging and classifying RNA structures into families based on their annotations.",
      ],
      gifSrc: "/tempGIF.gif",
    },
    {
      title: "Curated Benchmark Dataset for RNA Base Pair Annotations",
      bulletPoints: [
        "Led the creation of a benchmark dataset for RNA motif base pair annotations.",
        "Merged tools like CLARNA, FR3D, MC Annotate, DSSR, RNAVIew, and RNA Motif Atlas for dataset generation.",
        "Won 3rd place at the 2024 CSUMB Undergraduate Research Symposium for this work.",
      ],
      gifSrc: "/tempGIF.gif",
    },
    {
      title: "Code-Oriented Oral Exam Manager",
      bulletPoints: [
        "Developed an oral exam manager to assess student code submissions and comprehension.",
        "Analyzed programming language keywords and automated question generation to streamline the exam process.",
        "Improved exam workflow by targeting questions based on student code, enhancing the assessment experience.",
      ],
      gifSrc: "/tempGIF.gif",
    },
  ];
  
  return (
    <>
      {projects.map((project, index) => (
        <>
            <ProjectListItem
              key={index}
              title={project.title}
              bulletPoints={project.bulletPoints}
              gifSrc={project.gifSrc}
            />        
            <Divider my="md" />
        </>
      ))}
    </>
  );
}
