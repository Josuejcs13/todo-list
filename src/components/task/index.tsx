import { FaRegTrashAlt } from "react-icons/fa";
import "./style.css";

type TaskProps = {
  name: string;
};

const Task = ({ name }: TaskProps) => {
  return (
    <div className="task">
      <p>{name}</p>
      <button>
        <FaRegTrashAlt />
      </button>
    </div>
  );
};

export default Task;
