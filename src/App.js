import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router-dom"
import Nav from "./Components/Nav";
import Welcome from "./Components/Welcome";
import Footer from "./Components/Footer";
import Login from "./Components/Login";
import Context from './Components/Context';
import { useState } from "react";

function App() {

  const [loggedIn, setLoggedIn] = useState(true)
  
  return (
    <Context.Provider value={{loggedIn, setLoggedIn}}>
      <Container className="App" fluid>
        <Nav />
        <Routes>
          <Route path="/login" element={<Login />} /> 
          <Route path="/" element={<Welcome />} /> 
        </Routes>
        <Footer />
      </Container>
    </Context.Provider>
  );
}

export default App;
