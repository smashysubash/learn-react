import React, { useState } from "react";
import { Col, Image, Row } from "react-bootstrap";
import * as S from "./style";
import { tldata } from "../../data/timeline";
import { landingpage } from "../../data/landingpage.config";

interface contarray {
  no: number;
  title: string;
  description: string;
  imageurl: string;
}

interface Props {
  title: string;
  headdiv: string;
  contentdiv: string;
}

const iterateFromArrayCircular = (arr: contarray[], startIndex: number) => {
  let rarr = [];
  for (let i = startIndex; i < arr.length + startIndex; i++) {
    rarr.push(arr[i % arr.length]);
  }
  return rarr;
};

const Listcomp = ({ data }: { data: contarray }) => {
  return (
    <>
      <S.Roundlist></S.Roundlist>
      <div>
        <div className="fs-4 fw-bold">{data.title}</div>
        <div className="fs-6">{data.description}</div>
      </div>
    </>
  );
};

const Subcomp = () => {
  const [index, setIndex] = useState(0);
  const Clickonitem = (no: number) => {
    setIndex(no - 1);
  };
  return (
    <>
      <S.ImgComp md="6" xs="10" lg="6" className="pt-5" key={index}>
        <Image fluid rounded src={tldata[index]?.imageurl}></Image>
      </S.ImgComp>
      <Col xs="10" md="5" lg="5">
        <S.ArrDiv className="d-flex flex-column justify-content-center">
          {iterateFromArrayCircular(tldata, index).map((item) => (
            <S.ColorList
              key={item.no}
              onClick={() => Clickonitem(item.no)}
              className="d-flex align-items-center m-3"
            >
              <Listcomp data={item}></Listcomp>
            </S.ColorList>
          ))}
        </S.ArrDiv>
      </Col>
    </>
  );
};

export const Timeline = ({title,headdiv,contentdiv}: Props) => {
  return (
    <>
      <Row className="text-left justify-content-center mt-5" id="project">
        <Col sm="11" lg="12" className="mb-3">
          <S.TimeDiv>{title}</S.TimeDiv>
        </Col>
        <Col sm="11" xs="12" lg="6">
          <S.TitleHead>{headdiv}</S.TitleHead>
        </Col>
        <Col sm="11" xs="12" lg="6">
          <S.Aboutcont>{contentdiv}</S.Aboutcont>
        </Col>
        <Subcomp></Subcomp>
      </Row>
    </>
  );
};
