import Habilidades from "./Componentes/Habilidades";
import Header from "./Componentes/Header";
import Inicio from "./Componentes/Inicio/index";
import Projetos from "./Componentes/Projetos";

function App() {
  return (
      <>
        <main className="App">
          <Header />
          <Inicio />
          <Projetos />
          <Habilidades />
        </main>
      </>
  );
}

export default App;
