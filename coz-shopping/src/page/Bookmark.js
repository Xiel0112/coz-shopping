import { useContext, useState } from "react";
import FilterBtn from "../component/FilterBtn";
import Footer from "../component/Footer";
import Header from "../component/Header";
import Product from "../component/Product";
import "./List.css";
import { BookmarkContext } from "../context/BookmarkProvider";

const typeFilter = [
  { id: 0, type: "All", title: "전체" },
  { id: 1, type: "Product", title: "상품" },
  { id: 2, type: "Category", title: "카테고리" },
  { id: 3, type: "Exhibition", title: "기획전" },
  { id: 4, type: "Brand", title: "브랜드" },
];

function ProductList() {
  const { bookmarkArr } = useContext(BookmarkContext);

  const [selectedType, setSelectedType] = useState("All");

  const filterBookmark =
    selectedType === "All"
      ? bookmarkArr
      : bookmarkArr.filter((product) => product.type === selectedType);

  return (
    <div className="productsList">
      <Header />
      <main className="productsList__content">
        <div className="content__fillter-type">
          {typeFilter.map((type, id) => (
            <FilterBtn
              key={id}
              type={type.type}
              title={type.title}
              setSelectedType={setSelectedType}
            />
          ))}
        </div>
        <div className="content__list">
          {filterBookmark.map((product, id) => (
            <Product key={id} product={product} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default ProductList;
