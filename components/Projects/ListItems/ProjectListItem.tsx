import { Image, Flex, Text, } from "@mantine/core";

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
  return (
    <>
      <Flex
        direction="row"
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
            width: 'auto', 
            height: '300px', 
          }}
        />
        <div>
          <Text component="h3">{title}</Text>
          <ul>
            {bulletPoints.map((point, index) => (
              <li key={index}>{point}</li> 
            ))}
          </ul>
        </div>
      </Flex>
    </>
  );
}
