import Link from 'next/link';
import Door from './Door';
import DoorModel from '../../models/Door.model';

import styles from './Game.module.css';
import Button from '../common/Button';

interface GameProps {
  doors: DoorModel[],
  onDoorChange: (door: DoorModel) => void;
}

const Game = ({ doors, onDoorChange }: GameProps) => { 
  return (
    <div className={styles.game}>
      <div className={styles['game__doors-section']}>
        {doors.map((door, index) => (
          <Door key={`d-${index}`} value={door} onChange={onDoorChange} />
        ))}
      </div>
      <div className={styles.game__actions}>
          <Link href="/" passHref>
            <Button label="Reset game" />
          </Link>
      </div>
    </div>
  );
};

export default Game;