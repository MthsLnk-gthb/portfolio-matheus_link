import "./style.scss";
import { useState, useEffect } from "react";

import minhasHabilidades from "../../data/Habilidades/habilidades.js";

const Habilidades = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 2200) {
        setScrolled(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main id="pagina-habilidades">
      <h1 className="nome-pagina">Minhas Habilidades</h1>
      <article className={`lista-habilidades ${scrolled ? "show" : ""}`}>
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
