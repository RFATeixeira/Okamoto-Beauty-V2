import React from 'react';

import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface DeleteButtonProps {
  onClick: () => void; // Adiciona a tipagem para a prop onClick
}

const DeleteButton: React.FC<DeleteButtonProps> = ({ onClick }) => {
  return (
    <button className="w-12 h-12 rounded-xl flex justify-center items-center bg-brand-pink text-white">
      <FontAwesomeIcon icon={faTrash} />
    </button>
  );
};

export default DeleteButton;
