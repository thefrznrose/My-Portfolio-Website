import { Button, Flex, Image, Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

export default function BigSurLandTrust() {
    const matches = useMediaQuery('(max-width: 768px)'); 
    
    const description = "Led the creation of a benchmark dataset for RNA motif base pair annotations. Merged tools like CLARNA, FR3D, MC Annotate, DSSR, RNAVIew, and RNA Motif Atlas for dataset generation. Won 3rd place at the 2024 CSUMB Undergraduate Research Symposium for this work.";

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
