// import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import SignUpForm from './SignUpForm';
import Login from './login';
import Home from './home';
import Cart from "./cart";
import Payment from "./payment";
import About from "./About"
import Support from "./support";

// import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Signup" element={<SignUpForm />} />
          <Route path="/home" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/About" element={<About />} />
          <Route path="/Support" element={<Support />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
