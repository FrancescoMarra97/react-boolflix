import { useState } from "react"


export default function SearchBar() {
    //definiamo lo stato dell'input

    const [query, setQuery] = useState("")

    function handleInput(e) {
        console.log(e);
        setQuery(e.target.value)
    }

    function handleClick() {
        console.log(`stai cercando ${query}`);
        //in questa funzione fare la chiamata ajax per cercare i film
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
        </>
    )
}