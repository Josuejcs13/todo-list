import "./style.css";

type ButtonProps = {
  text: string;
  type: "add" | "remove";
};

const Button = (props: ButtonProps) => {
  return <button className={`button ${props.type}`}>{props.text}</button>;
};

export default Button;
