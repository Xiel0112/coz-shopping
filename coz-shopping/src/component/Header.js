import logo from "../icon/로고.png";
import menu from "../icon/아이콘.png";
import product from "../icon/상품 아이콘.png";
import bookmark from "../icon/북마크 아이콘.png";
import { Link } from "react-router-dom";
import { useState } from "react";

function Header() {
  const [dropdown, setDropdown] = useState(false);

  const handleDropDown = () => setDropdown(!dropdown);

  const Dropdown = () => {
    return (
      <div>
        <div>○○○님, 안녕하세요!</div>
        <div>
          <Link to={"/products/list"}>
            <img src={product} alt="상품" />
            <div> 상품 리스트</div>
          </Link>
          <Link to={"/products/list"}>
            <img src={bookmark} alt="북마크" />
            <div> 북마크</div>
          </Link>
        </div>
      </div>
    );
  };

  return (
    <div className="header">
      <div>
        <Link to={"/"}>
          <img src={logo} alt="로고" />
        </Link>
        <Link to={"/"}>
          <div>COZ Shopping</div>
        </Link>
      </div>
      <img src={menu} alt="메뉴" onClick={handleDropDown} />
      {dropdown && <Dropdown />}
    </div>
  );
}

export default Header;
