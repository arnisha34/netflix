import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router-dom"
import Nav from "./Components/Nav";
import Welcome from "./Components/Welcome";
import Home from './Components/Home';
import Footer from "./Components/Footer";
import Login from "./Components/Login";
import {Context} from './Components/Context';
import { useEffect, useState } from "react";
import TVShows from "./Components/TVShows";
import Movies from "./Components/Movies";
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

  const large_poster_path = "https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/";
  const small_poster_path = "https://image.tmdb.org/t/p/w300_and_h450_bestv2/"

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

      // $('.glider-next').replaceWith('<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#fff" class="bi bi-chevron-right" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/></svg>');

      // $('.glider-prev').replaceWith('<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#fff" class="bi bi-chevron-left" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/></svg>');    

  },[])

  
  return (
    <Context.Provider value={{popularMovies, setPopularMovies, popularTV, setPopularTV, nowPlayingMovies, setNowPlayingMovies, topRatedMovies, setTopRatedMovies, airingTodayTV, setAiringTodayTV, upcomingMovies, setUpcomingMovies, otaTV, setOtaTV, topRatedTV, setTopRatedTV, movieVideos, setMovieVideos, tvVideos, setTVVideos, movieVideoID, setMovieVideoID, tvVideoID, setTVVideoID, loggedIn, setLoggedIn, large_poster_path, small_poster_path}}>
      <Container className="App p-0" fluid>
        <Nav />
        <Routes>
          <Route path="/browse" element={<Home />} />
          <Route path="/" element={<Welcome />} />
          <Route path="/login" element={<Login />} /> 
          <Route path="/tv-shows" element={<TVShows />} />
          <Route path="/movies" element={<Movies />} />
        </Routes>
        <Footer />
      </Container>
    </Context.Provider>
  );
}

export default App;
