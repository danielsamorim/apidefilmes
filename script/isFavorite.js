import {saveToLocalStorage, getFavoriteMovies, removeToLocalStorage} from './localStorage.js'

function favoriteButtonPressed(event, movie){
  const favoriteState = {
    favorited: 'images/heart-fill.svg',
    notFavorited: 'images/heart.svg'
  }
  
  if(event.target.src.includes(favoriteState.notFavorited)){
    event.target.src = favoriteState.favorited
    saveToLocalStorage(movie)
  }else{
    event.target.src = favoriteState.notFavorited
    removeToLocalStorage(movie.id)
  }
}



function checkMovieIsFavorited(id){
  const movies = getFavoriteMovies() || []
  return movies.find(movie => movie.id == id)
}


export {checkMovieIsFavorited, favoriteButtonPressed}