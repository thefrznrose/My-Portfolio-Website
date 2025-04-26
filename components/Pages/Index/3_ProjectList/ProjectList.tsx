import { Accordion, Group, Avatar, Text, Image, Button, Flex } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

interface ProjectItem {
    id: string;
    image: string;
    title: string;
    description: string;
    content: string;
}

const projectsList: ProjectItem[] = [
    {
        id: "rnannotations",
        image: "Images/Sacnas24_PosterWithIslam.jpg",
        title: "RNAnnotations",
        description: "A tool for visualizing, annotating, and classifying RNA 3D motifs.",
        content: `As a co-developer of RNAnnotations, I contributed to creating an innovative tool for visualizing, annotating, and classifying non-coding RNA (ncRNA) 3D structural motifs.
        The platform allows researchers to use tags for feature identification, classify motifs based on root mean squared deviation (RMSD) similarity scores, and collaborate by sharing and reviewing annotations.`
    },
    {
        id: "basepairing",
        image: "Images/BasePairing_Slide.png",
        title: "Curated Benchmark Dataset for RNA Base Pair Annotations",
        description: "A benchmark dataset for RNA motif base pair annotations.",
        content: `Led the creation of a benchmark dataset for RNA motif base pair annotations.
        Merged tools like CLARNA, FR3D, MC Annotate, DSSR, RNAVIew, and RNA Motif Atlas for dataset generation.
        Won 3rd place at the 2024 CSUMB Undergraduate Research Symposium for this work.`
    },
    {
        id: "bslt",
        image: "Images/BSLT_Interface.png",
        title: "Big Sur Land Trust: Fire Recovery Monitoring Web Service",
        description: "Citizen science platform for monitoring forest fire recovery.",
        content: `As the designer and full-stack developer for this citizen science platform, I created an interactive web service to monitor forest fire recovery in the Mittledorf Preserve.
        Leveraging technologies like Next.js, Express.js, MoviePy, and FFmpeg, I implemented key features, including photo uploads with metadata, timelapse generation, and offline upload capabilities with photo caching.`
    }
];

interface AccordionLabelProps {
    title: string;
    image: string;
    description: string;
}

function AccordionLabel({ title, image, description }: AccordionLabelProps) {
    const matches = useMediaQuery('(max-width: 768px)');
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
                    src={image}
                    alt={title}
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
                        marginBottom: '1rem',
                    }}
                >
                    {title}
                </Text>
                <Text style={{ marginBottom: '1rem' }}>{description}</Text>
                <Button>See {title}</Button>
            </div>
        </Flex>
    );
}

export default function ProjectList() {
    const items = projectsList.map((project) => (
        <Accordion.Item value={project.id} key={project.id}>
            <Accordion.Control>
                <AccordionLabel {...project} />
            </Accordion.Control>
            <Accordion.Panel>
                <Text size="sm">{project.content}</Text>
            </Accordion.Panel>
        </Accordion.Item>
    ));

    return (
        <Accordion chevronPosition="right" variant="contained">
            {/* {items} */}
        </Accordion>
    );
}