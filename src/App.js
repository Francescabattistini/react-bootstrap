import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import CustomNavbar from "./componets/CustomNavbar";
import { CustomFooter } from "./componets/CustumFooter";
import { Welcome } from "./componets/Welcome";
/* import { AllTheBooks } from "./componets/AllTheBooks"; */
import fantasy from "./books/fantasy.json";
import { BookList } from "./componets/BookList";
import "./App.css";
import { SingleBook } from "./componets/SingleBook";

function App() {
  return (
    <>
      <header>
        <CustomNavbar />
      </header>
      <div>
        <Welcome />
      </div>
      <div>
        {/*     <AllTheBooks />  */}
        <BookList listaBook={fantasy} />
      </div>

      <footer>
        <CustomFooter />
      </footer>
    </>
  );
}

export default App;
