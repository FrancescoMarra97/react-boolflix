

export default function Search({ query, onHandleClick, onHandleInput }) {




    return (
        <>
            <div className="d-flex align-items-center">
                <form>
                    <input
                        type="search"
                        name=""
                        value={query}
                        placeholder="Cerca un Film o una Serie Tv"
                        onChange={onHandleInput}
                    />
                    <button onClick={onHandleClick}>Cerca</button>
                </form>
            </div>
        </>
    )
}