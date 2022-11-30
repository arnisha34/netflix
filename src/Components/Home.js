import { useContext } from "react"
import { Context } from "./Context"
import FeaturedVideo from "./FeaturedVideo"
import { Slider } from "./Slider"

const Home = () => {

  const ctx = useContext(Context)

  return (
    <>
      <FeaturedVideo featureHeaderID={505642} featureHeader={ctx.popularMovies} featureHeaderLargePosterPath={ctx.large_poster_path} />
      <Slider sliderTitle={"Popular on Netflix"} sliderCategory={ctx.popularMovies} />
      <Slider sliderTitle={"Latest Movies"} sliderCategory={ctx.topRatedMovies} />
      <Slider sliderTitle={"Trending Now"} sliderCategory={ctx.upcomingMovies} />
      <Slider sliderTitle={"Now Playing"} sliderCategory={ctx.nowPlayingMovies} />
      <Slider sliderTitle={"Popular TV"} sliderCategory={ctx.popularTV} />
      <Slider sliderTitle={"On The Air"} sliderCategory={ctx.otaTV} />
      <Slider sliderTitle={"Airing Today"} sliderCategory={ctx.airingTodayTV} />
      <Slider sliderTitle={"Top Rated TV"} sliderCategory={ctx.topRatedTV} />
    </>
  )
}

export default Home