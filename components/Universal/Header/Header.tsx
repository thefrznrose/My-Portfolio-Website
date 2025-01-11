import { Button, Divider, Flex } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import SeeCVButton from "./SeeCVButton";
import SeeResumeButton from "./SeeResumeButton";
import { IconPdf } from "@tabler/icons-react";

export default function Header() {
  const isMobile = useMediaQuery("(max-width: 768px)");

  function HandleOpenCVAsPDF() {
    window.open('/ShaunRose_Resume_12_23_24.pdf', '_blank');
  }

  function HandleOpenResumeAsPDF() {
    window.open('/ShaunRose_Resume_12_23_24.pdf', '_blank');
  }

  return (
    <div>
      <Flex
        direction="row" // Always use a row layout
        align="center"
        justify="space-between" // Spread items evenly
        wrap="wrap" // Allow wrapping to prevent overlap
        gap={isMobile ? "md" : "xl"} // Adjust gap for mobile vs larger screens
        style={{
          padding: isMobile ? "0.5rem" : "1rem", // Adjust padding for screen size
          flexWrap: "wrap", // Prevent overflow
          fontSize: isMobile ? "0.85rem" : "1rem", // Responsive font size
        }}
      >
        <a href="./" style={{ flex: "1 0 auto", textAlign: "center" }}>Home</a>
        <a href="./" style={{ flex: "1 0 auto", textAlign: "center" }}>About Me</a>
        <a href="./" style={{ flex: "1 0 auto", textAlign: "center" }}>Projects</a>
        <a
          href="https://www.linkedin.com/in/shaun-rose-a88752231/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            flex: "1 0 auto",
            fontSize: "1.5rem",
            color: "#0077b5",
            textAlign: "center",
          }}
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/thefrznrose"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            flex: "1 0 auto",
            fontSize: "1.5rem",
            color: "#333",
            textAlign: "center",
          }}
        >
          <FaGithub />
        </a>
        {/* <div style={{ flex: "1 0 auto", textAlign: "center" }}>
          <Button 
              rightSection={<IconPdf size={14} />}
              onClick={() => HandleOpenCVAsPDF()}
          >
            See Curriculum Vitae
          </Button>
        </div>
        <div style={{ flex: "1 0 auto", textAlign: "center" }}>
          <Button 
            rightSection={<IconPdf size={14} />}
            onClick={() => HandleOpenResumeAsPDF()}
          >
              See Resume
          </Button>
        </div> */}
      </Flex>
      <Divider my="md" />
    </div>
  );
}
