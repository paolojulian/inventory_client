class UnableToGetProductList extends Error {
  constructor() {
    super();
    this.message = 'Error: Unable to get product list';
  }
}
export const ErrUnableToGetProductList = new UnableToGetProductList();
