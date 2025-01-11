import { Divider, Flex } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { FaLinkedin, FaGithub } from "react-icons/fa"; // Import LinkedIn and GitHub icons
import SeeCVButton from "./SeeCVButton";
import SeeResumeButton from "./SeeResumeButton";

export default function Header() {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <div>
      <Flex
        direction={isMobile ? "column" : "row"}
        align="center"
        justify="center"
        wrap="wrap"
        gap="xl"
        style={{ padding: "1rem" }}
      >
        <a href="./">Home</a>
        <a href="./">About Me</a>
        <a href="./">Projects</a>
        {/* LinkedIn Icon */}
        <a
          href="https://www.linkedin.com/in/shaun-rose-a88752231/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontSize: "1.5rem", color: "#0077b5" }} // Optional styling for LinkedIn icon
        >
          <FaLinkedin />
        </a>
        {/* GitHub Icon */}
        <a
          href="https://github.com/thefrznrose"
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontSize: "1.5rem", color: "#333" }} // Optional styling for GitHub icon
        >
          <FaGithub />
        </a>
        <SeeCVButton />
        <SeeResumeButton />
      </Flex>
      <Divider my="md" />
    </div>
  );
}
