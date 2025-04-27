import { Image, Text, Container, Flex } from "@mantine/core";

export default function AboutMe() {
  return (
    <Container py="xl" size="md">
      <Flex
        direction={{ base: 'column', md: 'row' }}
        align="center"
        gap="xl"
      >
        {/* Left side: Photo */}
        <Image
          src="Images/Sacnas24_PosterAlone.jpg"
          alt="Photo of me presenting RNAnnotations"
          radius="md"
          w={500}
          style={{ objectFit: "cover" }}
        />

        {/* Right side: Paragraph */}
        <Text size="xl" style={{ fontWeight: 700 }}>
          I'm a computer science graduate from CSUMB with a passion for combining scientific research and technology. 
          My work focuses on RNA 3D structure visualization, citizen science platforms, computer architecture, and educational game development. 
          I also served as a teaching assistant for two years, where I helped students master challenging concepts in computer architecture and networking. 
          I enjoy building engaging, visually dynamic tools that make complex scientific and technical information more accessible and exciting.
        </Text>
      </Flex>
    </Container>
  );
}
