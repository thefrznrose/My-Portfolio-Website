import { Container, Text, Image } from "@mantine/core";
import { useState, useEffect } from "react";

export default function Welcome() {
  const [hover, setHover] = useState(false);
  const [rotationAngle, setRotationAngle] = useState(0); // Current rotation angle
  const [speed, setSpeed] = useState(0.5); // Current rotation speed
  const defaultSpeed = 0.5;
  const maxSpeed = 10;
  const slowDownRate = 0.25;

  useEffect(() => {
    // Update rotation angle at a consistent interval
    const interval = setInterval(() => {
      setRotationAngle((prev) => (prev + speed) % 360);
    }, 16); // Approximately 60 FPS

    return () => clearInterval(interval);
  }, [speed]);

  useEffect(() => {
    const handleScroll = () => {
      // Increase speed on scroll, up to a maximum value
      setSpeed((prev) => Math.min(prev + 0.5, maxSpeed));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Gradually reduce speed back to the default value
    const slowDown = setInterval(() => {
      setSpeed((prev) =>
        prev > defaultSpeed ? Math.max(prev - slowDownRate, defaultSpeed) : prev
      );
    }, 100);

    return () => clearInterval(slowDown);
  }, []);

  return (
    <>
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
            height: "50vh",
          }}
        >
          <div
            style={{
              borderRadius: "50%",
              padding: "5px",
              background: `linear-gradient(${rotationAngle}deg, red, orange, yellow, green, blue, indigo, violet)`,
              backgroundSize: "400% 400%",
              transition: hover ? "background 0.3s ease" : "none",
            }}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            <Image
              src="/Images/my-headshot.jpg"
              alt="Your Name"
              style={{
                width: "clamp(100px, 20vw, 300px)", // Scales between 150px and 300px based on viewport width
                height: "auto", // Maintains aspect ratio
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
            Hello, I'm Shaun Rose
          </Text>
          <Text
            size="lg"
            mt="sm"
            style={{
              fontWeight: 700,
            }}
          >
            Here, you can check out what I'm working on.
          </Text>
        </Container>
      </div>
    </>
  );
}
