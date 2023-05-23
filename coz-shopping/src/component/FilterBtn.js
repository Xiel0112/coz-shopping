import "../component/FilterBtn.css";

function FilterBtn({ type, title, setSelectedType, image }) {
  const handleselectedType = () => setSelectedType(type);

  return (
    <div className="type-btn" onClick={handleselectedType}>
      <img className="type-btn-img" src="!!:" alt="카테고리" />
      <div>{title}</div>
    </div>
  );
}

export default FilterBtn;
