import { useEffect, useRef, useState } from 'react';

export const useAddProductsActions = () => {
  const nameInputRef = useRef<HTMLInputElement>(null);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  useEffect(() => {
    if (isModalOpen && nameInputRef.current) {
      nameInputRef.current.focus();
    }
  }, [isModalOpen]);

  return {
    nameInputRef,
    isModalOpen,
    handleOpenModal,
    handleCloseModal,
  };
};
