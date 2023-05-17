import { useState } from "react";

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
