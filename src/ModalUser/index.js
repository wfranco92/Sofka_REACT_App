import React from 'react';
import ReactDOM from 'react-dom';
import './ModalUser.css';

function ModalUser({ children }) {
  return ReactDOM.createPortal(
    <div className="ModalBackground">
      {children}
    </div>,
    document.getElementById('modal')
  );
}

export { ModalUser };
