import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router-dom"
import Nav from "./Components/Nav";
import Welcome from "./Components/Welcome";
import Home from './Components/Home';
import Footer from "./Components/Footer";
import Login from "./Components/Login";
import Context from './Components/Context';
import { useEffect, useState } from "react";

function App() {

  const [data, setData] = useState([])
  const [loggedIn, setLoggedIn] = useState(true)

  const large_poster_path = "https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/";

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=4b683d0374cdbc885fc0def4203e6efa')
    .then(res => res.json())
    .then(data => setData(data.results))
    .catch(err => console.log(err))
  },[])
  
  return (
    <Context.Provider value={{data, setData, loggedIn, setLoggedIn, large_poster_path}}>
      <Container className="App p-0" fluid>
        <Nav />
        {loggedIn === true ? <Home /> :
        <Routes>
          <Route path="/login" element={<Login />} /> 
          <Route path="/" element={<Welcome />} /> 
        </Routes>
        }
        <Footer />
      </Container>
    </Context.Provider>
  );
}

export default App;
