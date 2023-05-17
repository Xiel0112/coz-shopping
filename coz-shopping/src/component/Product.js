import bookmarkOff from "../icon/북마크 아이콘 - off.png";
import "../component/Product.css";

function Product({ img, title, discountPercentage, price }) {
  return (
    <div>
      <div>
        <img className="product" src={img} alt="product" />
        <img src={bookmarkOff} alt="bookmark" />
      </div>
      <div>
        <div>
          <span>{title}</span>
          <span>{discountPercentage}%</span>
        </div>
        <div>
          <span></span>
          <span>{price}원</span>
        </div>
      </div>
    </div>
  );
}

export default Product;
