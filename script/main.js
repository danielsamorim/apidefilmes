import {searchMovieByName, getPopularMovies} from './api.js'
import {saveToLocalStorage, getFavoriteMovies, removeToLocalStorage} from './localStorage.js'
import {moviesContainer, searchIcon, input, checkbox, renderMovie} from './renderMovie.js'



checkbox.addEventListener('change', checkCheckboxStatus)

searchIcon.addEventListener('click', searchMovie)

function checkCheckboxStatus() {
  const isChecked = checkbox.checked
  if (isChecked) {
    cleanAllMovies()
    const movies = getFavoriteMovies() || []
    movies.forEach(movie => renderMovie(movie))
  } else {
    cleanAllMovies()
    getAllPopularMovies()
  }
}


input.addEventListener('keyup', function(event) {
  console.log(event.key)
  if (event.key === 'Enter'){
   searchMovie()
  }
 })

 async function getAllPopularMovies() {
  const movies = await getPopularMovies()
  movies.forEach(movie => renderMovie(movie))
}

async function searchMovie(){
  const inputValue = input.value
  if(inputValue != ''){
    cleanAllMovies()
    const movies = await  searchMovieByName(inputValue)
    movies.forEach(movie => renderMovie(movie))
  }else{
    cleanAllMovies()
    getAllPopularMovies()
  }
}


function cleanAllMovies(){
  moviesContainer.innerHTML = ''
}


window.onload =  async function() {
  const movies = await getPopularMovies()
  movies.forEach(movie => renderMovie(movie))
} 