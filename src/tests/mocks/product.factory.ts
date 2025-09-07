import type { Product } from '@/domain/product.domain';

let idCounter = 0;

export function NewTestProduct(): Product {
  idCounter += 1;

  return {
    id: idCounter.toString(),
    sku: 'ube-jam--md',
    name: 'UBE Jam',
    description: 'Test description',
    price: { cents: 29999 },
    status: 'active',
  };
}
