import "./App.css";
import Main from "./page/Main";
import ProductList from "./page/ProductList";
import Bookmark from "./page/Bookmark";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ProductProvider } from "./context/ProuductProvider";
import { BookmarkProvider } from "./context/BookmarkProvider";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <BookmarkProvider>
            <ProductProvider>
              <Route path="/" element={<Main />} />
              <Route path="/products/list" element={<ProductList />} />
            </ProductProvider>
            <Route path="/bookmark" element={<Bookmark />} />
          </BookmarkProvider>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
