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
        const apiKey = "94fbc0828d753da23258202acf3bb239";
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`)
            .then((res) => res.json())
            .then((data) => setMovies(data.results))
            .catch((err) => console.log(err));

        fetch(`https://api.themoviedb.org/3/search/tv?api_key=${apiKey}&query=${query}`)
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