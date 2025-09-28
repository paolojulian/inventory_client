import useUpdateProduct from '@/hooks/moduled/products/useUpdateProduct';
import { toast } from '@/hooks/useToast';
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

type Props = {
  productId?: string;
  onSuccess?: () => void;
  initialValues?: AddProductFormData;
};

export const useAddEditProductForm = (
  { onSuccess, initialValues, productId }: Props = {
    initialValues: undefined,
    productId: '',
  }
) => {
  const {
    control,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm<AddProductFormData>({
    defaultValues: initialValues || DEFAULT_VALUES,
  });

  const { mutateAsync } = useUpdateProduct();

  const onSubmit = handleSubmit(async (data) => {
    if (productId) {
      const result = await mutateAsync({
        id: productId,
        data: {
          description: data.description,
          name: data.name,
          price: Number(data.price),
          sku: data.sku,
        },
      });
      if (!result) {
        toast.error('Unable to update product, please try again later.');
        return;
      }

      toast.success('Product updated successfully.');
      if (onSuccess) {
        onSuccess();
      }
    }
  });
  const onResetForm = () => reset(initialValues);

  return {
    control,
    errors,
    onResetForm,
    onSubmit,
  };
};
