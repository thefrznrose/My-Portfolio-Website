import { Flex, Image, Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

export default function CodeOrientedOralExamManager () {
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
            src={'Images/CodeOrientedOralExamManager_CapstonePoster.jpg'}
            alt={"CodeOrientedOralExamManager"}
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
                {"Code Oriented Oral Exam Manager"}
            </Text>
            <Text>
                {description}
            </Text>
        </div>
        </Flex>
      );
}