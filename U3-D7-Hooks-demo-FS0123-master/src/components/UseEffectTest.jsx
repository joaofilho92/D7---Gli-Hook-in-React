import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";

// REGOLE DEGLI HOOKS
// 1) USARE GLI HOOKS SOLO NEI COMPONENTI REACT A FUNZIONE
// 2) USARE GLI HOOKS SOLO NEL CORPO PRINCIPLAE DELLA FUNZIONE
// PRIMA DEL RETURN STATEMENT E FUORI DA BLOCCHI, CICLI, FUNZIONI, CONDIZIONI, ECC...

const UseEffectTest = () => {
  const [counter, setCounter] = useState(0); // [0, f(){}]
  const [name, setName] = useState("Stefano"); // ["Stefano", f(){}]
  // 1° valore è la variabile che contiene il valore dello stato stesso
  // 2° valore è l'unica funzione in grado di assegnare il nuovo valore allo stato (1° valore)

  // per convenzione il secondo valore inizierà sempre per "set" + nome-valore-1  es. [name, setName]

  // 3° è possibile inizializzare lo stato con un valore iniziale, inserendolo nelle parentesi di useState: es. useState("Stefano")

  //   useEffect(() => {
  //     console.log("componentDidUpdate 'senza freni'");
  //   }); // come un componentDidUpdate senza condizionali di guardia (utilizzo più raro)

  useEffect(() => {
    console.log("come fosse componentDidMount()");
  }, []); // come un componentDidMount (avviene solo una volta al montaggio del componente)

  useEffect(() => {
    console.log("come fosse componentDidupdate() con condizione di guardia sul valore di counter");
  }, [counter]); // come un componentDidUpdate con il uso condizionale di guardia, che rieseguirà la funzione quando uno dei valori nella dependency list cambierà
  // la dependency list [counter] serve a creare quella condizione a protezione dell'esecuzione della callback, similarmente a come succedeva con componentDidUpdate e l'if statement
  // avere una dependency implica anche l'avvio al montaggio, quindi integra anche il funzionamento di componentDidMount()

  //   useEffect(() => {
  //     console.log("come fosse componentDidupdate() con condizione di guardia sul valore di name");
  //   }, [name]);

  useEffect(() => {
    return () => {
      console.log("come fosse componentWillUnmount()");
      // avvia una funzionalità prima dello smontaggio (e morte) del componente
      // usato di solito per resettare un setInterval, disconnettersi da una connessione, ecc... (utilizzo raro)
    };
  }, []); // come un componentWillUnmount

  return (
    <div>
      <h2>Nome: {name} </h2>
      <Button
        onClick={() => {
          setName(name !== "Stefano" ? "Stefano" : "Gianluca");
        }}
      >
        Cambia nome
      </Button>

      <h1>{counter}</h1>
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

export default UseEffectTest;
