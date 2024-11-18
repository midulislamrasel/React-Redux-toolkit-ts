// "use client";

// import React from "react";

// interface DeleteConfirmationPopupProps {
//     onConfirm: () => void; // Action when the user confirms the delete
//     onCancel: () => void; // Action when the user cancels the delete
//     message?: string; // Optional custom message
// }

// const DeleteConfirmationPopup: React.FC<DeleteConfirmationPopupProps> = ({
//     onConfirm,
//     onCancel,
//     message = "Are you sure you want to delete this item?",
// }) => {
//     return (
//         <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
//             <div className="bg-white p-6 rounded shadow-lg text-center">
//                 <p className="text-lg mb-4">{message}</p>
//                 <div className="flex justify-center space-x-4">
//                     <button
//                         onClick={onConfirm}
//                         className="bg-red-500 text-white px-4 py-2 rounded"
//                     >
//                         Delete
//                     </button>
//                     <button
//                         onClick={onCancel}
//                         className="bg-gray-300 px-4 py-2 rounded"
//                     >
//                         Cancel
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default DeleteConfirmationPopup;
