import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <footer className="footer">
            <Link>Favoriten</Link>
            <Link>Anrufliste</Link>
            <Link to="/">Kontakte</Link>
        </footer>
    )
}

export default Footer