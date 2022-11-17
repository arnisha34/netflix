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
  );
}

export default App;
