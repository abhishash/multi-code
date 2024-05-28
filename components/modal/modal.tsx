//@ts-nocheck
import { useState } from 'react';

const Modal = ({ show, onClose }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-1/3">
        <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-xl font-semibold">Modal Title</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            &times;
          </button>
        </div>
        <div className="p-6">
          <p className="text-gray-700">This is a modal content.</p>
        </div>
        <div className="px-6 py-4 border-t border-gray-200 text-right">
          <button onClick={onClose} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
