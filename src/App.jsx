import Habilidades from "./Componentes/Habilidades";
import Header from "./Componentes/Header";
import Inicio from "./Componentes/Inicio/index";

function App() {
  return (
    <>
      <main className="App">
      <Header />
        <Inicio />
        <Habilidades/>
      </main>
    </>
  );
}

export default App;
