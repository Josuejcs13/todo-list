import "./stile.css"
import { CiCircleRemove } from "react-icons/ci"

type TaskProps = {
  text: string
}
const Task = ({ text }: TaskProps) => {
  return (
    <div className="task">
      <p>{text}</p>
      <button>
        <CiCircleRemove />
      </button>
    </div>
  )

}

export default Task
