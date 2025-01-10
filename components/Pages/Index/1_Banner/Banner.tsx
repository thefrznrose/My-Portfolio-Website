import { Container, Image, Text } from "@mantine/core";
import BabylonCanvas from "./BabylonCanvas";

export default function Banner() {
  return (
    <div style={{ position: 'relative', width: '100vw', height: '50vh', overflow: 'hidden' }}>
    <div>
      <BabylonCanvas />
    </div>
    <div
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 10,
    }}
    >
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

      <Text
        component="h1"
        size="xl"
        style={{
          fontWeight: 700,
          fontSize: "2.5rem", // Increase font size
        }}
        mt="lg"
      >
        Hello, I'm Shaun Rose
      </Text>
      <Text
        size="lg" // Larger size
        mt="sm"
        style={{
          fontWeight: 700
        }}
      >
        Welcome to my portfolio!
      </Text>
    </Container>
    </div>
  </div>
    );
}
