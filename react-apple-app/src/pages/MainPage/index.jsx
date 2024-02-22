import Banner from '../../components/Banner.jsx'
import Row from '../../components/Row.jsx'
import requests from '../../API/request.js'
import { styled } from 'styled-components'

const MainPage = () => {
  return (
    <Container>
      <Banner />
      <Row title='Trending Now' id='TN' fetchUrl={requests.fetchTrending} />
      <Row title='Top Rated' id='TR' fetchUrl={requests.fetchTopRated} />
      <Row title='Action Movies' id='AM' fetchUrl={requests.fetchActionMovies} />
      <Row title='Comedy Movies' id='CM' fetchUrl={requests.fetchComedyMovies} />
    </Container>
  )
}

const Container = styled.main`
  position: relative;
  display: block;
  top: 70px;
  padding: 0 calc(3.5vw + 5px);
`

export default MainPage