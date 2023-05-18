import logo from "../icon/로고.png";
import menu from "../icon/아이콘.png";
import product from "../icon/상품 아이콘.png";
import bookmark from "../icon/북마크 아이콘.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import "../component/Header.css";

function Header() {
  const [dropdown, setDropdown] = useState(false);

  const handleDropDown = () => setDropdown(!dropdown);

  const Dropdown = () => {
    return (
      <div className="modal">
        <div className="modal-welcome">○○○님, 안녕하세요!</div>
        <Link className="modal__productList" to={"/products/list"}>
          <img className="productList-icon" src={product} alt="상품" />
          <div className="productList-text">상품 리스트</div>
        </Link>
        <Link className="modal__bookmark" to={"/products/list"}>
          <img className="bookmark-icon" src={bookmark} alt="북마크" />
          <div className="bookmark-text">북마크</div>
        </Link>
      </div>
    );
  };

  return (
    <div className="header">
      <Link className="header__logo" to={"/"}>
        <img src={logo} alt="로고" />
      </Link>
      <Link className="header_storeName" to={"/"}>
        <div>COZ Shopping</div>
      </Link>
      <img className="header__menu" src={menu} alt="메뉴" onClick={handleDropDown} />
      {dropdown && <Dropdown />}
    </div>
  );
}

export default Header;
