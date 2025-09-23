import "./App.css";
import { BrowserRouter as MainRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/nav";
import FooterBar from "./components/footer";
import HomePage from "./pages/home";
import MealPage from "./pages/findMeal";
import FoodInfoPage from "./pages/info";
import Search from "./components/search";

//Test : tung tung tung sahur
function App() {
  return (
    <MainRouter>
      <NavBar />
      <div className="search-bar" id="text-box" style={{ display: "none" }}>
        <Search />
      </div>
      <Routes>
        <Route path="/SKIBIDI" element="tnugngutnguntungutng"/>
        <Route path="/" element={<HomePage />} />
        <Route path="/info" element={<FoodInfoPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/meals" element={<MealPage />} />
        {/* <Route path="/search" element={<Search />} /> */}
      </Routes>
      <FooterBar />
    </MainRouter>
  );
}

export default App;
