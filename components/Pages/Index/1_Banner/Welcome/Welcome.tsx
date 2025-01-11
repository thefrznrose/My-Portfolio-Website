import { Container, Text, Image } from "@mantine/core";
import { useState, useEffect, useRef } from "react";

export default function Welcome() {
  const [hover, setHover] = useState(false);
  const [rotationAngle, setRotationAngle] = useState(0); // Tracks the current angle of rotation
  const [speed, setSpeed] = useState(0.5); // Default rotation speed in degrees per interval
  const defaultSpeed = 0.5; // Default rotation speed
  const maxSpeed = 10; // Maximum speed multiplier on scroll
  const slowDownRate = 0.25; // Rate at which speed decreases back to default

  useEffect(() => {
    // Rotation logic: update angle based on speed
    const interval = setInterval(() => {
      setRotationAngle((prev) => (prev + speed) % 360); // Keep angle within 0-360
    }, 16); // Approx 60 FPS

    return () => clearInterval(interval);
  }, [speed]);

  useEffect(() => {
    const handleScroll = () => {
      // Increase speed when scrolling
      setSpeed((prev) => Math.min(prev + 0.5, maxSpeed)); // Increase speed up to maxSpeed
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Gradually reduce speed back to default
    const slowDown = setInterval(() => {
      setSpeed((prev) =>
        prev > defaultSpeed ? Math.max(prev - slowDownRate, defaultSpeed) : prev
      );
    }, 100); // Adjust speed every 100ms

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
              padding: "5px", // Space between the image and border
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
                width: "350px",
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
