import bookmarkOff from "../icon/북마크 아이콘 - off.png";

function ProductExhibition({ img, title, sub_title }) {
  return (
    <div>
      <div>
        <img className="product" src={img} alt="product" />
        <img src={bookmarkOff} alt="bookmark" />
      </div>
      <div>
        <div>
          <span>{title}</span>
          <span></span>
        </div>
        <div>
          <span>{title}</span>
          <span>{sub_title}</span>
        </div>
      </div>
    </div>
  );
}

export default ProductExhibition;
