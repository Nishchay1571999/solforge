import { useLocation } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Pages from "./pages";


function App() {

  return (
    <div className="container">
      <Pages />
    </div>
  );
}

export default App;
