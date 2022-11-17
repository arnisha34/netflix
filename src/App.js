<<<<<<< HEAD
import { Container } from "react-bootstrap";
import Nav from "./Nav";
import Welcome from "./Welcome";

function App() {
  return (
    <>
      <Container className="App" fluid>
        <Nav />
        <Container>
          <Welcome />

        </Container>
      </Container>
    </>
=======
import Home from './Home'


function App() {
  return (
    <div className="App">
      <Home />
    </div>
>>>>>>> 8e6ac9ab5f677bdb4e4e0836d526192c615058a2
  );
}

export default App;
