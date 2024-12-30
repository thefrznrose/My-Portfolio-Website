import { Image, Flex, Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

interface ProjectSectionProps {
  title: string;
  bulletPoints: string[];
  gifSrc: string;
}

export default function ProjectListItem({
  title,
  bulletPoints,
  gifSrc,
}: ProjectSectionProps) {
  const matches = useMediaQuery('(max-width: 768px)'); 
  
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
        src={gifSrc}
        alt={title}
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
        <Text component="h3" style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>
          {title}
        </Text>
        <ul style={{ paddingLeft: '1.5rem' }}>
          {bulletPoints.map((point, index) => (
            <li key={index} style={{ marginBottom: '0.5rem' }}>
              {point}
            </li>
          ))}
        </ul>
      </div>
    </Flex>
  );
}
