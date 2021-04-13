// Reused Modal
import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import './Modal.scss';

const reusedModalRoot = document.querySelector('#modal-root');

export default function Modal({ children, onClose }) {
  // Close by ESC (addEventListener keydown)
  useEffect(() => {
    window.addEventListener('keydown', e => {
      e.code === 'Escape' && onClose();
    });
  }, [onClose]);

  // removeEventListener keydown
  // const componentWillUnmount() {
  //   window.removeEventListener('keydown', handleKeyDown);
  // }

  // Close by Backdrop
  const handleBackdropClick = e => {
    e.currentTarget === e.target && onClose();
  };

  return createPortal(
    <div className="Modal__backdrop" onClick={handleBackdropClick}>
      <div className="Modal__content">{children}</div>
    </div>,
    reusedModalRoot,
  );
}
