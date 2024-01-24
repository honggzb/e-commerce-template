
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import './App.css';
import Home from './pages/Home/Home';
import ShopALL from "./pages/shop/ShopAll";
import Shop from "./pages/shop/Shop";
import Header from "./components/header/Header";
import SigninSignup from "./pages/signin-signup/SigninSignup";
import type { RootState } from './store/store';
import CheckOut from "./pages/check-out/CheckOut";

function App() {

  const currentUser = useSelector((state: RootState) => state.userSlice.currentUser);
  const isHidden = useSelector((state: RootState) => state.cartSlice.hidden);

  return (
    <>
      <BrowserRouter>
        <Header currentUser={currentUser} hidden={isHidden} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shopall" element={<ShopALL />} />
          <Route path="/shop/:category" element={<Shop />} />
          <Route path="/signin" element={<SigninSignup />} />
          <Route path="/checkout" element={<CheckOut />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
