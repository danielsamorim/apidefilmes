const moviesContainer = document.querySelector('.movies')

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
  
  window.onload = function (){
    movies.forEach(movie => renderMovie(movie))
  }

function renderMovie(movie) {
 
  const { title, image, rating, year, description, isFavorited } = movie

 
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
  movieRate.textContent = rating
  ratingMovie.appendChild( movieRate)
  ratingMovie.appendChild(starImage)
  movieInformation.appendChild(ratingFavorites)





  const favorite = document.createElement('div')
  favorite.classList.add('favorite')
  const favoriteImage = document.createElement('img')
  favoriteImage.src = isFavorited ? 'images/heart-fill.svg' : 'images/heart.svg'
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
  movieDescriptionSpan.textContent = description
  movieDescription.appendChild( movieDescriptionSpan)

  movieElement.appendChild(movieInformation)
  movieElement.appendChild(movieDescription)
}