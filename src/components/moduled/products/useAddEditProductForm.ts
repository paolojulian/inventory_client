import { toast } from '@/hooks/useToast';
import { useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';

export type AddProductFormData = {
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

export const useAddEditProductForm = () => {
  const {
    control,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm<AddProductFormData>({
    defaultValues: DEFAULT_VALUES,
  });

  const { mutateAsync } = useMutation({
    mutationKey: ['AddProduct'],
    mutationFn: () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(true);
        }, 1000);
      });
    },
  });

  const onAddProduct = async () => {
    const result = await mutateAsync();
    if (!result) {
      toast.error('Unable to save product, please try again later.');
      return;
    }

    toast.success('Product added successfully.');
  };

  const onSubmit = handleSubmit(onAddProduct);
  const onResetForm = () => reset(DEFAULT_VALUES);

  return {
    control,
    errors,
    onResetForm,
    onSubmit,
  };
};
