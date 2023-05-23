function Modal({ setModal, img }) {
  const handleCloseModal = () => {
    setModal(false);
  };

  return (
    <div>
      <img src={img} alt="상품" />
      <img src="!!:" alt="닫기" onClick={handleCloseModal} />
    </div>
  );
}

export default Modal;
