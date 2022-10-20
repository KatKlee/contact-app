import KontaktShort from "./KontaktShort"
import { Link } from "react-router-dom"

const Kontaktliste = () => {
    return (
        <section className="contactListLinks">
            <Link to='/kontaktdetails'><KontaktShort /></Link>
            <Link to='/kontaktdetails'><KontaktShort /></Link>
            <Link to='/kontaktdetails'><KontaktShort /></Link>
        </section>
    )
}

export default Kontaktliste