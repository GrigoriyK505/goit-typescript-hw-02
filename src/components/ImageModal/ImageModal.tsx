import Modal from "react-modal";
import s from "./ImageModal.module.css";

Modal.setAppElement("#root");

type ImageModalprops = {
  modalIsOpen: boolean;
  targetImage: string | null;
  closeModal: () => void;
}

const ImageModal: React.FC<ImageModalprops> = ({ modalIsOpen, closeModal, targetImage }) => {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      contentLabel="Modal opened"
      className={s.Modal}
      overlayClassName={s.Overlay}
    >
      <div className={s.modalContent}>
        {targetImage && <img src={targetImage} alt="Large view" className={s.modalImage} />}
      </div>
    </Modal>
  );
};

export default ImageModal;
