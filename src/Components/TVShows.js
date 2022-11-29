import { useContext } from "react"
import { Context } from "./Context"
import AiringToday from "./Categories/AiringToday"
import OnTheAirTV from "./Categories/OnTheAirTV"
import PopularTV from "./Categories/PopularTV"
import TopRatedTV from "./Categories/TopRatedTV"
import FeaturedVideo from "./FeaturedVideo"

const TVShows = () => {

  const ctx = useContext(Context)

  return (
    <>
      <FeaturedVideo featureHeaderID={119051} featureHeader={ctx.topRatedTV} featureHeaderLargePosterPath={ctx.large_poster_path} />
      <PopularTV />
      <OnTheAirTV />
      <AiringToday />
      <TopRatedTV />
    </>
  )
}

export default TVShows