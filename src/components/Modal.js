import { useEffect } from 'react';
import ReactDOM from 'react-dom';
function Modal({ onClose, children, actionBar }) {
  useEffect(() => {
    document.body.classList.add('overflow-hidden');

    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, []);
  return ReactDOM.createPortal(
    <div className='border border-red-500 border-4'>
      <div
        // onClick={onClose}
        className="fixed inset-0 bg-gray-300 opacity-80"
      ></div>
      <div className="fixed inset-0 m-auto p-10 max-w-md max-h-1/3 bg-white h-2/3 flex flex-col justify-around border border-indigo-500 border-4">
        <div className="flex flex-col justify-between">
          {children}
        </div>
          <div className="flex justify-center">{actionBar}</div>
      </div>
    </div>,
    document.querySelector('.modal-container')
  );
}

export default Modal;
