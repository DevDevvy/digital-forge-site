import "./ModalOverlay.css";
import ReactDOM from "react-dom";
const ModalOverlay = ({ children, onClose, showCloseButton }) => {
  return ReactDOM.createPortal(
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="close-div">
          {showCloseButton && (
            <button className="close-button" onClick={onClose}>
              X
            </button>
          )}
        </div>
        <div className="overlay" onClick={onClose}></div>
        {children}
      </div>
    </div>,
    document.getElementById("modal-root")
  );
};

export default ModalOverlay;
