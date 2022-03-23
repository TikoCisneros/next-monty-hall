import styles from './NumericInput.module.css';

interface NumericInputProps {
  text: string;
  value: number;
  onChange: (value: number) => void;
  config?: { min: number, max: number };
}

const NumericInput = ({ text, value, onChange, config }: NumericInputProps) => {
  const handleIncrement = () => {
    const newValue = value + 1;

    if (config?.max && newValue > config.max) {
      return;
    }

    onChange(newValue);
  };

  const handleDecrement = () => {
    const newValue = value - 1;

    if (config?.min && newValue < config.min) {
      return;
    }

    onChange(newValue);
  };

  return (
    <div className={styles.input}>
      <span className={styles.input__text}>{text}</span>
      <div className={styles.input__actions}>
        <button className={styles.input__button} onClick={handleDecrement}>
          {'-'}
        </button>
        <span className={styles.input__value}>{value}</span>
        <button className={styles.input__button} onClick={handleIncrement}>
          {'+'}
        </button>
      </div>
    </div>
  );
};

export default NumericInput;
