import { Button, Flex, Image, Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

export default function BigSurLandTrust() {
    const matches = useMediaQuery('(max-width: 768px)'); 
    
    const description = `
        As the designer and full-stack developer for this citizen science platform, I created an interactive web service to monitor forest fire recovery in the Mittledorf Preserve. 
        Leveraging technologies like Next.js, Express.js, MoviePy, and FFmpeg, I implemented key features, including photo uploads with metadata, timelapse generation, and offline upload capabilities with photo caching. 
        Additionally, I integrated real-time location tracking to improve data accuracy in low-service areas, ensuring a seamless user experience for contributors.
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
                    src={'Images/BSLT_Interface.png'}
                    alt={"BigSurLandTrust"}
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
                    {"Big Sur Land Trust: Fire Recovery Monitoring Web Service"}
                </Text>
                <Text style={{ marginBottom: '1rem' }}>
                    {description}
                </Text>
                <Button
                    onClick={() => window.open("https://bslt-fire-recovery-4bbd834d8753.herokuapp.com/", "_blank")}
                >
                    See Big Sur Land Trust: Fire Recovery Monitoring Web Service Deployment
                </Button>
            </div>
        </Flex>
    );
}
