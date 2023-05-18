function FilterBtn({ type, title, setSelectedType }) {
  const handleselectedType = () => setSelectedType(type);

  return (
    <div onClick={handleselectedType}>
      <img src="!!:" alt="카테고리" />
      <div>{title}</div>
    </div>
  );
}

export default FilterBtn;
