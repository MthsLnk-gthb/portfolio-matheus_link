import './style.scss'

const Header = () => {
  const scrollIntoView = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="header-portfolio">
      <nav>
        <a onClick={() => scrollIntoView("inicio")}>Início</a>
        <a onClick={() => scrollIntoView("sobreMim")}>Sobre Mim</a>
        <a onClick={() => scrollIntoView("projetos")}>Projetos</a>
        <a onClick={() => scrollIntoView("habilidades")}>Habilidades</a>
        <a onClick={() => scrollIntoView("certificados")}>Certificações</a>
      </nav>
    </header>
  );
};

export default Header;
