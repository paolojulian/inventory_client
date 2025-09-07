import { useEffect, useRef, useState } from 'react';

type Props = {
  onResetForm: () => void;
};

export const useAddEditProductsActions = ({ onResetForm }: Props) => {
  // Feat: Modal visibility controller
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  // Feat: Auto select name input when the modal is open
  const nameInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isModalOpen && nameInputRef.current) {
      nameInputRef.current.focus();
    }
    onResetForm();
  }, [isModalOpen]);

  return {
    nameInputRef,
    isModalOpen,
    handleOpenModal,
    handleCloseModal,
  };
};
