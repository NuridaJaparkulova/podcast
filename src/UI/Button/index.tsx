import style from "./Button.module.scss";
interface IButton {
  onClick?: () => void;
  className?: string;
  children?: React.ReactNode;
}
export const Button = ({ children, className, onClick }: IButton) => {
  return (
    <button onClick={onClick} className={`${style.button} ${className || ""}`}>
      {children}
    </button>
  );
};

