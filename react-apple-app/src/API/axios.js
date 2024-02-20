import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://api.themoviedb.org/3',
  params: {
    api_key: 'd973570aebda78ed6dc65a02e7cd98c9',
    language: 'ko-KR',
  }
})

export default instance;