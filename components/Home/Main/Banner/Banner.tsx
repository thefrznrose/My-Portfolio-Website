import { Container, Image, Text } from "@mantine/core";

export default function Banner() {
  return (
    <Container
      size="sm"
      style={{
        display: "flex",
        flexDirection: "column", // Align items vertically
        alignItems: "center", // Center items horizontally
        justifyContent: "center", // Center items vertically
        textAlign: "center", // Center text alignment
        height: "50vh", // Set container height
      }}
    >
      <Image
        src="/my-headshot.jpg"
        alt="Your Name"
        style={{
          width: "300px", // Set the width
          borderRadius: "50%", // Circular shape
          objectFit: "cover", // Ensure the image fits the container
          border: "3px solid #ccc", // Optional border
        }}
      />

      <Text component="h1" size="xl" mt="lg">
        Hello, I'm Shaun Rose
      </Text>
      <Text size="md" mt="sm">
        Welcome to my portfolio!
      </Text>
    </Container>
  );
}
