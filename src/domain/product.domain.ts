export type Product = {
  id: string;
  sku: string;
  name: string;
  description: string;
  price: Money;
  status: 'active' | 'inactive';
};

export type Money = {
  cents: number;
};
