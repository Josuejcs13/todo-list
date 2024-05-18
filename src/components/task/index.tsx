import "./style.css"
import { CiCircleRemove } from "react-icons/ci"

type TaskProps = {
  text: string
  id: number
  handleRemoveTask: (id: number) => void
}
const Task = ({ text, id, handleRemoveTask }: TaskProps) => {
  return (
    <div className="task">
      <p>{text}</p>
      <button onClick={() => handleRemoveTask(id)}>
        <CiCircleRemove />
      </button>
    </div>
  )
}

export default Task
