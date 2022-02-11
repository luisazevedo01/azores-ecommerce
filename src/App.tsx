import { Routes, Route, BrowserRouter as Router, BrowserRouter } from "react-router-dom";
import "./App.css";
import Header from "./components/Organisms/Header/Header";
import AuthPage from "./components/Pages/Auth/AuthPage";
import Contact from "./components/Pages/Contact/ContactPage";
import HomePage from "./components/Pages/HomePage/HomePage";
import ShopPage from "./components/Pages/Shop/ShopPage";
import ItemDetail from "./components/Pages/Item/ItemDetail";

function App(): JSX.Element {

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/shop" element={<ShopPage/>} />
        <Route path="/signin" element={<AuthPage/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/itemDetail/:itemId" element={<ItemDetail/>}/>
      </Routes>
    </Router>
  );
}

export default App;
