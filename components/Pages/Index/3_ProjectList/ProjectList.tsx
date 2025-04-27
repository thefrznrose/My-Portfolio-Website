import { useState } from "react";
import { Card, Image, Text, Button, SimpleGrid, Container } from "@mantine/core";

interface ProjectItem {
    id: string;
    image: string;
    title: string;
    description: string;
    content: string;
    github?: string; // <-- NEW optional GitHub link
  }
  

const projectsList: ProjectItem[] = [
  {
    id: "rnannotations",
    image: "Images/TaggingProjectPoster_Final.jpg",
    title: "RNAnnotations",
    description: "A tool for visualizing, annotating, and classifying RNA 3D motifs.",
    content: "Full description here...",
    github: ""
  },
  {
    id: "basepairing",
    image: "Images/BasePairing_Slide.png",
    title: "Curated Benchmark Dataset for RNA Base Pair Annotations",
    description: "A benchmark dataset for RNA motif base pair annotations.",
    content: "Full description here...",
    github: ""
  },
  {
    id: "bslt",
    image: "Images/BSLT_Interface.png",
    title: "Big Sur Land Trust: Fire Recovery Monitoring Web Service",
    description: "Citizen science platform for monitoring forest fire recovery.",
    content: "Full description here...",
    github: ""
  },
  {
    id: "discerna",
    image: "Images/DisceRNA_Screenshot.png",
    title: "DisceRNA: RNA Structure Recognition Game",
    description: "A citizen science game for learning and classifying RNA structural motifs.",
    content: `DisceRNA is an educational and research-driven game designed to crowdsource similarity data on RNA structural motifs.
Players interact with colorful 3D RNA structures, learning to recognize motifs like k-turns and pseudoknots while helping researchers collect valuable biological insights.
Built with graphics programming libraries like Babylon.js and Three.js, DisceRNA combines real scientific challenges with engaging game mechanics to make structural biology accessible and fun.`,
    github: ""
  },
  {
    id: "logicsimulator",
    image: "Images/LogicSimulator_Screenshot.png",
    title: "Logic Circuit Simulator",
    description: "Web-based tool for creating and simulating digital logic circuits.",
    content: `The Logic Circuit Simulator is an interactive web application that allows users to design and simulate digital circuits using basic logic gates.
Features include:
- Drag-and-drop interface for gates (AND, OR, NOT, XOR, etc.)
- Wiring connections between components
- Real-time simulation with visual feedback
- Saving and loading circuit designs
- Exporting circuits as images or schematics

Built with React and TypeScript, this project demonstrates fundamental computer engineering concepts in an accessible way, making it useful for both education and prototyping.`,
    github: ""
  },
  {
    id: "oralexammanager",
    image: "Images/OralExamManager_Screenshot.png",
    title: "Code-Oriented Oral Exam Manager",
    description: "A platform for assessing coding abilities through automated oral exams.",
    content: `The Code-Oriented Oral Exam Manager is an innovative tool designed to help professors and employers evaluate coding skills more effectively. 
It allows candidates to verbally walk through and explain their code submissions while the system tracks keyword usage, structural choices, and problem-solving approaches. 
By automating parts of the oral examination process, it offers scalable, personalized assessments that reveal both coding ability and communication skills — two critical aspects of technical competence. 
Built with a focus on academic and hiring use cases, this tool bridges the gap between theoretical knowledge and real-world coding fluency.`,
    github: ""
  }
];

export default function ProjectList() {
  const [expandedProjectId, setExpandedProjectId] = useState<string | null>(null);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "4rem",
      }}
    >
      {/* Heading */}
      <Text
        fw={700}
        size="2.5rem"
        mb="2rem"
        style={{ fontFamily: "sans-serif" }}
      >
        My Projects
      </Text>

      {/* Grid of cards */}
      <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="xl" style={{ width: "100%" }}>
        {projectsList.map((project) => {
          const isExpanded = expandedProjectId === project.id;

          return (
            <Card
              key={project.id}
              shadow="md"
              padding="lg"
              radius="md"
              withBorder
              style={{
                transition: "all 0.3s ease",
                cursor: "pointer",
                minHeight: isExpanded ? "600px" : "auto", // taller when expanded
                gridColumn: isExpanded ? "1 / -1" : undefined, // take entire row when expanded
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform = "scale(1.03)";
                (e.currentTarget as HTMLDivElement).style.backgroundColor = "rgba(0, 0, 0, 0.03)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform = "scale(1)";
                (e.currentTarget as HTMLDivElement).style.backgroundColor = "transparent";
              }}
            >
              <Card.Section>
                <Image src={project.image} height={300} width={"auto"} alt={project.title} />
              </Card.Section>

              <Text fw={500} size="lg" mt="md">
                {project.title}
              </Text>

              <Text size="sm" color="dimmed" mt="xs">
                {project.description}
              </Text>

              {!isExpanded && (
                <Button fullWidth mt="md" onClick={() => setExpandedProjectId(project.id)}>
                  See More
                </Button>
              )}
            {isExpanded && (
            <>
                <Text size="sm" mt="md" style={{ textAlign: "left" }}>
                {project.content}
                </Text>

                <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
                <Button fullWidth variant="light" onClick={() => setExpandedProjectId(null)}>
                    See Less
                </Button>

                {project.github && (
                    <Button
                    fullWidth
                    variant="outline"
                    component="a"
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    See GitHub
                    </Button>
                )}
                </div>
            </>
            )}
            </Card>
          );
        })}
      </SimpleGrid>
    </div>
  );
}
