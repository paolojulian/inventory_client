import { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';

type AddProductFormData = {
  name: string;
  sku: string;
  description: string;
  price?: number;
  status?: 'active' | 'inactive';
};

const DEFAULT_VALUES: AddProductFormData = {
  name: '',
  description: '',
  sku: '',
  price: undefined,
  status: 'active',
};

export const useAddProductsActions = () => {
  // Feat: the form
  const {
    control,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm<AddProductFormData>({
    defaultValues: DEFAULT_VALUES,
  });

  const onSubmit = handleSubmit((data) => console.log(data));

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
    reset(DEFAULT_VALUES);
  }, [isModalOpen, reset]);

  return {
    control,
    errors,
    nameInputRef,
    isModalOpen,
    handleOpenModal,
    handleCloseModal,
    onSubmit,
  };
};
