import {checkMovieIsFavorited, favoriteButtonPressed} from './isFavorite.js'

const moviesContainer = document.querySelector('.movies')

const searchIcon = document.querySelector('.searchIcon')
const input = document.querySelector('input')
const checkbox = document.querySelector('input[type="checkbox"]')



function renderMovie(movie) {

  const {id, title, poster_path, vote_average, release_date, overview } = movie
  const year = new Date(release_date).getFullYear()
  const image = `https://image.tmdb.org/t/p/w500${poster_path}`
  const isFavorited = checkMovieIsFavorited(id)


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
  favoriteImage.src = isFavorited  ? 'images/heart-fill.svg' : 'images/heart.svg'
  favoriteImage.alt = 'Heart'
  favoriteImage.classList.add('favoriteImage')
  favoriteImage.addEventListener('click', (event) => favoriteButtonPressed(event, movie))
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

export {moviesContainer, searchIcon, input, checkbox, renderMovie}