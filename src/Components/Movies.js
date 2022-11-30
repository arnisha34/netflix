import { useContext } from "react"
import { Context } from "./Context"
import FeaturedVideo from "./FeaturedVideo"
import { Slider } from "./Slider"

const Movies = () => {

  const ctx = useContext(Context)

  return (
    <>
      <FeaturedVideo featureHeaderID={724495} featureHeader={ctx.popularMovies} featureHeaderLargePosterPath={ctx.large_poster_path} />
      <Slider sliderTitle={"Popular on Netflix"} sliderCategory={ctx.popularMovies} />
      <Slider sliderTitle={"Latest Movies"} sliderCategory={ctx.topRatedMovies} />
      <Slider sliderTitle={"Trending Now"} sliderCategory={ctx.upcomingMovies} />
      <Slider sliderTitle={"Now Playing"} sliderCategory={ctx.nowPlayingMovies} />
    </>
  )
}

export default Movies