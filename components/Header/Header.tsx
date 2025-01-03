import { Divider, Flex } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

export default function Header() {
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <div>
      <Flex
        direction={isMobile ? "column" : "row"}
        align="center" 
        justify="center"
        wrap="wrap" 
        gap="xl" 
        style={{ padding: '1rem' }}
      >
        <a href="./">Home</a>
        <a href="./">About Me (CV + Resume)</a>
        <a href="./">Projects</a>
        <a href="https://www.linkedin.com/in/shaun-rose-a88752231/" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        <a href="https://github.com/thefrznrose" target="_blank" rel="noopener noreferrer">
          Github
        </a>
      </Flex>
      <Divider my="md" />
    </div>
  );
}
