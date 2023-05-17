import Classification from "../component/Classification";
import Footer from "../component/Footer";
import Header from "../component/Header";
import Product from "../component/Product";

const Bookmark = () => {
  return (
    <div>
      <Header />
      <main>
        <div>
          <Classification />
        </div>
        <div>
          <Product />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Bookmark;
