import { useState } from "react";
import "./style.scss";

import menuIcon from '/public/IconMenu/menu.svg'

const Header = () => {
  const scrollIntoView = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  const [linksAbertos, setLinksAbertos] = useState(false);
  const [classeMenu, setClasseMenu] = useState("mobile-menu");

  const handleShowLinks = () => {
    setLinksAbertos(!linksAbertos);
  };

  return (
    <header className="header-portfolio">
      <h1 className="logo">MatheusLink Portfolio</h1>
      <nav>
        <section
          className={classeMenu}
          onClick={(e) => {
            e.preventDefault();
            handleShowLinks();
          }}
        >
          <img src={menuIcon} alt="" />
        </section>

        <ul
          className={`links ${linksAbertos ? "menu-aberto" : "menu-fechado"}`}
        >
          <a onClick={() => scrollIntoView("inicio")}>Início</a>
          <a onClick={() => scrollIntoView("sobreMim")}>Sobre Mim</a>
          <a onClick={() => scrollIntoView("projetos")}>Projetos</a>
          <a onClick={() => scrollIntoView("habilidades")}>Habilidades</a>
          <a onClick={() => scrollIntoView("certificados")}>Certificações</a>
        </ul>
      </nav>
      <main></main>
    </header>
  );
};

export default Header;
