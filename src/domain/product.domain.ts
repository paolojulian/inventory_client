export type Product = {
  id: string;
  sku: string;
  name: string;
  description: string;
  price: Money;
  is_active: boolean;
};

export type Money = {
  cents: number;
};
