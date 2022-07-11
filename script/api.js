import {apiKey}  from "../key/apiKey.js"

async function searchMovieByName(title){
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${title}&language=pt-BR&page=1`
  const fetchResponse = await fetch(url)
  const {results} = await fetchResponse.json()
  return results
}

async function getPopularMovies(){
  const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=pt-BR&page=1`  
  const fetchResponse =  await fetch(url)
  const {results} = await fetchResponse.json()
  
  return results
}

export {searchMovieByName, getPopularMovies}