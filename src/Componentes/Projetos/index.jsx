import "./style.scss";
import projetos from '../../data/Projetos/projetos.js'

const Projetos = () => {

    const handleAcessarPagina = (linkPagina)=>{
        window.open(linkPagina, '_blank')
    }

    const handleAcessarRepositorio = (linkRepositorio)=>{
        window.open(linkRepositorio, '_blank')
    }


  return (
    <main id="tela-projetos">
      <h1 className="nome-pagina">Meus Projetos</h1>
      <article className="lista-projetos">
        {projetos.map((projeto, index) => {
          return (
            <section key={index} className="card-projeto">
              <h3>{projeto.nomeProjeto}</h3>
              <div className="box-imagem">
                <img
                  src={projeto.screenshotProjeto}
                  alt={projeto.nomeProjeto}
                />
              </div>
              <div className="botoes">
                <button onClick={(e)=>{e.preventDefault(), handleAcessarRepositorio(projeto.linkGitHub)}}>Repositório</button>
                <button onClick={(e)=>{e.preventDefault(), handleAcessarPagina(projeto.linkPagina)}}>Página</button>
              </div>
            </section>
          );
        })}
      </article>
    </main>
  );
}

export default Projetos