import Search from "./Search"


export default function AppHeader({ query, onHandleClick, onHandleInput }) {

    return (
        <>
            <header>
                <div className="d-flex justify-content-between" >
                    <a href="/">  <img src="/img/logoBoolflix.png" /></a>
                    <Search onHandleClick={onHandleClick} onHandleInput={onHandleInput} query={query}></Search>
                </div>
            </header >


        </>
    )
}

