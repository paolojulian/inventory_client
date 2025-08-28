import { Hoverable, Popper } from '@/components/shared';
import EllipsisVerticalIcon from '@/components/shared/icons/EllipsisVerticalIcon';
import Menu, { MenuItem } from '@/components/shared/Menu';
import type { ProductMock } from '@/tests/mocks/product.factory';

type Props = {
  product: ProductMock;
};

const ProductRowKebabMenu = ({ product }: Props) => {
  const handleEditClicked = () => {
    alert(`Editing ${product.name}`);
  };

  const handleDeleteClicked = () => {
    alert(`Deleting ${product.name}`);
  };

  return (
    <Popper
      trigger={
        <button className='active:scale-95'>
          <Hoverable className='p-1'>
            <EllipsisVerticalIcon />
          </Hoverable>
        </button>
      }
      placement='bottom-end'
    >
      {({ onClose }) => (
        <Menu>
          <div className='flex flex-col gap-1'>
            <MenuItem
              onClick={() => {
                handleEditClicked();
                onClose();
              }}
              title='Edit'
            />
            <MenuItem
              onClick={() => {
                handleDeleteClicked();
                onClose();
              }}
              className='text-danger'
              title='Delete'
            />
          </div>
        </Menu>
      )}
    </Popper>
  );
};

export default ProductRowKebabMenu;
