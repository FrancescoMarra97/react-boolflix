import { FaSearch } from "react-icons/fa";



export default function Search({ query, onHandleClick, onHandleInput }) {




    return (
        <>
            <div className="d-flex align-items-center">

                <input
                    type="search"
                    name=""
                    value={query}
                    placeholder="Cerca un Film o una Serie Tv"
                    onChange={onHandleInput}

                />
                <button onClick={onHandleClick} >
                    <FaSearch />
                </button>

            </div>
        </>

    )
}
