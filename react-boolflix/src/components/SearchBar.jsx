import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import AppHeader from "./AppHeader";
import AppMain from "./AppMain";

export default function SearchBar() {
    const { query, handleInput, handleClick, movies, tvShows } = useContext(GlobalContext);

    return (
        <>
            <AppHeader query={query} onHandleClick={handleClick} onHandleInput={handleInput} />
            <AppMain movies={movies} tvShows={tvShows} />
        </>
    );
}
