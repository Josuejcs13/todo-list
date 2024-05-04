import "./style.css"

type ButtonProps = {
  text: string
  type: "add" | "remove"
  handleClick: () => void
}

const Button = ({ handleClick, text, type }: ButtonProps) => {
  return (
    <button className={`button ${type}`} onClick={handleClick}>
      {text}
    </button>
  )
}

export default Button
