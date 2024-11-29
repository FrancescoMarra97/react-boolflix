export default function AppFooter() {

    return (
        <>
            <footer>
                <div className="container d-flex justify-content-around align-items-center">
                    <p>&copy; {new Date().getFullYear()}</p>
                    <img src="/img/logoBoolflix.png" />
                </div>
            </footer>

        </>
    )
}
