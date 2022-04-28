import React from 'react';
import './styles.css'

/**
 * Display modal and prevent scrolling
 */
export const toggleModal = () => {
  const modalContainer = document.querySelector(".modal-container")
  document.body.classList.toggle("no-scroll")
  modalContainer.classList.toggle("hidden")
}

/**
 * Modal component
 * @param {String} props - Modal message
 */
const Modal = ({ message }) => {
  return (
    <div className='modal-container hidden'>
      <div className='modal'>
        <div className='modal-message'>
          {message}
            <span className='modal-close-btn' onClick={(e) => toggleModal()}>X</span>
        </div>
      </div>
    </div>
  );
};

export default Modal;