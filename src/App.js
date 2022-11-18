import { Container } from "react-bootstrap";
import Nav from "./Nav";
import Hero from "./Hero";
import Welcome from "./Welcome";
import Footer from "./Footer";

function App() {
  return (
    <Container className="App" fluid>
      <Nav />
      <Hero />
      <Welcome />
      <Footer />
    </Container>
  );
}

export default App;
