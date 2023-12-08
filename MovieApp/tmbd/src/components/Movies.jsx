import { useEffect, useState } from "react";

export default function Movies() {
  const [movies, setMovies] = useState([]);

  // fetch data
  const showmovies = () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NGQyODA0MjFiZGI1YzdjNTlmNjJjNDY5Y2YzNTVlNiIsInN1YiI6IjY1NmY0NjkyODgwNTUxMDBlMzcxNmQ0NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.D5QZHRvDfs2UtxPBDxxajQSOiSZKkMIjjHSewNqBcmQ",
      },
    };

    fetch(
      "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc",
      options
    )
      .then((response) => response.json())
      .then((response) => {
        setMovies(response.results);
        console.log(response);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    showmovies();
  }, []);
  return (
    <>
      <h2>
        {movies.length > 0 ? (
          <div>
            {movies.map((movie) => (
              <li key={movie.id}>{movie.title}</li>
            ))}
          </div>
        ) : (
          <div>Nothing Found</div>
        )}
      </h2>
    </>
  );
}
