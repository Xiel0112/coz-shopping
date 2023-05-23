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
      <div className="dropdown">
        <div className="dropdown-welcome">
          <div>○○○님, 안녕하세요!</div>
        </div>
        <Link className="dropdown-list" to={"/products/list"}>
          <img className="productList-icon" src={product} alt="상품" />
          상품 리스트
        </Link>
        <Link className="dropdown-list" to={"/products/list"}>
          <img className="bookmark-icon" src={bookmark} alt="북마크" />
          북마크
        </Link>
      </div>
    );
  };

  return (
    <div className="header">
      <div className="header__logo">
        <Link to={"/"}>
          <img className="logo-img" src={logo} alt="로고" />
        </Link>
        <Link className="logo-storeName" to={"/"} style={{ textDecoration: "none" }}>
          <div>COZ Shopping</div>
        </Link>
      </div>
      <img className="header__menu" src={menu} alt="메뉴" onClick={handleDropDown} />
      {dropdown && <Dropdown />}
    </div>
  );
}

export default Header;
