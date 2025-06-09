export type ProductMock = {
  id: string;
  sku: string;
  name: string;
  description: string;
  price: number;
  isActive: boolean;
};

let idCounter = 0;

export function NewTestProduct(): ProductMock {
  idCounter += 1;

  return {
    id: idCounter.toString(),
    sku: 'ube-jam--md',
    name: 'UBE Jam',
    description: 'Test description',
    price: 29999,
    isActive: true,
  };
}
