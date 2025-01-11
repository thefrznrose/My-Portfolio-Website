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
          bottom: 0, 
          width: "100%", 
          display: "flex", 
          justifyContent: "center", 
          padding: "1rem",
        }}
      >
        <Button onClick={handleScrollToProjects}>See Projects</Button>
      </div>
      <AboutMe />
      <div ref={projectListRef}>
        <ProjectList />
      </div>
    </>
  );
}
