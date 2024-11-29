import ReactCountryFlag from "react-country-flag"



export default function Card({ movies, tvShows }) {
    const BASE_IMAGE_URL = "https://image.tmdb.org/t/p/w342";

    return (
        <>
            <div className="container">
                <div className="row gy-4">
                    {movies && movies.map((movie) => (
                        <div className="col-12 col-md-6 col-lg-3" key={movie.id}>
                            <div className="card h-100">
                                <img
                                    src={`${BASE_IMAGE_URL}${movie.poster_path}`}
                                    className="card-img-top"
                                    alt={movie.title}
                                />
                                <div className="card-body">
                                    <h5 className="card-title">{movie.title}
                                        <span className="badge rounded-pill text-bg-primary ms-2">Film</span>
                                    </h5>
                                    <p className="card-text"><strong>Titolo Originale:</strong> {movie.original_title}</p>
                                    <p className="card-text">
                                        <strong>Lingua:</strong>
                                        <ReactCountryFlag
                                            countryCode={movie.original_language.toUpperCase()}
                                            style={{ width: 30, height: 20, marginLeft: 5 }}
                                        />
                                    </p>
                                    <p className="card-text"><strong>Voto:</strong>{movie.vote_average}</p>
                                </div>
                            </div>
                        </div>
                    ))}



                    {tvShows && tvShows.map((tvShow) => (
                        <div className="col-12 col-md-6 col-lg-3" key={tvShow.id}>
                            <div className="card h-100">
                                <img
                                    src={`${BASE_IMAGE_URL}${tvShow.poster_path}`}
                                    className="card-img-top"
                                    alt={tvShow.name}
                                />
                                <div className="card-body">
                                    <h5 className="card-title">{tvShow.name}
                                        <span className="badge rounded-pill text-bg-success ms-2">Serie TV</span>
                                    </h5>
                                    <p className="card-text"><strong>Titolo Originale:</strong> {tvShow.original_name}</p>
                                    <p className="card-text">
                                        <strong>Lingua:</strong>
                                        <ReactCountryFlag
                                            countryCode={tvShow.original_language.toUpperCase()}
                                            style={{ width: 30, height: 20, marginLeft: 5 }}
                                        />
                                    </p>
                                    <p className="card-text"><strong>Voto:</strong> {tvShow.vote_average}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </>
    )

}