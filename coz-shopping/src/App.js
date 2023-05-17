import "./App.css";
import Main from "./page/Main";
import ProductList from "./page/ProductList";
import Bookmark from "./page/Bookmark";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/products/list" element={<ProductList />} />
          <Route path="/bookmark" element={<Bookmark />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
