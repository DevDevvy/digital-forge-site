import { useRef } from "react";
import "./ModalOverlay.css";
import ReactDOM from "react-dom";
const ModalOverlay = ({ children, onClose, showCloseButton }) => {
  const modalContentRef = useRef(null);

  const handleOverlayClick = (event) => {
    if (
      modalContentRef.current &&
      !modalContentRef.current.contains(event.target)
    ) {
      onClose(); // Close the modal if clicking outside the modal content
    }
  };

  return ReactDOM.createPortal(
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-content" ref={modalContentRef}>
        <button onClick={onClose} className="close-button">
          &#10005;
        </button>
        {children}
      </div>
    </div>,
    document.getElementById("modal-root")
  );
};

export default ModalOverlay;
