import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Header from "./components/Organisms/Header/Header";
import AuthPage from "./components/Pages/Auth/AuthPage";
import HomePage from "./components/Pages/HomePage/HomePage";
import ShopPage from "./components/Pages/Shop/ShopPage";

function App(): JSX.Element {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={HomePage()} />
        <Route path="/shop" element={ShopPage()} />
        <Route path="/signin" element={AuthPage()} />
      </Routes>
    </Router>
  );
}

export default App;
