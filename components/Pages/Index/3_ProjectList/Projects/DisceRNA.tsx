import { Button, Flex, Image, Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { useRouter } from "next/router";

export default function DisceRNA() {
    const matches = useMediaQuery('(max-width: 768px)'); 
    
    const description = `
        DisceRNA is a gamified web platform that engages citizen scientists in analyzing and categorizing RNA 3D motif structures. 
        The project’s frontend was developed using Next.js, while the backend was built with Nest.js, supported by a MySQL relational database and a Minerva file server for managing customized 3D geometry files. 
        My contributions focused heavily on designing the system architecture, creating UML diagrams, and specifying detailed requirements and control schemes. 
        By emphasizing design, I ensured a cohesive user experience and a clear structure for gameplay mechanics, enabling researchers to derive actionable insights from user-generated similarity scores.
    `
    
    return (
        <Flex
            direction={matches ? 'column' : 'row'}
            justify="center"
            align="center"
            wrap="nowrap"
            gap="xl"
            style={{ padding: '2rem' }}
        >
            <div
                style={{
                    width: matches ? '100%' : '50%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Image
                    src={'Images/DisceRNA_GameplayInterface.png'}
                    alt={"DisceRNA Gameplay Interface"}
                    style={{
                        width: '100%',
                        maxHeight: '400px',
                        objectFit: 'contain',
                    }}
                />
            </div>
            <div
                style={{
                    width: matches ? '100%' : '50%',
                    paddingLeft: matches ? '0' : '2rem',
                    textAlign: matches ? 'center' : 'left',
                }}
            >
                <Text
                    component="h3"
                    style={{
                        fontWeight: 'bold',
                        fontSize: '1.5rem',
                    }}
                >
                    {"DisceRNA"}
                </Text>
                <Text style={{ marginBottom: '1rem' }}>
                    {description}
                </Text>
                <Button
                    onClick={() => window.open("https://rna3d.org/play", "_blank")}
                >
                    See DisceRNA Deployment
                </Button>
            </div>
        </Flex>
    );
}
