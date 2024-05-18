import { TaskType } from "../../types";
import Task from "../task";
import "./style.css";

type listProps = {
  list: TaskType[];
  handleRemoveTask: (id: number) => void;
  handleEditTask: (editedText: string, id: number) => void;
};

const List = ({ list, handleRemoveTask, handleEditTask }: listProps) => {
  return (
    <section className="container-list">
      {list.map((task) => (
        <Task
          key={task.id}
          text={task.text}
          handleRemoveTask={handleRemoveTask}
          id={task.id}
          handleEditTask={handleEditTask}
        />
      ))}
    </section>
  );
};

export default List;
