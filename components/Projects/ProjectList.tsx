import { Divider } from "@mantine/core";
import ProjectListItem from "./ListItems/ProjectListItem";

export default function ProjectList() {
  const projects = [
    {
      title: "RNA Annotation GIF",
      bulletPoints: [
        "Point 1 about the image",
        "Point 2 about the image",
        "Point 3 about the image",
      ],
      gifSrc: "/tempGIF.gif", 
    },
    {
      title: "DisceRNA Project",
      bulletPoints: [
        "Feature 1 of DisceRNA",
        "Feature 2 of DisceRNA",
        "Feature 3 of DisceRNA",
      ],
      gifSrc: "/tempGIF.gif", 
    },
    {
      title: "Code-Oriented Oral Exam",
      bulletPoints: [
        "Feature 1 of the exam",
        "Feature 2 of the exam",
        "Feature 3 of the exam",
      ],
      gifSrc: "/tempGIF.gif", 
    },
    {
      title: "RNA Motif Annotations",
      bulletPoints: [
        "Annotation 1 of RNA motif",
        "Annotation 2 of RNA motif",
        "Annotation 3 of RNA motif",
      ],
      gifSrc: "/tempGIF.gif", 
    },
  ];

  return (
    <>
      {/* Iterate through projects and render a ProjectListItem for each */}
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
