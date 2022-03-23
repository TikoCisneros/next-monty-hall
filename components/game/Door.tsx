import React from 'react';
import DoorModel from '../../models/Door.model';
import styles from './Door.module.css';
import Gift from './Gift';

interface DoorProps {
  value: DoorModel;
  onChange: (door: DoorModel) => void;
}

const Door = ({
  value: door,
  value: { isSelected, doorplate, isClosed, hasGift },
  onChange,
}: DoorProps) => {
  const handleSelection = (_event: React.MouseEvent<HTMLDivElement>): void => onChange(door.changeDoorSelection());

  const handleOpen = (event: React.MouseEvent<HTMLDivElement>): void => {
    event.stopPropagation();
    onChange(door.open());
  };

  const renderGift = (): JSX.Element | false => hasGift && <Gift />;

  return (
    <div className={styles.wrapper}>
      <div className={`${styles.frame} ${isSelected && isClosed ? styles['frame--selected'] : ''}`}>
        {isClosed ? (
          <div className={styles.door} onClick={handleSelection}>
            <div className={styles.door__number}>{doorplate}</div>
            <div className={styles.door__look} onClick={handleOpen}></div>
          </div>
        ) : (
          <div className={`${styles.door} ${styles['door--open']}`}>
            {renderGift()}
          </div>
        )}
      </div>
      <div className={styles.floor}></div>
    </div>
  );
};

export default Door;
