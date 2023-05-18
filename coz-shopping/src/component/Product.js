import bookmarkOff from "../icon/북마크 아이콘 - off.png";
import "../component/Product.css";
import Modal from "./Modal";

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
  handleOpenModal,
  modal,
}) {
  return (
    <div onClick={handleOpenModal}>
      <div>
        <img
          className="product"
          src={type === "Brand" ? brand_image_url : image_url}
          alt="product"
        />
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
      {modal && <Modal />}
    </div>
  );
}

export default Product;
