import type { Product } from '@/domain/product.domain';

let idCounter = 0;

export function NewTestProduct(): Product {
  idCounter += 1;

  return {
    id: idCounter.toString(),
    sku: 'ube-jam--md',
    name: 'UBE Jam',
    description: `Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`,
    price: { cents: 29999 },
    status: 'active',
  };
}
