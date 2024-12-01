import { createContext, useState } from "react";
export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
    const [query, setQuery] = useState("");
    const [movies, setMovies] = useState([]);
    const [tvShows, setTvShows] = useState([]);

    const handleInput = (e) => {
        setQuery(e.target.value);
    };
    const handleClick = () => {
        const api_key = import.meta.env.VITE_MOVIE_DB_API_KEY


        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${query}`)
            .then((res) => res.json())
            .then((data) => setMovies(data.results))
            .catch((err) => console.log(err));

        fetch(`https://api.themoviedb.org/3/search/tv?api_key=${api_key}&query=${query}`)
            .then((res) => res.json())
            .then((data) => setTvShows(data.results))
            .catch((err) => console.log(err));

        setQuery("");
    };
    return (
        <GlobalContext.Provider value={{ query, movies, tvShows, handleInput, handleClick }}>
            {children}
        </GlobalContext.Provider>
    );
};