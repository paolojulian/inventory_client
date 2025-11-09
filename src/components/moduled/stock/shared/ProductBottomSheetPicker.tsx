import { BottomSheetPicker } from '@/components/shared';
import type { BottomSheetPickerOption } from '@/components/shared/BottomSheetPicker/BottomSheetPicker';
import { useGetProductList } from '@/hooks/moduled/products';
import type { ComponentProps } from 'react';

type Props = ComponentProps<typeof BottomSheetPicker>;

const ProductBottomSheetPicker = ({ ...props }: Props) => {
  const { products } = useGetProductList({
    filter: {},
  });

  const options: BottomSheetPickerOption[] = products.map((product) => ({
    id: product.id,
    value: product.name,
  }));

  return <BottomSheetPicker {...props} options={options} />;
};

export default ProductBottomSheetPicker;
