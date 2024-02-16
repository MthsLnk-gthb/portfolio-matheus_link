import Certificados from "./Componentes/Certificados/index";
import Habilidades from "./Componentes/Habilidades/index";
import Header from "./Componentes/Header/index";
import Inicio from "./Componentes/Inicio/index";
import Projetos from "./Componentes/Projetos/index";
import SobreMim from "./Componentes/SobreMim/index";

function App() {
  return (
    <>
      <main className="App">
        <Header />
        <section id="inicio">
          <Inicio />
        </section>
        <section id="sobreMim">
          <SobreMim />
        </section>
        <section id="projetos">
          <Projetos />
        </section>
        <section id="habilidades">
          <Habilidades />
        </section>
        <section id="certificados">
          <Certificados />
        </section>
      </main>
    </>
  );
}

export default App;
