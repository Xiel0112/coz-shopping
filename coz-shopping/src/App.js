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
        <Routes>
          <Route
            path="/"
            element={
              <ProductsProvider>
                <BookmarkProvider>
                  <Main />
                </BookmarkProvider>
              </ProductsProvider>
            }
          />
          <Route
            path="/products/list"
            element={
              <ProductsProvider>
                <BookmarkProvider>
                  <ProductList />
                </BookmarkProvider>
              </ProductsProvider>
            }
          />
          <Route
            path="/bookmark"
            element={
              <BookmarkProvider>
                <Bookmark />
              </BookmarkProvider>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
