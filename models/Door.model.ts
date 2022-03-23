export default class DoorModel {
  // Immutable attribs
  #doorplate: number;
  #hasGift: boolean;
  #isSelected: boolean;
  #isOpen: boolean;

  constructor(doorplate: number, hasGift: boolean = false, isSelected: boolean = false, isOpen: boolean = false) {
    this.#doorplate = doorplate;
    this.#hasGift = hasGift;
    this.#isSelected = isSelected;
    this.#isOpen = isOpen;
  }

  get doorplate() {
    return this.#doorplate;
  }

  get hasGift() {
    return this.#hasGift;
  }

  get isSelected() {
    return this.#isSelected;
  }

  get isOpen() {
    return this.#isOpen;
  }

  get isClosed() {
    return !this.#isOpen;
  }

  changeDoorSelection() {
    return new DoorModel(this.doorplate, this.hasGift, !this.isSelected, this.isOpen);
  }

  unselect() {
    return new DoorModel(this.doorplate, this.hasGift, false, this.isOpen);
  }

  open() {
    return new DoorModel(this.doorplate, this.hasGift, this.isSelected, true);
  }
}
