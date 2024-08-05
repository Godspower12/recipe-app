// components/Modal.tsx

import React, { ReactNode } from "react";

interface ModalProps {
  isVisible: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isVisible, onClose, children }) => {
  if (!isVisible) return null;

  const handleContentClick = (e: any) => {
    e.stopPropagation();
  };
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" onClick={handleContentClick}>
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <div className="modal-content">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
