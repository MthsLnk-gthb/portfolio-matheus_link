import "./style.scss";

import minhashabilidades from "../../data/Habilidades/habilidades.json";

const Habilidades = () => {
  return (
    <main id="pagina-habilidades">
      <h1 className="nome-pagina">Minhas Habilidades</h1>
      <article className="lista-habilidades">
        {minhashabilidades.map((habilidade, index) => {
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
