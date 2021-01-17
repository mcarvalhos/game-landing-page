import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";

import grantCardImg from "../images/Grant.png";
import redCardImgTwo from "../images/Red.png";
import sybilCardImg from "../images/Sybil.png";

import "../styles/Carousel.css";

import {
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdSignalCellularNull,
} from "react-icons/md";

function CharacterRow() {
  // const [scrollX, setScrollX] = useState(-900);

  // const handleLeftArrow = () => {
  //   let x = scrollX + Math.round(window.innerWidth / 2);
  //   x > 0 ? (x = 0) : console.log("");
  //   setScrollX(x);
  // };

  // const handleRightArrow = () => {
  //   let x = scrollX - Math.round(window.innerWidth / 2);
  //   let listW = cards-section.length * 150;
  //   window.innerWidth - listW > x
  //     ? (x = window.innerWidth - listW) - 60
  //     : console.log("");
  //   setScrollX(x);
  // };

  return (
    <div className="characterRow">
      <Carousel indicatorClass="false">
        <Carousel.Item interval={1000}>
          <section className="cards-section">
            <div className="div-character-card">
              <figure>
                <img
                  src={grantCardImg}
                  alt="Grant Card Image"
                  className="img-character-card grant"
                />
                <figcaption>
                  A Camerata foi apenas os dois no início, e suas fileiras nunca
                  foram destinadas a exceder um número a ser contado em uma mão.
                </figcaption>
              </figure>
            </div>
            <div className="div-character-card">
              <figure>
                <img
                  src={redCardImgTwo}
                  alt="Red Card Image"
                  className="img-character-card red"
                />
                <figcaption>
                  Red, uma jovem cantora, entrou em posse do Transistor. Sendo a
                  poderosa espada falante. O grupo Possessores quer tanto ela
                  quanto o Transistor e está perseguindo implacavelmente a sua
                  procura.
                </figcaption>
              </figure>
            </div>
            <div className="div-character-card">
              <figure>
                <img
                  src={sybilCardImg}
                  alt="Grant Card Image"
                  className="img-character-card sybil"
                />
                <figcaption>
                  Sybil é descrita pelo Transistor como sendo os "olhos e
                  ouvidos" da Camerata.
                </figcaption>
              </figure>
            </div>
          </section>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <section className="cards-section">
            <div className="div-character-card">
              <figure>
                <img
                  src={grantCardImg}
                  alt="Grant Card Image"
                  className="img-character-card grant"
                />
                <figcaption>
                  A Camerata foi apenas os dois no início, e suas fileiras nunca
                  foram destinadas a exceder um número a ser contado em uma mão.
                </figcaption>
              </figure>
            </div>
            <div className="div-character-card">
              <figure>
                <img
                  src={redCardImgTwo}
                  alt="Red Card Image"
                  className="img-character-card red"
                />
                <figcaption>
                  Red, uma jovem cantora, entrou em posse do Transistor. Sendo a
                  poderosa espada falante. O grupo Possessores quer tanto ela
                  quanto o Transistor e está perseguindo implacavelmente a sua
                  procura.
                </figcaption>
              </figure>
            </div>
            <div className="div-character-card">
              <figure>
                <img
                  src={sybilCardImg}
                  alt="Grant Card Image"
                  className="img-character-card sybil"
                />
                <figcaption>
                  Sybil é descrita pelo Transistor como sendo os "olhos e
                  ouvidos" da Camerata.
                </figcaption>
              </figure>
            </div>
          </section>
        </Carousel.Item>
        <Carousel.Item>
          <section className="cards-section">
            <div className="div-character-card">
              <figure>
                <img
                  src={grantCardImg}
                  alt="Grant Card Image"
                  className="img-character-card grant"
                />
                <figcaption>
                  A Camerata foi apenas os dois no início, e suas fileiras nunca
                  foram destinadas a exceder um número a ser contado em uma mão.
                </figcaption>
              </figure>
            </div>
            <div className="div-character-card">
              <figure>
                <img
                  src={redCardImgTwo}
                  alt="Red Card Image"
                  className="img-character-card red"
                />
                <figcaption>
                  Red, uma jovem cantora, entrou em posse do Transistor. Sendo a
                  poderosa espada falante. O grupo Possessores quer tanto ela
                  quanto o Transistor e está perseguindo implacavelmente a sua
                  procura.
                </figcaption>
              </figure>
            </div>
            <div className="div-character-card">
              <figure>
                <img
                  src={sybilCardImg}
                  alt="Grant Card Image"
                  className="img-character-card sybil"
                />
                <figcaption>
                  Sybil é descrita pelo Transistor como sendo os "olhos e
                  ouvidos" da Camerata.
                </figcaption>
              </figure>
            </div>
          </section>
        </Carousel.Item>
      </Carousel>
      {/* 
      <div className="left-arrow">
        <MdKeyboardArrowLeft style={{ fontSize: 80 }} />
      </div>
      <div className="right-arrow">
        <MdKeyboardArrowRight style={{ fontSize: 80 }} />
      </div>
      <section className="cards-section">
        <div className="div-character-card">
          <figure>
            <img
              src={grantCardImg}
              alt="Grant Card Image"
              className="img-character-card grant"
            />
            <figcaption>
              A Camerata foi apenas os dois no início, e suas fileiras nunca
              foram destinadas a exceder um número a ser contado em uma mão.
            </figcaption>
          </figure>
        </div>
        <div className="div-character-card">
          <figure>
            <img
              src={redCardImgTwo}
              alt="Red Card Image"
              className="img-character-card red"
            />
            <figcaption>
              Red, uma jovem cantora, entrou em posse do Transistor. Sendo a
              poderosa espada falante. O grupo Possessores quer tanto ela quanto
              o Transistor e está perseguindo implacavelmente a sua procura.
            </figcaption>
          </figure>
        </div>
        <div className="div-character-card">
          <figure>
            <img
              src={sybilCardImg}
              alt="Grant Card Image"
              className="img-character-card sybil"
            />
            <figcaption>
              Sybil é descrita pelo Transistor como sendo os "olhos e ouvidos"
              da Camerata.
            </figcaption>
          </figure>
        </div>
      </section>
    */}
    </div>
  );
}
export default CharacterRow;
