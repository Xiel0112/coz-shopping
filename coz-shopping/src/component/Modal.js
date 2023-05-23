import "./Modal.css";
import Vector from "../icon/Vector.png";

function Modal({ setModal, img }) {
  const handleCloseModal = () => {
    setModal(false);
  };

  return (
    <div className="modal">
      <img className="modal__img" src={img} alt="상품" />
      <img className="modal__close" src={Vector} alt="닫기" onClick={handleCloseModal} />
    </div>
  );
}

export default Modal;
