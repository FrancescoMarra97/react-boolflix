import { useState } from "react"
import AppHeader from "./AppHeader"
import AppMain from "./AppMain"

export default function SearchBar() {


    const [query, setQuery] = useState("")    //stato per memorizzare la query
    const [movies, SetMovies] = useState([])    //stato per memorizzare i film cercati
    const [tvShows, setTvShows] = useState([]);  // Stato per memorizzare le serie TV

    function handleInput(e) {
        // console.log(e);
        setQuery(e.target.value)
    }

    function handleClick() {
        console.log(`stai cercando ${query}`);
        //in questa funzione fare la chiamata ajax per cercare i film

        const apiKey = "94fbc0828d753da23258202acf3bb239"

        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`)
            .then(res => res.json())
            .then(data => {
                console.log(data.results);
                SetMovies(data.results)
            })
            .catch(err => {
                console.log(err);
            })

        //chiamta per le serie tv
        fetch(`https://api.themoviedb.org/3/search/tv?api_key=${apiKey}&query=${query}`)
            .then(res => res.json())
            .then(data => {
                console.log(data.results);
                setTvShows(data.results)

            })
            .catch(err => {
                console.log(err);
            })

        setQuery("")
    }


    return (
        <>
            <AppHeader query={query} onHandleClick={handleClick} onHandleInput={handleInput} />
            {/* visualizzare i risultati */}
            <AppMain movies={movies} tvShows={tvShows} ></AppMain>
        </>
    )
}