import { Button, Flex, Image, Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

export default function BasePairing() {
    const matches = useMediaQuery('(max-width: 768px)');
    
    const description = `
        Led the creation of a benchmark dataset for RNA motif base pair annotations.
        Merged tools like CLARNA, FR3D, MC Annotate, DSSR, RNAVIew, and RNA Motif Atlas for dataset generation.
        Won 3rd place at the 2024 CSUMB Undergraduate Research Symposium for this work.
    `;

    return (
        <Flex
            direction={matches ? 'column' : 'row'}
            justify="center"
            align="center"
            gap="xl"
            style={{ padding: '2rem' }}
        >
            <div
                style={{
                    width: matches ? '100%' : '50%',
                    display: 'flex',
                    justifyContent: 'center',
                }}
            >
                <Image
                    src={'Images/BasePairing_Slide.png'}
                    alt={"BasePairing_Slide"}
                    style={{
                        width: '100%',
                        maxHeight: '300px',
                        objectFit: 'contain',
                    }}
                />
                <Image
                    src={'Images/BasePairing_2024CSUMBResearchSymposium.jpg'}
                    alt={"BasePairing_2024CSUMBResearchSymposium"}
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
                        marginBottom: '1rem',
                    }}
                >
                    {"Curated Benchmark Dataset for RNA Base Pair Annotations"}
                </Text>
                <Text style={{ marginBottom: '1rem' }}>
                    {description}
                </Text>
                <Button>
                    See Curated Benchmark Dataset for RNA Base Pair Annotations
                </Button>
            </div>
        </Flex>
    );
}
