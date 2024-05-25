import { Category, TaskType } from "../../types"
import Task from "../task"
import "./style.css"

type listProps = {
  list: TaskType[]
  handleRemoveTask: (id: number) => void
  handleEditTask: (editedText: string, id: number, category: Category) => void
  setCategory: (category: Category) => void
  setDone: (id: number, done: boolean) => void
}

const List = ({
  list,
  handleRemoveTask,
  handleEditTask,
  setCategory,
  setDone,
  
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
          setDone={setDone}
          done={task.done}
        />
      ))}
    </section>
  )
}

export default List
