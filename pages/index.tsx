import { useRouter } from 'next/router';
import { useMediaQuery } from '@mantine/hooks';
import Header from '@/components/Header';
import MainSection from '@/components/Main/MainSection';

export default function HomePage() {
  const router = useRouter();
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <>
     <Header/>
     <MainSection/>
    </>
  );
}
