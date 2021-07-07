import React from 'react'

export const FavButton = () => {
    const handleClick = () => {
        toggleFav(film.id);
      };

      const text = film.fav ? "Fav" : "Add";


    return (
         <button onClick={handleClick}>
      {text}
    </button>
    )
}
