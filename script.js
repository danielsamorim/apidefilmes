import {apiKey}  from "./key/apiKey.js"

const moviesContainer = document.querySelector('.movies')
const searchIcon = document.querySelector('.searchIcon')
const input = document.querySelector('input')


searchIcon.addEventListener('click', searchMovie)

input.addEventListener('keyup', function(event) {
  console.log(event.key)
  if (event.key === 'Enter'){
   searchMovie()
   return
  }
 })


async function searchMovie(){
  const inputValue = input.value
  if(inputValue != ''){
    cleanAllMovies()
    const movies = await  searchMovieByName(inputValue)
    movies.forEach(movie => renderMovie(movie))
  }
}

function cleanAllMovies(){
  moviesContainer.innerHTML = ''
}


async function searchMovieByName(title){
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${title}&language=en-US&page=1`
  const fetchResponse = await fetch(url)
  const {results} = await fetchResponse.json()
  return results
}

async function getPopularMovies(){
  const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`  
  const fetchResponse =  await fetch(url)
  const {results} = await fetchResponse.json()

  return results
}


window.onload =  async function() {
  const movies = await getPopularMovies()
  movies.forEach(movie => renderMovie(movie))
}

function renderMovie(movie) {

  const { title, poster_path, vote_average, release_date, overview } = movie
  const year = new Date(release_date).getFullYear()
  const image = `https://image.tmdb.org/t/p/w500${poster_path}`
  // const isFavorited = false - será implemantado depois

  const movieElement = document.createElement('div')
  movieElement.classList.add('movie')
  moviesContainer.appendChild(movieElement)

  const movieInformation = document.createElement('div')
  movieInformation.classList.add('movie-informations')


  const movieImageContainer = document.createElement('div')
  movieImageContainer.classList.add('movie-image')
  const movieImage = document.createElement('img')
  movieImage.src = image
  movieImage.alt = `${title} Poster`
  movieImageContainer.appendChild(movieImage)
  movieInformation.appendChild(movieImageContainer)


  const movieText = document.createElement('div')
  movieText.classList.add('movie-text')
  const movieTitle = document.createElement('h4')
  movieTitle.textContent = `${title} (${year})`
  movieText.appendChild(movieTitle)
  movieInformation.appendChild(movieText)

  const ratingFavorites = document.createElement('div')
  ratingFavorites.classList.add('rating-favorites')
  movieText.appendChild(ratingFavorites)

  const ratingMovie = document.createElement('div')
  ratingMovie.classList.add('rating')
  const starImage = document.createElement('img')
  starImage.src = 'images/star.svg'
  starImage.alt = 'Star'

  ratingFavorites.appendChild(ratingMovie)
  const movieRate = document.createElement('span')
  movieRate.textContent = vote_average
  ratingMovie.appendChild( movieRate)
  ratingMovie.appendChild(starImage)
  movieInformation.appendChild(ratingFavorites)





  const favorite = document.createElement('div')
  favorite.classList.add('favorite')
  const favoriteImage = document.createElement('img')
  // favoriteImage.src = isFavorited  ? 'images/heart-fill.svg' : 'images/heart.svg'
  favoriteImage.alt = 'Heart'
  favoriteImage.classList.add('favoriteImage')
  const favoriteText = document.createElement('span')
  favoriteText.classList.add('movie-favorite')
  favoriteText.textContent = 'Favoritar'
  favorite.appendChild(favoriteImage)
  favorite.appendChild(favoriteText)
  movieInformation.appendChild(favorite)



  const movieDescription = document.createElement('div')
  movieDescription.classList.add('movie-description')
  movieElement.appendChild(movieDescription)

  const movieDescriptionSpan = document.createElement('span')
  movieDescriptionSpan.textContent = overview
  movieDescription.appendChild( movieDescriptionSpan)

  movieElement.appendChild(movieInformation)
  movieElement.appendChild(movieDescription)
}