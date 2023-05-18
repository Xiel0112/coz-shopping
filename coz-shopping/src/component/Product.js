import bookmarkOff from "../icon/북마크 아이콘 - off.png";
import "../component/Product.css";

function Product({
  handleOpenModal,
  product: {
    type,
    title,
    sub_title,
    brand_name,
    price,
    discountPercentage,
    image_url,
    brand_image_url,
    follower,
  },
}) {
  return (
    <div className="products">
      <div className="product">
        <div className="product__img" onClick={handleOpenModal}>
          <img
            className="img-product"
            src={type === "Brand" ? brand_image_url : image_url}
            alt={title}
          />
          <img className="img-bookmark" src={bookmarkOff} alt="bookmark" />
        </div>
        <div className="product-info">
          <span className="product-name">{type === "Brand" ? brand_name : title}</span>
          <span className="product-disconutrate">
            {type === "Product" ? `${discountPercentage}%` : null}
          </span>
        </div>
        <div className="product-info">
          <span className="product-detail">{type === "Exhibition" ? sub_title : null}</span>
          <span className="product-priceFollower">
            {type === "Brand" && follower}
            {type === "Product" && `${price}원`}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Product;
