import { Container, Text, Image, Button, Group } from "@mantine/core"; 
import { useState, useEffect } from "react";

export default function Welcome() {
  const [hover, setHover] = useState(false);
  const [rotationAngle, setRotationAngle] = useState(0);
  const [speed, setSpeed] = useState(0.5);
  const defaultSpeed = 0.5;
  const maxSpeed = 10;
  const slowDownRate = 0.25;

  useEffect(() => {
    const interval = setInterval(() => {
      setRotationAngle((prev) => (prev + speed) % 360);
    }, 16);
    return () => clearInterval(interval);
  }, [speed]);

  useEffect(() => {
    const handleScroll = () => {
      setSpeed((prev) => Math.min(prev + 0.15, maxSpeed));
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const slowDown = setInterval(() => {
      setSpeed((prev) =>
        prev > defaultSpeed ? Math.max(prev - slowDownRate, defaultSpeed) : prev
      );
    }, 100);
    return () => clearInterval(slowDown);
  }, []);

  return (
    <div
      style={{
        position: "absolute",
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
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          height: "70vh", // Slightly taller to fit the buttons
        }}
      >
        <div
          style={{
            borderRadius: "50%",
            padding: "10px",
            background: `linear-gradient(${rotationAngle}deg, red, orange, yellow, green, blue, indigo, violet)`,
            // backgroundSize: "400% 400%",
            transition: hover ? "background 0.3s ease" : "none",
          }}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <Image
            src="/Images/my-headshot.jpg"
            alt="Your Name"
            style={{
              width: "clamp(200px, 30vw, 400px)",
              height: "auto",
              borderRadius: "50%",
              objectFit: "cover",
            }}
          />
        </div>

        <Text
          component="h1"
          size="xl"
          style={{
            fontWeight: 700,
            fontSize: "2.5rem",
          }}
          mt="lg"
        >
          Shaun Rose
        </Text>

        <Text
          size="xl"
          mt="sm"
          style={{
            fontWeight: 700,
          }}
        >
          Web Development | Machine Learning | Bioinformatics
        </Text>

        {/* Buttons below text */}
        <Group mt="md" gap={"xl"}>
          <Button variant="filled" color="blue" size="xl">
            View Portfolio
          </Button>
          <Button variant="outline" color="blue" size="xl">
            Contact Me
          </Button>
          <Button variant="light" color="blue" size="xl">
            About Me
          </Button>
        </Group>
      </Container>
    </div>
  );
}
