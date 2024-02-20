import React, { useEffect, useState } from 'react'
import './Banner.css'
import requests from '../API/request'
import axios from '../API/axios'
import styled from 'styled-components'

const Banner = () => {

  const [movie, setMovie] = useState(null);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    // 현재 상영 중인 영화 가져오기
    const request = await axios.get(requests.fetchNowPlaying);
    // request의 개수: 20 
    const requestLen = Math.floor(Math.random() * request.data.results.length);
    // 여러 영화 중 하나의 id 가져오기
    const movieId = request.data.results[requestLen].id;
    // 특졍 영화의 상세 정보를 가져오기
    const { data: movieDetail } = await axios.get(`movie/${movieId}`, {
      params: { append_to_response: 'videos' },
    });
    setMovie(movieDetail);
  }

  const truncate = (str, n) => {
    return str?.length > n ? str.substring(0, n)  + '...' : str;
  }

  if(!movie) {
    return(
      <>loading...</>
    )
  }
  if(isClicked) {
    return(
      <>
      <Container>
        <HomeContainer>
          <Iframe src={`https://www.youtube.com/embed/${movie.videos.results[0].key}?controls=0&autoplay=1&loop-1&mute=1`} ></Iframe>
        </HomeContainer>
      </Container>
      <Button onClick={() => setIsClicked(false)} >X</Button>
      </>
    )
  } else { // 클릭되지 않았을 때의 배너
    return (
      <header
        className='banner'
        style={{
          backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie.backdrop_path}')`,
          backgroundPostion: 'top center',
          backgroundSize: 'cover',
        }}
      >
        <div className='banner__contents'>
          <h1 className='banner__title'>
            {movie.title || movie.name || movie.original_name}
          </h1>
  
          <div className='banner__buttons'>
            {movie.videos?.results[0]?.key ?
              <button
                className='banner__button play'
                onClick={() => setIsClicked(true)}
              >
                play
              </button>
  
              : null
            }
          </div>
          <h1 className='banner__description'>
            {truncate(movie.overview, 100)}
          </h1>
        </div>  
        <div className='banner--fadeBottom' />
      </header>
    )
  }
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;

const HomeContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const Iframe = styled.iframe`
  width: 100%;
  height: 100%;
  z-index: -1;
  opacity: 0.65;
  border: none;

  &:: after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

`;
const Button = styled.button`
  position: absolute;
  top: 0;
  left: 0;
`

export default Banner  