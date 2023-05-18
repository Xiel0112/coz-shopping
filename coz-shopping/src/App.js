import "./App.css";
import Main from "./page/Main";
import ProductList from "./page/ProductList";
import Bookmark from "./page/Bookmark";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ProductsProvider } from "./context/ProductsProvider";
import { BookmarkProvider } from "./context/BookmarkProvider";

function App() {
  return (
    <div className="App">
      <Router>
        <ProductsProvider>
          <BookmarkProvider>
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/products/list" element={<ProductList />} />
              <Route path="/bookmark" element={<Bookmark />} />
            </Routes>
          </BookmarkProvider>
        </ProductsProvider>
      </Router>
    </div>
  );
}

export default App;
