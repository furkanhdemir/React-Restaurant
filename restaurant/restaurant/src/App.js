import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Hero from "./Components/Hero";
import Cakes from "./Components/Cakes";
import Favorite from "./Components/Favorite";
import Footer from "./Components/Footer";
import Chefs from "./Components/Chefs";

function App() {
  return (
    <Router>
      <Hero id="menu"></Hero>
      <Cakes></Cakes>
      <Favorite></Favorite>
      <Chefs id="staff"></Chefs>
      <Footer></Footer>
    </Router>
  );
}

export default App;
