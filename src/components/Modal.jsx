import React from 'react';

const ReusableModal = ({ 
  isOpen, 
  onClose, 
  title, 
  children,  
}) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center w-[50rem] h-[30rem] bg-opacity-50"
      role="dialog"
      aria-modal="true"
      aria-hidden={!isOpen}
    >
      <div className="relative p-4 w-full max-w-4xl max-h-full bg-white rounded-lg shadow bg-[#FEF9F2]">
        {/* Modal Header */}
        <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
          <h3 className="text-xl poppins-semibold text-gray-900 ">{title}</h3>
          <button 
            type="button" 
            className="text-red-600 bg-transparent hover:bg-red-200 hover:text-red-400 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-red-600 dark:hover:text-white"
            onClick={onClose}
          >
            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1l6 6m0 0l6 6M7 7l6-6M7 7l-6 6"/>
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
        </div>
        
        {/* Modal Body */}
        <div className="p-4 md:p-5 space-y-4">
          {children}
        </div>
        
        {/* Modal Footer */}
        
      </div>
    </div>
  );
};

export default ReusableModal;
