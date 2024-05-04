import "./style.css"

type InputProps = {
  type: string
  placeholder: string
}

const Input = ({ type, placeholder }: InputProps) => {
  return <input type={type} placeholder={placeholder} className="input-add" />
}

export default Input
