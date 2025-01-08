import { useRouter } from 'next/router';
import { useMediaQuery } from '@mantine/hooks';
import Header from '@/components/Header/Header';
import MainSection from '@/components/Home/Main/MainSection';
import ProjectList from '@/components/Projects/ProjectList';
import BabylonCanvas from '@/components/Home/Main/BabylonCanvas';

export default function HomePage() {
  const router = useRouter();
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <>
      <Header />
      <div style={{ position: 'relative', width: '100vw', height: '50vh', overflow: 'hidden' }}>
        <div>
          <BabylonCanvas />
        </div>
        <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 10, // Ensures it is above the canvas
        }}
        >
          <MainSection />
        </div>
      </div>

      <ProjectList />
    </>
  );
}
