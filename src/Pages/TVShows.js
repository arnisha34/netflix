import { useContext } from "react"
import { Context } from "../components/context"
import FeaturedVideo from "../components/featuredVideo"
import { Slider } from "../components/slider"

const TVShows = ({lgPosterPath}) => {

  const ctx = useContext(Context)

  return (
    <>
      <FeaturedVideo featureHeaderID={119051} featureHeader={ctx.topRatedTV} />
      <Slider sliderTitle={"Popular TV"} sliderCategory={ctx.popularTV} />
      <Slider sliderTitle={"On The Air"} sliderCategory={ctx.otaTV} />
      <Slider sliderTitle={"Airing Today"} sliderCategory={ctx.airingTodayTV} />
      <Slider sliderTitle={"Top Rated TV"} sliderCategory={ctx.topRatedTV} />
    </>
  )
}

export default TVShows