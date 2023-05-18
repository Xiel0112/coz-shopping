import FilterBtn from "../component/FilterBtn";
import Footer from "../component/Footer";
import Header from "../component/Header";
import Product from "../component/Product";

function Bookmark() {
  return (
    <div>
      <Header />
      <main>
        <div>
          <FilterBtn />
        </div>
        <div>
          <Product />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Bookmark;
