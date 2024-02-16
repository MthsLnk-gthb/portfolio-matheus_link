import './style.scss'
import minhasCertificacoes from '../../data/Certificados/certificados.json'

const Certificados = () => {
  return (
    <main id="pagina-certificacoes">
      <h1 className="nome-pagina">Minhas Certificações</h1>
      <article className="lista-certificacoes">
        {minhasCertificacoes.map(
          (certificacao, index) =>
            minhasCertificacoes.length > 0 && (
              <section key={index} className="card-certificacao">
                <h2>{certificacao.curso}</h2>
                <h3>{certificacao.escola}</h3>
              </section>
            )
        )}
      </article>
    </main>
  );
}

export default Certificados