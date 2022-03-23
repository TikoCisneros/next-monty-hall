import DoorModel from '../models/Door.model';

export const generateDoors = (doorsQty: number, doorWithGift: number): DoorModel[] => {
  return Array.from({ length: doorsQty }, (_, index) => {
    const doorplate = index + 1;
    return new DoorModel(doorplate, doorplate === doorWithGift);
  });
}

export const updateDoorValue = (doors: DoorModel[], newDoor: DoorModel): DoorModel[] => {
  return doors.map((door) => {
    if (door.doorplate === newDoor.doorplate) {
      return newDoor;
    }

    if (!newDoor.isOpen) {
      return door.unselect(); // Selection behavior
    }

    return door;
  });
}