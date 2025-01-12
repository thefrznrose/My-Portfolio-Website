import { Button, Flex, Image, Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

export default function CodeOrientedOralExamManager() {
    const matches = useMediaQuery('(max-width: 768px)'); 
    
    const description = `
        As a lead developer, I contributed to the design and implementation of a web-based oral exam platform for assessing student programming skills. 
        Using technologies like Node.js, Mantine UI, and REST APIs, I architected the core functionalities, including standardized question types (general, keyword-based, and context-specific) and video optimization tools to streamline instructor workflows. 
        My work reduced video assessment time by 20%, improved scalability with automated scheduling, and laid the groundwork for future AI integration to analyze responses and generate adaptive questions. 
        This project enhances academic integrity and student engagement in programming assessments.
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
                    src={'Images/CodeOrientedOralExamManager_CapstonePoster.jpg'}
                    alt={"CodeOrientedOralExamManager"}
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
                    {"Code Oriented Oral Exam Manager"}
                </Text>
                <Text style={{ marginBottom: '1rem' }}>
                    {description}
                </Text>
                <Button>
                    See Code Oriented Oral Exam Manager
                </Button>
            </div>
        </Flex>
    );
}
