import Modal from "react-modal";
import s from "./ImageModal.module.css";

Modal.setAppElement("#root");

const ImageModal = ({ modalIsOpen, closeModal, targetImage }) => {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      contentLabel="Modal opened"
      className={s.Modal}
      overlayClassName={s.Overlay}
    >
      <div className={s.modalContent}>
        <img src={targetImage} alt="Large view" className={s.modalImage} />
      </div>
    </Modal>
  );
};

export default ImageModal;
