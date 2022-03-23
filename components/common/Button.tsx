import styles from './Button.module.css';

interface Props {
  label: string;
  onClick?: () => void;
  className?: string;
}

const Button = ({ label, onClick, className = '' }: Props) => {
  return (
    <button className={`${styles.button} ${className}`} onClick={onClick}>
      <span>{label}</span>
    </button>
  )
}

export default Button;