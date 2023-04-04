import { useEffect, useState } from "react";
import { Button, Card, Spinner } from "react-bootstrap";

const MovieCard = props => {
  const [movieObj, setMovieObj] = useState(null);
  // state = {
  //   movieObj: null // verrà riempito con il valore di un oggetto derivato da una fetch
  // };

  // useEffect(() => {
  //   console.log("WITHOUT DEPENDENCY");

  //   fetchMovies();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  // componentDidMount = () => {
  //   console.log("didMount()");

  //   // dopo il primo render(), finiremo qui per UNA VOLTA SOLA

  //   // qui effettueremo la chiamata iniziale per "Iron Man" perché quello è il valore di default settato nello stato di App
  //   this.fetchMovies();
  // };

  const fetchMovies = async () => {
    try {
      const response = await fetch("http://www.omdbapi.com/?apikey=24ad60e9&t=" + props.movieTitle);
      // inizialmente questa fetch avrà sempre "Iron Man" come titolo

      if (response.ok) {
        // se la chiamata va a buon fine mi posso aspettare un dato nel body
        const data = await response.json();
        // dopo il parse del body col metodo json() avremo dentro "data" l'oggetto che ci serve
        console.log("data obtained: ", data);

        setMovieObj(data);
        console.log("setState() avvenuto");
        // quando avviene questo, salveremo l'oggetto del film nello stato e contestualmente entreremo nella fase di update:
        // render() viene eseguito di nuovo (aggiorna l'interfaccia col nuovo dato)
        // e viene eseguito anche un componentDidUpdate() finale - per ogni ulteriore setState (bisogna prevenire qualsiasi chiamata ricorsiva all'interno del didUpdate con un controllo di guardia)
      }
    } catch (error) {
      console.log(error);
    }
  };

  // componentDidUpdate(prevProps, prevState) {
  //   // questo metodo intercetta qualsiasi aggiornamento del componente (fase di UPDATE)
  //   // quindi ad ogni cambio di state o props

  //   // prevProps e prevState sono i due parametri propri di componentDidUpdate
  //   // prevProps è la versione precedente di this.props
  //   // prevState è la versione precedente di this.state

  //   // nel nostro caso voglia che this.fetchMovies() venga invocato quando viene scelto un nuovo titolo in App.js,
  //   // quindi quando il nostro componente MovieCard riceve nuove props corrispondenti.

  //   console.log("didUpdate()");
  //   // quello che NON VOGLIAMO succeda è che venga invocato this.fetchMovies() più di una volta

  //   if (prevState.movieObj === null) {
  //     console.log("Nothing happens: state is null");
  //   }
  //   if (prevState.movieObj !== null && prevState.movieObj.Title !== this.state.movieObj.Title) {
  //     console.log("Update WITHOUT another fetch");
  //   }

  //   if (prevProps.movieTitle !== this.props.movieTitle) {
  //     //creare una condizione di guardia è OBBLIGATORIO quando si usa componentDidUpdate
  //     //la condizione è necessaria ad evitare loop infiniti di aggiornamento causati dal setState che fa aggiorare il componente.
  //     console.log("NEW PROP DETECTED: Update WITH NEW fetch on: " + this.props.movieTitle);
  //     this.fetchMovies();
  //   }

  //   // if(prevProps.somethingElse !== this.props.somethingElse) {
  //   // altra chiamata fetch o altra operazione...
  //   // }
  // }

  useEffect(() => {
    console.log("WITH DEPENDENCY");
    fetchMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.movieTitle]);

  return (
    <>
      {/* inizialmente movieObj è null e si attiverà la condizione else sullo spinner*/}
      {/* quando movieObj riceverà l'oggetto derivante dalla fetch, allora si attiverà la Card con i valori dinamici presi dallo stato */}
      {movieObj ? (
        <Card>
          <Card.Img variant="top" src={movieObj.Poster} />
          <Card.Body>
            <Card.Title>{movieObj.Title}</Card.Title>
            <Card.Text>{movieObj.Plot}</Card.Text>
            <Button variant="primary">{movieObj.imdbID}</Button>
          </Card.Body>
        </Card>
      ) : (
        <Spinner variant="success" animation="grow" />
      )}
    </>
  );
};

export default MovieCard;
