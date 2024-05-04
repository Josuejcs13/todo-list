import "./style.css";

type ButtonProps = {
  children: string;
  type: "add" | "remove";
  handleClick: () => void;
};

const Button = ({ handleClick, children, type }: ButtonProps) => {
  return (
    <button className={`button ${type}`} onClick={handleClick}>
      {children}
    </button>
  );
};

export default Button;
