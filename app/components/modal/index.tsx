import ModalContent from "./modalContent";

const Modal = () => {
  return (
    <div className="absolute inset-0 bg-black/50 backdrop-blur-sm z-10">
      <ModalContent />
    </div>
  );
};

export default Modal;
