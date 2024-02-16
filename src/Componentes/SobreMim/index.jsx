import "./style.scss";

const SobreMim = () => {
  const handleAcessarCV = () => {
    window.open(
      "https://drive.google.com/file/d/1l0Sstb-DrP1wiMnEZTHelUSRSygPJW2x/view?usp=drive_link"
    );
  };

  return (
    <main id="tela-sobremim">
      <h1 className="nome-pagina">Sobre Mim</h1>
      <article className="container-sobre">
        <section className="texto-e-cv">
          <p>
            Com 18 anos e atualmente cursando Ciências da Computação, enxergo a
            busca e aplicação contínua de conhecimento como um pilar fundamental
            em minha jornada. Fascinado pela evolução tecnológica, estou sempre
            explorando novas soluções e desafios. Minha dedicação à aprendizagem
            se reflete no meu compromisso em oferecer contribuições valiosas no
            campo da computação.
          </p>
          <button
            onClick={(e) => {
              e.preventDefault, handleAcessarCV();
            }}
          >
            Vizualizar CV
          </button>
        </section>
        <section className="lista-contatos">
          <ul>
            <li className="contato">
              <div></div>
              <h4>WhatsApp</h4>
              <span>(41)99972-4736</span>
            </li>
            <li className="contato">
              <div></div>
              <h4>Email</h4>
              <span>matheuslink.dev@gmail.com</span>
            </li>
            <li className="contato">
              <div></div>
              <h4>Instagram</h4>
              <span>@matheus._.link</span>
            </li>
          </ul>
        </section>
      </article>
    </main>
  );
};

export default SobreMim;
