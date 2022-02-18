import {
  Routes,
  Route,
  BrowserRouter as Router,
  BrowserRouter,
} from "react-router-dom";
import "./App.css";
import Header from "./components/Organisms/Header/Header";
import AuthPage from "./components/Pages/Auth/AuthPage";
import Contact from "./components/Pages/Contact/ContactPage";
import HomePage from "./components/Pages/HomePage/HomePage";
import ShopPage from "./components/Pages/Shop/ShopPage";
import ItemDetail from "./components/Pages/Item/ItemDetail";
import Category from "./components/Pages/Category/Category";
import ShopCart from "./components/Pages/ShopCart/ShopCart";

function App(): JSX.Element {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/cart" element={<ShopCart />} />
        <Route path="/signin" element={<AuthPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/itemDetail/:itemId" element={<ItemDetail />} />
        <Route path="/category/:categoryName" element={<Category />} />
      </Routes>
    </Router>
  );
}

export default App;
