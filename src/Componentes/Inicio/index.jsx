import "./style.scss";

import minhaFoto from "/public/imgs/my-photo.png";

const Inicio = () => {
  const handleLinkedin = () => {
    window.open("https://www.linkedin.com/in/matheus-link-21b3a4265/");
  };

  const handleGitHub = () => {
    window.open("https://github.com/MthsLnk-gthb?tab=repositories");
  };

  return (
    <>
      <main id="pagina-inicial">
        <article className="conteudo-inicial">
          <section className="introducao-e-botoes">
            <h2>Olá Mundo</h2>
            <p>
              Sou <span>Matheus Link, </span>
              Desenvolvedor Front-End
            </p>
            <div className="botoes">
              <button
                onClick={(e) => {
                  e.preventDefault(), handleLinkedin();
                }}
                className="btn-linkedin"
              >
                Linkedin
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault(), handleGitHub();
                }}
                className="btn-github"
              >
                GitHub
              </button>
            </div>
          </section>

          <section className="minha-foto">
            <img src={minhaFoto} alt="Foto de Matheus Link" />
          </section>
        </article>
      </main>
    </>
  );
};

export default Inicio;
