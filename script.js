function renderMovie(movie) {

  const movieElements = document.createElement('div')
  movieElements.classList.add('movies')
  document.body.appendChild(movieElements)
  
  const movieElement = document.createElement('div')
  movieElement.classList.add('movie')
  movieElements.appendChild(movieElement)

  const movieInformation = document.createElement('div')
  movieInformation.classList.add('movie-informations')
  movieElement.appendChild(movieInformation)

  const movieImage = document.createElement('div')
  movieImage.classList.add('movie-image')
  movieInformation.appendChild(movieImage)

  // const img = document.createElement('img')
  // img.src = m.image
  // movieImage.appendChild(img.src)

  const movieText = document.createElement('div')
  movieText.classList.add('movie-text')
  movieInformation.appendChild(movieText)

  const movieTitle = document.createElement('h4')
  movieTitle.textContent = movie.title
  movieText.appendChild(movieTitle)

  const ratingFavorites = document.createElement('div')
  ratingFavorites.classList.add('rating-favorites')
  movieText.appendChild(ratingFavorites)

  const ratingMovie = document.createElement('div')
  ratingMovie.classList.add('rating')
  ratingFavorites.appendChild(ratingMovie)

  // const imageRating = document.createElement('img')
  // imageRating.src = movie.image
  // ratingMovie.appendChild(imageRating.src )

  const span = document.createElement('span')
  span.textContent = movie.rating
  ratingMovie.appendChild(span)

  const favorite = document.createElement('div')
  favorite.classList.add('favorite')
  movieText.appendChild(favorite)

  const imgFavorite = document.createElement('img')
  // imgFavorite.src = movie.image
  // favorite.appendChild(imgFavorite.src )

  const spanFavorite = document.createElement('span')
  spanFavorite.textContent = movie.isFavorited
  favorite.appendChild(spanFavorite)

  const movieDescription = document.createElement('div')
  movieDescription.classList.add('movie-description')
  movieElement.appendChild(movieDescription)

  const spanDescription = document.createElement('span')
  spanDescription.textContent = movie.description
  movieDescription.appendChild(spanDescription)

  const spanYear = document.createElement('span')
  spanYear.textContent = movie.year
  movieDescription.appendChild(spanYear)

}

const movies = [
{
  image: 'https://img.elo7.com.br/product/original/3FBA809/big-poster-filme-batman-2022-90x60-cm-lo002-poster-batman.jpg',
  title: 'Batman',
  rating: 9.2,
  year: 2022,
  description: 'Descrição do filme…',
  isFavorited: true
},
{
  image: 'https://upload.wikimedia.org/wikipedia/pt/thumb/9/9b/Avengers_Endgame.jpg/250px-Avengers_Endgame.jpg',
  title: 'Avengers',
  rating: 9.2,
  year: 2019,
  description:  'Descrição do filme…',
  isFavorited: false
},
{
  image: 'https://upload.wikimedia.org/wikipedia/en/1/17/Doctor_Strange_in_the_Multiverse_of_Madness_poster.jpg',
  title: 'Doctor Strange',
  rating: 9.2,
  year: 2022,
  description: 'Descrição do filme…',
  isFavorited: false
},
]

movies.forEach(movie => renderMovie(movie))