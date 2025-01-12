import { Button, Flex, Image, Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

export default function RNAnnotations() {
    const matches = useMediaQuery('(max-width: 768px)');
    const description = `
        As a co-developer of RNAnnotations, I contributed to creating an innovative tool for visualizing, annotating, and classifying non-coding RNA (ncRNA) 3D structural motifs. 
        The platform allows researchers to use tags for feature identification, classify motifs based on root mean squared deviation (RMSD) similarity scores, and collaborate by sharing and reviewing annotations. 
        Designed to overcome limitations of existing tools, RNAnnotations enables comparative analysis, fosters collaboration, and helps uncover relationships among RNA motifs to provide insights into their biological functions.
    `;

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
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-around',
                }}
            >
                <Image
                    src={'Images/Sacnas24_PosterWithIslam.jpg'}
                    alt={"Sacnas24_PosterWithIslam"}
                    style={{
                        width: '100%',
                        maxHeight: '300px',
                        objectFit: 'contain',
                        marginBottom: matches ? '1rem' : '0',
                    }}
                />
                <Image
                    src={'Images/TaggingProjectPoster_Final.jpg'}
                    alt={"TaggingProjectPoster_Final"}
                    style={{
                        width: '100%',
                        maxHeight: '300px',
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
                    {"RNAnnotations"}
                </Text>
                <Text style={{ marginBottom: '1rem' }}>
                    {description}
                </Text>
                <Button
                    onClick={() => window.open("https://research.rna3d.org/", "_blank")}
                >
                    See RNAnnotations Deployment
                </Button>
            </div>
        </Flex>
    );
}
