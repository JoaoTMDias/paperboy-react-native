class SelectedArray {
  constructor() {
    this.selectedItemsArray = [];
  }

  // Function used to make selected checkbox's entry in array.
  setItem(option) {
    this.selectedItemsArray.push(option);
  }

  // Function used to get array for all selected checkbox items.
  getArray() {
    return this.selectedItemsArray;
  }
}

export default SelectedArray;
