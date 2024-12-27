import Banner from "./Banner/Banner";
import SeeCVButton from "../Buttons/SeeCVButton";
import SeeResumeButton from "../Buttons/SeeResumeButton";
import { Divider } from "@mantine/core";

export default function MainSection() {
  return (
    <>
      <Banner/>
      <SeeResumeButton/>
      <SeeCVButton/>
    </>
  );
}
