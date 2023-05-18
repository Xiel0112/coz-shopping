import bookmarkOff from "../icon/북마크 아이콘 - off.png";
import "../component/Product.css";

function Product({
  type,
  title,
  sub_title,
  brand_name,
  price,
  discountPercentage,
  image_url,
  brand_image_url,
  follower,
}) {
  return (
    <div>
      <div>
        <img className="product" src={type === "Brand" ? brand_image_url : image_url} alt={title} />
        <img src={bookmarkOff} alt="bookmark" />
      </div>
      <div>
        <div>
          <span>{type === "Brand" ? brand_name : title}</span>
          <span>{type === "Product" ? `${discountPercentage}%` : null}</span>
        </div>
        <div>
          <span>{type === "Exhibition" ? sub_title : null}</span>
          <span>
            {type === "Brand" && follower}
            {type === "Product" && `${price}원`}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Product;
