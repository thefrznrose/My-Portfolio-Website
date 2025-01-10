import { Button, Flex, Image, Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { useRouter } from "next/router";

export default function DisceRNA () {
    const router = useRouter(); // Initialize the router
    const matches = useMediaQuery('(max-width: 768px)'); 
    
    const description = "Led the creation of a benchmark dataset for RNA motif base pair annotations. Merged tools like CLARNA, FR3D, MC Annotate, DSSR, RNAVIew, and RNA Motif Atlas for dataset generation. Won 3rd place at the 2024 CSUMB Undergraduate Research Symposium for this work."

     return (
        <Flex
          direction={matches ? 'column' : 'row'}  
          justify="flex-start"
          align="center"
          wrap="wrap"
          gap="xl"
          style={{ padding: '2rem' }}
        >
        <Image
            src={'Images/DisceRNA_GameplayInterface.png'}
            alt={"DisceRNA_GameplayInterface"}
            style={{
            width: '100%',
            maxHeight: '400px',  
            objectFit: 'contain',  
            }}
        />
        <div
            style={{
                width: '100%',  
                maxWidth: matches ? '100%' : '600px',  
                flex: '1',  
                paddingTop: matches ? '1rem' : '0',  
            }}
        >
            <Text 
                component="h3" 
                style={{ 
                    fontWeight: 'bold', 
                    fontSize: '1.5rem' 
                }}
            >
                {"DisceRNA"}
            </Text>
            <Text>
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