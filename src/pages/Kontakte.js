import Kontaktliste from "../components/Kontaktliste";
import { Link } from 'react-router-dom'
import Searchbar from "../components/Searchbar";
import Footer from "../components/Footer";

function Kontakte() {
  return (
    <>
      <header className="mainPageHeader">
        <article className="containerHeadlineAndButton">
          <p className="headline">Kontakte</p>
          <Link className="addContactLink" to='/neuer-kontakt'>+</Link>
        </article>
        <Searchbar />
      </header>
      <hr />
      <main>
        <Kontaktliste />
      </main>
      <hr />
      <Footer />
    </>
  )
}

export default Kontakte;
