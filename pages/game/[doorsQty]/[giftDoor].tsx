import { useEffect, useState } from 'react';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';

import GameComponent from '../../../components/game';
import DoorModel from '../../../models/Door.model';

import { generateDoors, updateDoorValue } from '../../../helpers/Doors';

const Game: NextPage = () => {
  const { query } = useRouter();
  const [doors, setDoors] = useState<DoorModel[]>([]);

  useEffect(() => {
    const { doorsQty, giftDoor } = query;

    if (doorsQty && giftDoor) {
      setDoors(generateDoors(+doorsQty, +giftDoor));
    }

  },[query]);

  const handleDoorChange = (door: DoorModel) => setDoors(updateDoorValue(doors, door));

  return (
    <GameComponent
      doors={doors}
      onDoorChange={handleDoorChange}
    />
  );
};

export default Game;
