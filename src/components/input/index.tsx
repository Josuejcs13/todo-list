import "./style.css"

type InputProps = {
  type: string
  placeholder: string
  value: string
  setValue: (value: string) => void
}

const Input = ({ type, placeholder, value, setValue }: InputProps) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="input-add"
      value={value}
      onChange={(event) => {
        setValue(event?.target.value)
      }}
    />
  )
}

export default Input
