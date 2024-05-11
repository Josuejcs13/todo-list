import "./style.css"
import iconAdd from "../assets/CheckPlus.svg"
import iconRemove from "../assets/Trash.svg"

type ButtonProps = {
  text: string
  type: "add" | "remove"
  handleClick: () => void
}

const Button = ({ handleClick, text, type }: ButtonProps) => {
  const icon = type === "add" ? iconAdd : iconRemove

  return (
    <button className={`button ${type}`} onClick={handleClick}>

      <img src={icon} alt={type === "add" ? "Adicionar" : "Remover"} />
      {text}
    </button>
  )
}

export default Button
