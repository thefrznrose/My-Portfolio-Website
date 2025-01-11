import Header from "@/components/Universal/Header/Header";
import Banner from "./1_Banner/Banner";
import AboutMe from "./2_AboutMe/AboutMe";
import ProjectList from "./3_ProjectList/ProjectList";
import Footer from "@/components/Universal/Footer/Footer";

export default function IndexComponent() {

  return (
    <>
    <Header />
    <Banner />
    <AboutMe />
    <ProjectList />
    <Footer />
    </>
  );
}
