import { useState } from "react"
import "./style.css"
import { CiCircleRemove, CiEdit, CiCircleCheck } from "react-icons/ci"
import Input from "../input"
import SelectType from "../selectType"
import { Category } from "../../types"

type TaskProps = {
  text: string
  id: number
  handleRemoveTask: (id: number) => void
  handleEditTask: (editedText: string, id: number, category: Category) => void
  category: Category
  setCategory: (category: Category) => void
}

const Task = ({
  text,
  id,
  handleRemoveTask,
  handleEditTask,
  category,
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
          <Input
            type="text"
            placeholder=""
            value={taskEdited}
            setValue={setTaskEdited}
          />

          <SelectType category={typeEdited} setCategory={setTypeEdited} />
          <button onClick={handleEdit} className="confirm-edit">
            <CiCircleCheck />
          </button>
        </div>
      ) : (
        <p>{text}</p>
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
