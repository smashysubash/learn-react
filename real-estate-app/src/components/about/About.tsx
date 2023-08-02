import { Col, Row } from "react-bootstrap";
import { Fade } from "react-awesome-reveal";
import * as S from "./style";

interface Props {
  title: string;
  headdiv: string;
  contentdiv: string;
}

export const About = ({ title, headdiv, contentdiv }: Props) => {
  return (
    <>
      <S.AboutContainer fluid="md" id="about">
        <Row className="justify-content-center mb-5">
          <Col xs="12" className="mb-5">
            <Fade direction="up" triggerOnce>
              <S.AboutDiv>{title}</S.AboutDiv>
            </Fade>
          </Col>
          <Col className="mb-4" md="9" xs="12">
            <Fade direction="up" triggerOnce >
              <S.TitleHead>{headdiv}</S.TitleHead>
            </Fade>
          </Col>
          <Col className="mb-4" xs="12" md="7">
            <Fade direction="up" triggerOnce >
              <S.Aboutcont>{contentdiv}</S.Aboutcont>
            </Fade>
          </Col>
        </Row>
      </S.AboutContainer>
    </>
  );
};
