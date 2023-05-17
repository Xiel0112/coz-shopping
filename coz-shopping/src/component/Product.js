import bookmarkOff from "../icon/북마크 아이콘 - off.png";
import "../component/Product.css";

function Product() {
  return (
    <div>
      <div>
        <img
          className="product"
          src="https://images.unsplash.com/photo-1626497764746-6dc36546b388?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1326&q=80"
          alt="product"
        />
        <img src={bookmarkOff} alt="bookmark" />
      </div>
      <div>
        <div>
          <div>상품명/브랜드명</div>
          <div>할인률</div>
        </div>
        <div>
          <div>부가 설명</div>
          <div> 가격/구독자</div>
        </div>
      </div>
    </div>
  );
}

export default Product;
