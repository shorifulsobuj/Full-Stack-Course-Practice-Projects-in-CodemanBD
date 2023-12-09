import { useEffect } from "react";

const API_URL = `https://api.themoviedb.org/3/search/movie?query=`;

const API_KEY = `84d280421bdb5c7c59f62c469cf355e6`;

function Home() {
  const searchMovies = asyne (title) => {
    console.log(`${API_URL}+${title}+${API_KEY}`);

    const respons = await fetch(`${API_URL}+${title}+${API_KEY}`);
    const data = await respons.json();
    console.log(data);
  };

  useEffect(() => {
    searchMovies();
  }, []);

  return (
    <>
      <div className="hero">
        <div className="hero-content">
          <h2>Welcome</h2>
          <h3>
            Millions of movies, TV shows and people to discover. Explore now.
          </h3>
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search for a movie..."
            />
            <button>Search</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
