// ??: setModal은 어디서 전달된 것인가...

function Modal({ setModal }) {
  const handleCloseModal = () => {
    setModal(false);
  };

  return (
    <div>
      <img src="" alt="상품" />
      <img src="" alt="닫기" onClick={handleCloseModal} />
    </div>
  );
}

export default Modal;
