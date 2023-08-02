import { Building } from "../../components/building/Building";
import { FrontLanding } from "../../components/fontlanding/FrontLanding";
import { Timeline } from "../../components/timeline/Timeline";
import { About } from "../../components/about/About";
import { Contactus } from "../../components/contactus/Contactus";
import { Navbar } from "../../components/navbar/Navbar";
import * as S from "./style";
const { landingpage } = require("../../data/landingpage.config");
const { front, about, building, timeline, testimonal, contact, footer,navbar} = landingpage;

export const Landingcont = () => {
  return (
    <>
    <Navbar {...navbar}/>
      <S.HeadDiv image="./images/photo2.jpg" id="home">
        <FrontLanding { ...front } />
        <S.Curve>
          <svg
            id="svg"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="-300 0 950 270"
          >
            <path
              d="M-314,267 C105,364 400,100 812,279"
              fill="none"
              stroke="white"
              strokeWidth="120"
              strokeLinecap="round"
            />
          </svg>
        </S.Curve>
      </S.HeadDiv>
      <S.HDiv></S.HDiv>
      <About {...about}/>
      <Building {...building} {...testimonal}/>
      <Timeline {...timeline}/>
      <Contactus {...contact} {...footer}/>
    </>
  );
};
