import Certificados from "./Componentes/Certificados";
import Habilidades from "./Componentes/Habilidades";
import Header from "./Componentes/Header";
import Inicio from "./Componentes/Inicio/index";
import Projetos from "./Componentes/Projetos";
import SobreMim from './Componentes/SobreMim/index';

function App() {
  return (
      <>
        <main className="App">
          <Header />
          <Inicio />
          <Projetos />
          <SobreMim/>
          <Habilidades />
          <Certificados/>
        </main>
      </>
  );
}

export default App;
