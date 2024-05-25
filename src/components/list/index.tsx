import { Category, TaskType } from "../../types"
import Task from "../task"
import "./style.css"

type listProps = {
  list: TaskType[]
  handleRemoveTask: (id: number) => void
  handleEditTask: (editedText: string, id: number, category: Category) => void
  setCategory: (category: Category) => void
}

const List = ({
  list,
  handleRemoveTask,
  handleEditTask,
  setCategory,
}: listProps) => {
  return (
    <section className="container-list">
      {list.map((task) => (
        <Task
          key={task.id}
          text={task.text}
          handleRemoveTask={handleRemoveTask}
          id={task.id}
          handleEditTask={handleEditTask}
          category={task.category}
          setCategory={setCategory}
        />
      ))}
    </section>
  )
}

export default List
