import { Container, Divider, Image, Text } from "@mantine/core";

export default function Banner () {
    return(
        <>
        <Container
          size="sm"
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "2rem",
          }}
        >
          <Image
            src="/my-headshot.jpg" 
            alt="Your Name"
            height={300}
            style={{
              borderRadius: "50%",  
              objectFit: "cover",   
              border: "3px solid #ccc", 
            }}
          />
          <div style={{ paddingLeft: "4rem",flex: 1, textAlign: "left" }}>
            <Text component="h1" size="xl" mt="lg">
              Hello, I'm Shaun
            </Text>
            <Text size="md" mt="sm">
              Welcome to my portfolio!
            </Text>
          </div>
        </Container>
        </>
    );
}