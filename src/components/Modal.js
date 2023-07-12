import { useEffect } from 'react';
import ReactDOM from 'react-dom';
function Modal({ children, actionBar }) {
  useEffect(() => {
    document.body.classList.add('overflow-hidden');

    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, []);
  return ReactDOM.createPortal(
    <div>
      <div className="fixed inset-0 bg-[#2F2F2F] opacity-80"></div>
      <div className="fixed inset-0 m-auto p-10 max-w-md max-h-1/3 bg-[#2F2F2F] h-2/3 flex flex-col justify-around border border-[#DAD2D8] border-4 text-[#DAD2D8] ">
        <div className="flex flex-col justify-between">{children}</div>
        <div className="flex justify-center">{actionBar}</div>
      </div>
    </div>,
    document.querySelector('.modal-container')
  );
}

export default Modal;
