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
     {/* <Header/>
     <MainSection/>
     <ProjectList/> */}
     <div style={{ width: "100vw", height: "100vh", overflow: "hidden" }}>
      <BabylonCanvas />
    </div>
    </>
  );
}
