class UnableToGetProductList extends Error {
  constructor() {
    super();
    this.message = 'Error: Unable to get product list';
  }
}
export const ErrUnableToGetProductList = new UnableToGetProductList();

class UnableToUpdateProduct extends Error {
  constructor() {
    super();
    this.message = 'Error: Unable to update product';
  }
}
export const ErrUnableToUpdateProduct = new UnableToUpdateProduct();
