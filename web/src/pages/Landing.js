import React from "react";
import CharacterRow from "../components/CharacterRow.js";

import logoImg from "../images/image-3.png";
import redCardImg from "../images/Image-card.png";
import featherImgOne from "../images/Feather-3-3.png";
import featherImgTwo from "../images/Feather-3.png";
import featherImgThree from "../images/Feather-3-2.png";
import featherImgFour from "../images/Feather-3-1.png";

import { MdKeyboardArrowDown } from "react-icons/md";
import { IoIosArrowDropupCircle } from "react-icons/io";

function Landing() {
  return (
    <div className="page-landing">
      <nav id="top" className="page-nav">
        <a href="#">
          <img src={logoImg} width={60} alt="Transistor Sword Logo" />
          <h1>SuperGiantGames</h1>
        </a>
      </nav>
      <header className="page-header">
        <div className="page-header-card">
          <p className="card-title"> Transistor &#8722; Red The Singer</p>
          <img src={redCardImg} alt="Red Card Image" className="red-card" />
          <img
            src={featherImgOne}
            alt="Feather Image"
            className="card-feather"
          />
          <img
            src={featherImgTwo}
            alt="Feather Image"
            className="card-feather"
          />
          <img
            src={featherImgThree}
            alt="Feather Image"
            className="card-feather"
          />
          <img
            src={featherImgFour}
            alt="Feather Image"
            className="card-feather"
          />
          <p className="card-text">
            "Olha, o que quer que você esteja pensando, me faça um favor, não
            solte."
          </p>
        </div>
        <div className="mouse">
          <div className="button-mouse"></div>
        </div>
        <MdKeyboardArrowDown className="down-icon" />
      </header>

      <CharacterRow />

      <section className="contact-section">
        <form>
          <h2>Formulário</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <div>
            <input type="text" placeholder="Nome" className="form-input" />
            <input type="email" placeholder="Email" className="form-input" />
          </div>
          <div>
            <textarea type="text" placeholder="Mensagem" rows="2"></textarea>
          </div>
          <div>
            <button type="submit" className="form-button">
              Enviar
            </button>
          </div>
        </form>
      </section>
      <footer>
        <div className="div-footer">
          <a href="#top" type="button">
            <IoIosArrowDropupCircle className="up-icon" />
          </a>
        </div>
      </footer>
    </div>
  );
}
export default Landing;
