import { Image, Stack, Text, Flex } from '@mantine/core';
import { useRouter } from 'next/router';
import PhotoUploadButton from '@/components/PhotoUpload/PhotoUploadButton';
import { useMediaQuery } from '@mantine/hooks';

export default function HomePage() {
  const router = useRouter();
  const isMobile = useMediaQuery('(max-width: 768px)');

  const handleNavigation = () => {
    router.push('/view-posts');
  };

  return (
    <>
      <div style={{ minHeight: '90vh', display: 'flex', flexDirection: 'column' }}>
        <div
          style={{
            paddingTop: '20px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Image
            src="/BSLTLogo.png"
            alt="BSLT Logo"
            width={isMobile ? 310 : 640}
            height={isMobile ? 160 : 320}
            style={{ maxWidth: '70%', height: 'auto' }}
            loading="lazy"
          />
          <h1
            style={{
              fontSize: isMobile ? '60px' : '40px',
              margin: '15px 0'
            }}
          >
            Mittledorf Preserve
          </h1>
          <h3
            style={{
              fontSize: isMobile ? '33px' : '23px',
              color: '#2b2b2b',
              margin: '0px 0'
            }}
          >
            (Fire Recovery Monitoring)
          </h3>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexGrow: 1,
          }}
        >
          <Stack align="center">
            <Flex>
              <Text style={{ fontSize: isMobile ? '25px' : '18px', fontWeight: "bold", marginRight: "10px" }}>
                Riparian Zone:
              </Text>
              <Text style={{ fontSize: isMobile ? '25px' : '18px' }}>
                Location 1 of 5
              </Text>
            </Flex>
            <PhotoUploadButton />
            <p style={{ fontSize: isMobile ? '25px' : '18px', width: "500px", textAlign: "center", margin: "0px 0" }}>
              Upload image here, or to Twitter with hashtag: #BSLTfire01
            </p>
            {/* <Button onClick={handleNavigation} variant="link">
              View other locations
            </Button> */}
            <a href='/view-posts' onClick={handleNavigation}>
              View other locations
            </a>
          </Stack>
        </div>
      </div>
    </>
  );
}
