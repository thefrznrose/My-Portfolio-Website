import { useRef } from "react";
import Header from "@/components/Universal/Header/Header";
import Banner from "./1_Banner/Banner";
import AboutMe from "./2_AboutMe/AboutMe";
import ProjectList from "./3_ProjectList/ProjectList";
import { Button } from "@mantine/core";

export default function IndexComponent() {
  // Explicitly define the type of the ref as HTMLDivElement
  const projectListRef = useRef<HTMLDivElement>(null);

  const handleScrollToProjects = () => {
    if (projectListRef.current) {
      projectListRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Header />
      <Banner />
      <div
        style={{
          position: "absolute",
          bottom: 0, // Position the button at the bottom
          width: "100%", // Ensure the button container spans the full width
          display: "flex", // Use flexbox for centering
          justifyContent: "center", // Center horizontally
          padding: "1rem", // Optional padding
        }}
      >
        <Button onClick={handleScrollToProjects}>See Projects</Button>
      </div>
      <AboutMe />
      {/* Attach the ref to the ProjectList component */}
      <div ref={projectListRef}>
        <ProjectList />
      </div>
    </>
  );
}
