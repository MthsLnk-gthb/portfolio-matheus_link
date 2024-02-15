import "./style.scss";

import minhasHabilidades from '../../data/Habilidades/habilidades.js'

const Habilidades = () => {

  return (
    <main id="pagina-habilidades">
      <h1 className="nome-pagina">Minhas Habilidades</h1>
      <article className="lista-habilidades">
        {minhasHabilidades.map((habilidade, index) => {
          return (
            <section key={index} className="habilidade">
              <h5>{habilidade.habilidade}</h5>
              <div>
                <img src={habilidade.imagem} alt={habilidade.habilidade} />
              </div>
            </section>
          );
        })}
      </article>
    </main>
  );
};

export default Habilidades;