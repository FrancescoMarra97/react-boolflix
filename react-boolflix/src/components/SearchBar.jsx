import { useState } from "react"
import ReactCountryFlag from "react-country-flag"
import Search from "./Search"
import AppHeader from "./AppHeader"
import Card from "./Card"
import AppMain from "./AppMain"

export default function SearchBar() {
    //definiamo lo stato dell'input

    const [query, setQuery] = useState("")    //stato per memorizzare la query
    const [movies, SetMovies] = useState([])    //stato per memorizzare i film cercati
    const [tvShows, setTvShows] = useState([]);  // Stato per memorizzare le serie TV

    function handleInput(e) {
        console.log(e);
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
            {/* <div className="container ">
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-4">
                        {movies && (
                            <ul>
                                {movies.map((movie) => (
                                    <li key={movie.id}>
                                        <h3>{movie.title} <span style={{ color: "blue" }}>(Film)</span></h3>
                                        <p><strong>Titolo Originale: </strong>{movie.original_title}</p>
                                        <p><strong>Lingua: </strong>
                                            <ReactCountryFlag countryCode={movie.original_language.toUpperCase()} style={{ width: 30, height: 20 }} />
                                        </p>
                                        <p><strong>Voto: </strong>{movie.vote_average}</p>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        {tvShows && (
                            <ul>
                                {tvShows.map((tvShow) => (
                                    <li key={tvShow.id}>
                                        <h3>{tvShow.name}  <span style={{ color: "green" }}>(Serie TV)</span></h3>
                                        <p><strong>Titolo Originale: </strong>{tvShow.original_name}</p>
                                        <p><strong>Lingua: </strong>{tvShow.original_language}</p>
                                        <p><strong>Voto: </strong>{tvShow.vote_average}</p>
                                    </li>

                                )
                                )}
                            </ul>
                        )}
                    </div>
                </div>
            </div> */}
            <AppMain movies={movies} tvShows={tvShows}></AppMain>
        </>
    )
}