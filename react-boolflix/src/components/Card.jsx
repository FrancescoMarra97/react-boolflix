import ReactCountryFlag from "react-country-flag"



export default function Card({ movies, tvShows }) {

    return (
        <>
            <div className="container">
                <div className="d-flex row">
                    <div className="col-12 col-md-6 col-lg-4">
                        {movies && (
                            <div>
                                <ul>
                                    {movies.map((movie) => (
                                        <li key={movie.id}>
                                            <h3>{movie.title} <span className="badge rounded-pill text-bg-primary" >Film</span></h3>
                                            <p><strong>Titolo Originale: </strong>{movie.original_title}</p>
                                            <p><strong>Lingua: </strong>
                                                <ReactCountryFlag countryCode={movie.original_language.toUpperCase()} style={{ width: 30, height: 20 }} />
                                            </p>
                                            <p><strong>Voto: </strong>{movie.vote_average}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        {tvShows && (
                            <div>
                                <ul>
                                    {tvShows.map((tvShow) => (
                                        <li key={tvShow.id}>
                                            <h3>{tvShow.name}  <span className="badge rounded-pill text-bg-success">Serie TV</span></h3>
                                            <p><strong>Titolo Originale: </strong>{tvShow.original_name}</p>
                                            <p><strong>Lingua: </strong>
                                                <ReactCountryFlag countryCode={tvShow.original_language.toUpperCase()} style={{ width: 30, height: 20 }} />
                                            </p>
                                            <p><strong>Voto: </strong>{tvShow.vote_average}</p>
                                        </li>

                                    )
                                    )}
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    )

}