import { Link } from "react-router-dom"

const InputNeuerKontakt = () => {
    return (
        <>
            <header className="mainPageHeader">
                <section className="containerHeadlineAndButton">
                    <p className="headline">Neuer Kontakt</p>
                    <Link to='/' className="cancelBackLink">x</Link>
                </section>
                <button className="addButton">Hinzufügen</button>
            </header>
            <hr />
            <main className="containerInput">
                <input type="file" name="" id="" />
                <input type="text" name="firstname" id="" placeholder="Vorname" />
                <input type="text" name="lastname" id="" placeholder="Nachname" />
                <input type="number" name="" id="" placeholder="Telefon" />
                <input type="email" name="" id="" placeholder="E-Mail" />
                <input type="date" name="" id="" placeholder="Geburtstag" />
                <input type="url" name="" id="" placeholder="Website" />
            </main>
        </>
    )
}

export default InputNeuerKontakt