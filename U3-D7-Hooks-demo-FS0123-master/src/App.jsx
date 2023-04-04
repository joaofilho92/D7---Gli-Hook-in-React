import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
// import UseStateTest from "./components/UseStateTest";
import UseEffectTest from "./components/UseEffectTest";
import { useState } from "react";
import { Button } from "react-bootstrap";

function App() {
  const [boolean, setBoolean] = useState(true);
  return (
    <div className="App">
      <header className="App-header">
        {/* <UseStateTest /> */}

        {/* questo short circuit mi serve per smontare il componente e testare la funzionalità di componentWillUnmount */}
        {boolean && <UseEffectTest />}

        <Button variant="danger" className="mt-3" onClick={() => setBoolean(!boolean)}>
          Nascondi Componente
        </Button>
      </header>
    </div>
  );
}

export default App;
