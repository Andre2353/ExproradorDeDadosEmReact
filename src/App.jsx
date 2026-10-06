import Contador from "./components/contador";
import "./App.css";

export default function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Explorador de Estados em React</h1>
        <p>
          Aprenda e pratique os 4 principais padrões do uso do hook{" "}
          <span>useState</span>
        </p>
      </header>

      <main className="grid-exemplos">
        <Contador />
      </main>

      <footer className="app-footer">
        <p>Demonstrando o uso do React Hook useState</p>
      </footer>
    </div>
  );
}