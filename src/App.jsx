import "./App.scss";
import { useState, useEffect } from "react";
import { fetchDataFromApi } from "./utils/api";

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    apiTesting();
  }, []);

  const apiTesting = () => {
    fetchDataFromApi("/movie/popular").then((res) => {
      // Assuming the API response contains an array of movies
      setMovies(res.results);
    });
  };

  return (
    <div className="text">
      <h1 style={{textAlign: "center"}}>Popular Movies</h1>
      <ul style={{display : "flex", flexWrap: "wrap", listStyle: "none", gap: "10px", justifyContent: "center"}}>
        {movies.map((movie) => (
          <li key={movie.id}>
            <img
              height="450px"
              width="450px"
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.title}
            />
            <p style={{fontSize: "22px", fontWeight: "bold" }}>{movie.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
