import "./style.scss";
import projetos from "../../data/Projetos/projetos.js";

const Projetos = () => {
  const handleAcessarPagina = (linkPagina) => {
    window.open(linkPagina, "_blank");
  };

  const handleAcessarRepositorio = (linkRepositorio) => {
    window.open(linkRepositorio, "_blank");
  };

  return (
    <main id="tela-projetos">
      <h1 className="nome-pagina">Meus Projetos</h1>
      <article className="lista-projetos">
        {projetos.map((projeto, index) => {
          return (
            <section key={index} className="card-projeto">
              <h3>{projeto.nomeProjeto} </h3>

              <div className="box-imagem">
                <img
                  className={
                    projeto.finalizado === false ? "nao-finalizado" : ""
                  }
                  src={projeto.screenshotProjeto}
                  alt={projeto.nomeProjeto}
                />
                {projeto.finalizado === false && <span>Não Finalizado</span>}
              </div>
              <div className="botoes">
                <button
                  className="botao repositorio"
                  onClick={(e) => {
                    e.preventDefault(),
                      handleAcessarRepositorio(projeto.linkGitHub);
                  }}
                >
                  Repositório
                </button>
                <button
                  className="botao pagina"
                  onClick={(e) => {
                    e.preventDefault(), handleAcessarPagina(projeto.linkPagina);
                  }}
                >
                  Página
                </button>
              </div>
            </section>
          );
        })}
      </article>
    </main>
  );
};

export default Projetos;
