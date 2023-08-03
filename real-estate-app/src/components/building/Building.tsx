import { Col, Container, Row } from "react-bootstrap";
import * as S from "./style";
import { Fade } from "react-awesome-reveal";

interface Props {
  headdiv: string;
  contentdiv: string;
  vrbutton: string;
  quote: string;
  author: string;
  authorrole: string;
  bgtext: string;
  buildingimg: string;
  profileimg: string;
}

const _sidediv = (headdiv: string, contentdiv: string, vrbutton: string) => {
  return (
    <Container fluid="md">
      <Row className="justify-content-center mt-3">
        <Fade direction="up" triggerOnce>
          <Col className="mb-4" xs="12" md="9">
            <S.TitleHead>{headdiv}</S.TitleHead>
          </Col>
          <Col className="mb-4" xs="12" md="9">
            <S.Aboutcont>{contentdiv}</S.Aboutcont>
          </Col>
          <Col className="mb-4" xs="12" md="9">
            <S.Button2>{vrbutton}</S.Button2>
          </Col>
        </Fade>
      </Row>
    </Container>
  );
};

export const Building = ({
  headdiv,
  contentdiv,
  vrbutton,
  quote,
  author,
  authorrole,
  bgtext,
  buildingimg,
  profileimg,
}: Props) => {
  return (
    <>
      <Row className="mt-4">
        <S.Imgcol
          sm="5"
          md="6"
          className="p-4 d-flex align-self-center justify-content-center"
        >
          <Fade direction="left" triggerOnce>
            <S.Imgbuilding
              height={"500px"}
              src={buildingimg}
              alt="building image"
              fluid
              rounded
            ></S.Imgbuilding>
          </Fade>
        </S.Imgcol>
        <Col className="mt-5">{_sidediv(headdiv, contentdiv, vrbutton)}</Col>
      </Row>
      <S.Pcontainer>
        <Row className="justify-content-center">
          <Col lg="8" sm="10">
            <Fade direction="up" triggerOnce>
              <S.Pimage alt="profile pic" src={profileimg}></S.Pimage>
            </Fade>
          </Col>
          <S.QuoteDiv lg="8" sm="10" className="mt-5">
            <Fade direction="up" triggerOnce>
              {quote}
            </Fade>
          </S.QuoteDiv>
          <Col lg="8" sm="10" className="mt-3">
            <Fade direction="up" cascade triggerOnce>
              <S.NameDiv>{author}</S.NameDiv>

              <div>{authorrole}</div>
            </Fade>
          </Col>
        </Row>
      </S.Pcontainer>
      <S.Imgcontainer className="mt-5"  image="/images/image2.jpg">
        <S.Pcontainer fluid="sm" className="ps-5 pe-5">
          <Row className="d-flex justify-content-center">
            <Col className="justify-content-center d-flex ps-5 pe-5" xs="12">
              <S.Playbutton>
                <svg
                  viewBox="0 0 448 512"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  width="calc(.5rem + 1.5vw)"
                >
                  <path
                    d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"
                    fill="currentColor"
                  ></path>
                </svg>
              </S.Playbutton>
            </Col>
            <Col
              sm="10"
              md="7"
              className="mt-5 mb-5 text-center d-flex justify-content-center "
            >
              <S.TitleHead>
                <Fade triggerOnce>{bgtext}</Fade>
              </S.TitleHead>
            </Col>
          </Row>
        </S.Pcontainer>
      </S.Imgcontainer>
    </>
  );
};
