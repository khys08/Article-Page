import { BrowserRouter, Routes, Route,Link } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./Pages/Home";
import Login from "./Pages/Login";
function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          
          <Routes>
          <Route exact path='/' element={< Login />}></Route>  
            <Route path="/home/" element={<Home />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
