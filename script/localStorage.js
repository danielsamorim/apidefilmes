function saveToLocalStorage (movie){
  const movies = getFavoriteMovies() || []

  movies.push(movie)

  const moviesJSON = JSON.stringify(movies)

  localStorage.setItem("favorites", moviesJSON)

}

function getFavoriteMovies(){
  return JSON.parse(localStorage.getItem("favorites"))
}

function removeToLocalStorage(id){
  const movies = getFavoriteMovies() || []
  const findMovie = movies.find(movie => movie.id == id)
  const newMovies = movies.filter(movie => movie.id != findMovie.id)
  localStorage.setItem("favorites", JSON.stringify(newMovies))
}

export {saveToLocalStorage, getFavoriteMovies, removeToLocalStorage}