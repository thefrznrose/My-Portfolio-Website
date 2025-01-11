import { Flex } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

export default function Footer() {
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
        @2025 Shaun Rose. All Rights Reserved.
      </Flex>
    </div>
  );
}
