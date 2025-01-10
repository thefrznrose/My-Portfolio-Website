import { useRouter } from 'next/router';
import { useMediaQuery } from '@mantine/hooks';
import Header from '@/components/Universal/Header/Header';
import ProjectList from '@/components/Pages/Index/3_Projects/ProjectList';
import BabylonCanvas from '@/components/Pages/Index/1_Banner/BabylonCanvas';
import Banner from '@/components/Pages/Index/1_Banner/Banner';

export default function HomePage() {
  const router = useRouter();
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <>
      <Header />
      <Banner/>
      {/* <div style={{ position: 'relative', width: '100vw', height: '50vh', overflow: 'hidden' }}>
        <div>
          <BabylonCanvas />
        </div>
        <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 10,
        }}
        >
          <Banner />
        </div>
      </div> */}

      <ProjectList />
    </>
  );
}
