import { ChangeEvent } from "react"
import "./style.css"

type CheckBoxProps = {
  value: boolean
  setDone: (done: boolean) => void
}

const CheckBox = ({ value, setDone }: CheckBoxProps) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setDone(event.target.checked)
  }
  return <input type="checkbox" checked={value} onChange={handleChange} />
}
export default CheckBox
