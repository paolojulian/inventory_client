class UnableToGetInventoryList extends Error {
  constructor() {
    super();
    this.message = 'Error: Unable to get inventory list';
  }
}
export const ErrUnableToGetInventoryList = new UnableToGetInventoryList();
