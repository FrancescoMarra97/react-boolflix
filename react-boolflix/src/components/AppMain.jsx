import Card from "./Card"


export default function AppMain({ movies, tvShows }) {

    return (
        <>
            <main>
                <Card movies={movies} tvShows={tvShows} ></Card>
            </main>
        </>
    )
}
