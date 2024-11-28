import Search from "./Search"


export default function AppHeader({ query, onHandleClick, onHandleInput }) {

    return (
        <>
            <header>
                <div className="d-flex justify-content-between" >
                    <img src="./public/img/logoBoolflix.png" />
                    <Search onHandleClick={onHandleClick} onHandleInput={onHandleInput} query={query}></Search>
                </div>
            </header >


        </>
    )
}

