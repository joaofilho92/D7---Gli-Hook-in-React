import { Button } from "react-bootstrap";
import { useState } from "react";
// REGOLE DEGLI HOOKS
// 1) USARE GLI HOOKS SOLO NEI COMPONENTI REACT A FUNZIONE
// 2) USARE GLI HOOKS SOLO NEL CORPO PRINCIPLAE DELLA FUNZIONE
// PRIMA DEL RETURN STATEMENT E FUORI DA BLOCCHI, CICLI, FUNZIONI, CONDIZIONI, ECC...

// state = {
//     name: "Stefano"
//     surname: "Miceli";
//     counter: 0
// }

const UseStateTest = () => {
  const [name, setName] = useState("Stefano"); // ["Stefano", f(){}]
  const [surname, setSurname] = useState("Miceli"); // ["Miceli", f(){}]
  const [counter, setCounter] = useState(0); // [0, f(){}]

  // 1° valore è la variabile che contiene il valore dello stato stesso
  // 2° valore è l'unica funzione in grado di assegnare il nuovo valore allo stato (1° valore)

  // per convenzione il secondo valore inizierà sempre per "set" + nome-valore-1  es. [name, setName]

  // 3° è possibile inizializzare lo stato con un valore iniziale, inserendolo nelle parentesi di useState: es. useState("Stefano")

  return (
    <div>
      <h1>{counter}</h1>
      <h2>Nome: {name} </h2>
      <h2>Surname: {surname}</h2>

      <Button
        onClick={() => {
          setName("Gianluca");
          setSurname("Praticò");
        }}
      >
        Cambia nome
      </Button>

      <Button
        className="ms-3"
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        +1
      </Button>
    </div>
  );
};

export default UseStateTest;
