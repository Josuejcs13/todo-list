import { useState } from "react"
import "./style.css"
import { CiCircleRemove, CiEdit, CiCircleCheck } from "react-icons/ci"
import Input from "../input"
import SelectType from "../selectType"
import { Category } from "../../types"
import CheckBox from "../checkBox"

type TaskProps = {
  text: string
  id: number
  handleRemoveTask: (id: number) => void
  handleEditTask: (editedText: string, id: number, category: Category) => void
  category: Category
  setCategory: (category: Category) => void
  setDone: (id: number, done: boolean) => void
  done: boolean
}

const Task = ({
  text,
  id,
  handleRemoveTask,
  handleEditTask,
  category,
  setDone,
  done,
}: TaskProps) => {
  const [isEditing, setIsEditing] = useState<boolean>(false)
  const [taskEdited, setTaskEdited] = useState<string>(text)
  const [typeEdited, setTypeEdited] = useState<Category>(category)

  const handleEdit = () => {
    setIsEditing(false)
    handleEditTask(taskEdited, id, typeEdited as Category)
  }

  return (
    <div className="task">
      {isEditing ? (
        <div className="edit-task">
          <Input type="text" value={taskEdited} setValue={setTaskEdited} />

          <SelectType category={typeEdited} setCategory={setTypeEdited} />
          <button onClick={handleEdit} className="confirm-edit">
            <CiCircleCheck />
          </button>
        </div>
      ) : (
        <div className="ifo-values">
          <CheckBox setDone={(done) => setDone(id, done)} value={done} />
          <p>{text}</p>
        </div>
      )}
      <div className="ifo-style">
        <p>{category}</p>
        {!isEditing && (
          <button onClick={() => setIsEditing(true)} className="button-edit">
            <CiEdit />
          </button>
        )}

        <button onClick={() => handleRemoveTask(id)} className="button-remove">
          <CiCircleRemove />
        </button>
      </div>
    </div>
  )
}

export default Task
