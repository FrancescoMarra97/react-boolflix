import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import ReactCountryFlag from "react-country-flag"

export default function Card() {
    const BASE_IMAGE_URL = "https://image.tmdb.org/t/p/w342";
    const { movies, tvShows } = useContext(GlobalContext);
    function star(num) {
        const newNum = Math.ceil(num / 2)
        if (newNum == 0) {
            return ''
        } else if (newNum == 1) {
            return '🌟'
        } else if (newNum == 2) {
            return '🌟🌟'
        } else if (newNum == 3) {
            return '🌟🌟🌟'
        } else if (newNum == 4) {
            return '🌟🌟🌟🌟'
        } else if (newNum == 5) {
            return '🌟🌟🌟🌟🌟'
        }
    }


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
                                    <p className="card-text"><strong>Voto:</strong>{star(movie.vote_average)}</p>
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
                                    <p className="card-text"><strong>Voto:</strong> {star(tvShow.vote_average)}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </>
    )

}