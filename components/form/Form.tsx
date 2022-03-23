import { useState } from 'react';
import Button from '../common/Button';
import Card from './Card';

import styles from './Form.module.css';
import NumericInput from './NumericInput';

interface FormProps {
  onStartGame: (qty: number, giftDoor: number) => void;
}

const Form = ({ onStartGame }: FormProps) => {
  const [formValues, setFormValues] = useState({ qty: 3, gift: 2 });

  const handleChangeInputs = (attrib: string) => (value: number) => setFormValues({ ...formValues, [attrib]: value });
  
  const { qty, gift } = formValues;
  
  const handleStartGame = () => onStartGame(qty, gift);

  return (
    <div className={styles.form}>
      <Card>
        <span className={styles.form__title}>Monty Hall</span>
        <NumericInput text="Doors quantity:" value={qty} onChange={handleChangeInputs('qty')} config={{ min: gift, max: 10 }} />
        <NumericInput text="Door with gift:" value={gift} onChange={handleChangeInputs('gift')} config={{ min: 1, max: qty }} />
        <Button className={styles.form__button} label="Start game" onClick={handleStartGame}/>
      </Card>
    </div>
  );
};

export default Form;
