import { useRouter } from 'next/router';
import { useMediaQuery } from '@mantine/hooks';
import Header from '@/components/Header/Header';
import MainSection from '@/components/Home/Main/MainSection';
import ProjectList from '@/components/Projects/ProjectList';
import BabylonCanvas from '@/components/Home/Main/BabylonCanvas';
import { Flex } from '@mantine/core';

export default function HomePage() {
  const router = useRouter();
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <>
      <Header />
      {/* Container for BabylonCanvas and MainSection */}
      <div style={{ position: 'relative', width: '100vw', height: '50vh', overflow: 'hidden' }}>
        {/* Babylon Canvas */}
        <BabylonCanvas />
        {/* Main Section on top of the canvas */}
        <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 10, // Ensures it is above the canvas
          padding: '20px', // Optional, for spacing
        }}
        >
          <MainSection />
        </div>
      </div>

      <ProjectList />
    </>
  );
}
