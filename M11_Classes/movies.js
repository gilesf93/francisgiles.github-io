// Define the Movie class
// title, cast, description, rating

class Movie {
   #title;
   #cast;
   #description;
   #rating;

   constructor(title, cast, description, rating) {
   this.#title = title;
   this.#cast = cast;
   this.#description = description;
   this.#rating = rating;
}
 
// Method to update the rating of the movie
// Method to display the movie's information

   updateRating(newRating) {
   this.#rating = newRating;
   

}
   getTitle() {
     return this.#title;
   }
   displayInfo(isUpdate = false) {
  const container = document.getElementById("movie-info");
  const label = isUpdate ? `<h3>Updated rating:</h3>` : `<h3>Movie Management System</h3>`;
  container.innerHTML += `
   ${label}
   <p>Title: ${this.#title}</p>
   <p>Cast: ${this.#cast.join(", ")}</p>
   <p>Description: ${this.#description}</p>
   <p>Rating: ${this.#rating}</p>
   <br>
  `;
}

}


// Test your implementation
// Display the initial information of the movie

   const newMovie = new Movie(
     "The Shawshank Redemption",
     ["Tim Robbins", "Morgan Freeman"],
     "Two imprisoned men bond over a number of years, finding eventual redemption through acts of common decency.",
     9.3
);


// Update the rating of the movie
// Display the updated information of the movie
   
   newMovie.displayInfo();

const movies = [];
movies.push(newMovie);

function updateMovieRating(title, newRating) {
  for(let movie of movies) {
    if (movie.getTitle()== title) {
      movie.updateRating(newRating);
      movie.displayInfo(true);
    }
  }
}

updateMovieRating("The Shawshank Redemption", 9.5);
