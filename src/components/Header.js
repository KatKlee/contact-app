import { Link } from "react-router-dom"

const Header = () => {
    return (
        <header className="headerBackTo">
            <article className="containerHeadlineAndButton">
                <p className="headline">Details</p>
                <Link to='/'>Zurück zu Kontakten</Link>
            </article>
        </header>
    )
}

export default Header