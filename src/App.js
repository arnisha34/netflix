import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router-dom"
import Nav from "./nav/nav";
import Welcome from "./Pages/Welcome";
import Home from './Pages/Home';
import Footer from "./Components/Footer";
import Login from "./Components/Login";
import {Context} from './Components/Context';
import { useEffect, useState } from "react";
import TVShows from "./Pages/TVShows";
import Movies from "./Pages/Movies";
import $ from 'jquery'

function App() {

  const [popularMovies, setPopularMovies] = useState([])
  const [nowPlayingMovies, setNowPlayingMovies] = useState([])
  const [topRatedMovies, setTopRatedMovies] = useState([])
  const [upcomingMovies, setUpcomingMovies] = useState([])
  const [popularTV, setPopularTV] = useState([])
  const [otaTV, setOtaTV] = useState([])
  const [airingTodayTV, setAiringTodayTV] = useState([])
  const [topRatedTV, setTopRatedTV] = useState([])
  const [movieVideos, setMovieVideos] = useState([])
  const [movieVideoID, setMovieVideoID] = useState([])
  const [tvVideos, setTVVideos] = useState([])
  const [tvVideoID, setTVVideoID] = useState([])
  const [loggedIn, setLoggedIn] = useState(true)

  const base = "https://api.themoviedb.org/3/"

  const API_KEY = '4b683d0374cdbc885fc0def4203e6efa';
  
  useEffect(() => {
      fetch(`${base}movie/popular?api_key=${API_KEY}`)
      .then(resp => resp.json())
      .then(data => setPopularMovies(data.results))

      fetch(`${base}movie/now_playing?api_key=${API_KEY}`)
      .then(resp => resp.json())
      .then(data => setNowPlayingMovies(data.results))

      fetch(`${base}movie/top_rated?api_key=${API_KEY}`)
      .then(resp => resp.json())
      .then(data => setTopRatedMovies(data.results))

      fetch(`${base}movie/upcoming?api_key=${API_KEY}`)
      .then(resp => resp.json())
      .then(data => setUpcomingMovies(data.results))

      fetch(`${base}tv/popular?api_key=${API_KEY}`)
      .then(resp => resp.json())
      .then(data => setPopularTV(data.results))

      fetch(`${base}tv/on_the_air?api_key=${API_KEY}`)
      .then(resp => resp.json())
      .then(data => setOtaTV(data.results))

      fetch(`${base}tv/airing_today?api_key=${API_KEY}`)
      .then(resp => resp.json())
      .then(data => setAiringTodayTV(data.results))

      fetch(`${base}tv/top_rated?api_key=${API_KEY}`)
      .then(resp => resp.json())
      .then(data => setTopRatedTV(data.results))

      fetch(`${base}movie/${movieVideoID}/videos?api_key=${API_KEY}`)
      .then(resp => resp.json())
      .then(data => setMovieVideos(data.results))
      
      fetch(`${base}tv/${tvVideoID}/videos?api_key=${API_KEY}`)
      .then(resp => resp.json())
      .then(data => setTVVideos(data.results))  

  },[])

  
  return (
    <Context.Provider value={{popularMovies, setPopularMovies, popularTV, setPopularTV, nowPlayingMovies, setNowPlayingMovies, topRatedMovies, setTopRatedMovies, airingTodayTV, setAiringTodayTV, upcomingMovies, setUpcomingMovies, otaTV, setOtaTV, topRatedTV, setTopRatedTV, movieVideos, setMovieVideos, tvVideos, setTVVideos, movieVideoID, setMovieVideoID, tvVideoID, setTVVideoID, loggedIn, setLoggedIn}}>
      <Container className="App" fluid>
        <Nav />
        <Routes>
          <Route path="/browse" element={<Home />} />
          <Route path="/" element={<Welcome />} />
          <Route path="/login" element={<Login />} /> 
          <Route path="browse/tv-shows" element={<TVShows />} />
          <Route path="/browse/movies" element={<Movies />} />
        </Routes>
        <Footer />
      </Container>
    </Context.Provider>
  );
}

export default App;
