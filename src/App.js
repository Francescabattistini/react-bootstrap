import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import CustomNavbar from "./componets/CustomNavbar";
import { CustomFooter } from "./componets/CustumFooter";
import { Welcome } from "./componets/Welcome";
import { AllTheBooks } from "./componets/AllTheBooks";
import "./App.css";

function App() {
  return (
    <>
      <header>
        <CustomNavbar />
      </header>
      <div>
        <AllTheBooks />
      </div>
      <div>
        <Welcome />
      </div>
      <footer>
        <CustomFooter />
      </footer>
    </>
  );
}

export default App;
