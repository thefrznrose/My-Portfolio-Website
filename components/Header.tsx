import Link from "next/link";
import { Flex } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

export default function Header() {
  const isMobile = useMediaQuery('(max-width: 768px)');
  
  return (
    <div>
      <Flex
        direction={isMobile ? "column" : "row"} // Stack links vertically on mobile
        align="center" // Center the links horizontally
        justify="center" // Center the links vertically
        wrap="wrap" // Allow wrapping if necessary
        gap="md" 
        style={{ padding: '1rem' }}
      >
        <Link href="./">Home</Link>
        <Link href="./">About Me (CV + Resume)</Link>
        <Link href="./">Projects</Link>
        <Link href="./">Contact</Link>
      </Flex>
    </div>
  );
}
