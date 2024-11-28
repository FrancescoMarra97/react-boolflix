import { useState } from "react"


export default function SearchBar() {
    //definiamo lo stato dell'input

    const [query, setQuery] = useState("")    //stato per memorizzare la query
    const [movies, SetMovies] = useState([])    //stato per memorizzare i film cercati


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

    }
    return (
        <>
            <div>
                <input
                    type="search"
                    name=""
                    value={query}
                    placeholder="Cerca un Film"
                    onChange={handleInput}
                />
                <button onClick={handleClick}>Cerca</button>
            </div>
            {/* visualizzare i risultati */}
            <div>
                {movies && (
                    <ul>
                        {movies.map((movie) => (
                            <li key={movie.id}>
                                <h3>{movie.title}</h3>
                                <p><strong>Titolo Originale:</strong>{movie.original_title}</p>
                                <p><strong>Lingua:</strong>{movie.original_language}</p>
                                <p><strong>Voto:</strong>{movie.vote_average}</p>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </>
    )
}