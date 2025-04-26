import { Button, Flex, Image, Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

interface ProjectItemProps {
    title: string;
    description: string;
    images: { src: string; alt: string }[];
    buttonText: string;
}

export default function ProjectItem({ title, description, images, buttonText }: ProjectItemProps) {
    const matches = useMediaQuery("(max-width: 768px)");

    return (
        <Flex
            direction={matches ? "column" : "row"}
            justify="center"
            align="center"
            gap="xl"
            style={{ padding: "2rem" }}
        >
            <div
                style={{
                    width: matches ? "100%" : "50%",
                    display: "flex",
                    justifyContent: "center",
                }}
            >
                {images.map((image, index) => (
                    <Image
                        key={index}
                        src={image.src}
                        alt={image.alt}
                        style={{
                            width: "100%",
                            maxHeight: index === 0 ? "300px" : "400px",
                            objectFit: "contain",
                        }}
                    />
                ))}
            </div>
            <div
                style={{
                    width: matches ? "100%" : "50%",
                    paddingLeft: matches ? "0" : "2rem",
                    textAlign: matches ? "center" : "left",
                }}
            >
                <Text
                    component="h3"
                    style={{
                        fontWeight: "bold",
                        fontSize: "1.5rem",
                        marginBottom: "1rem",
                    }}
                >
                    {title}
                </Text>
                <Text style={{ marginBottom: "1rem" }}>{description}</Text>
                <Button>{buttonText}</Button>
            </div>
        </Flex>
    );
}