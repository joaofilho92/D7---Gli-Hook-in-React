import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Col, Container, Form, Row } from "react-bootstrap";
import MovieCard from "./components/MovieCard";
import { useState } from "react";

const App = () => {
  // state = {
  //   movieTitle: "Wonder Woman"
  // };
  const [movieTitle, setMovieTitle] = useState("Wonder Woman");

  return (
    <div className="App">
      <Container>
        <Row className="justify-content-center mt-5">
          <Col md={4}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Scegli il tuo film preferito</Form.Label>
              {/* la Select sarà un "controlled component", ovvero: leggerà e modificherà lo stato al suo onChange  */}
              <Form.Select value={movieTitle} onChange={e => setMovieTitle(e.target.value)}>
                <option>Iron Man</option>
                <option>Black Panther</option>
                <option>Doctor Strange</option>
                <option>The Batman</option>
                <option>Black Widow</option>
                <option>Wonder Woman</option>
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md={4}>
            {/* ad ogni cambio di stato "movieTitle" si modificherà anche il valore della prop MovieCard, che ne scatena una nuova fase di update
              abbiamo la possibilità di agganciarci a questa fase di update con il metodo componentDidUpdate() */}
            <MovieCard movieTitle={movieTitle} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default App;
