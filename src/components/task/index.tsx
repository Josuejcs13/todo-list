import { useState } from "react";
import "./style.css";
import { CiCircleRemove, CiEdit, CiCircleCheck } from "react-icons/ci";
import Input from "../input";

type TaskProps = {
  text: string;
  id: number;
  handleRemoveTask: (id: number) => void;
  handleEditTask: (editedText: string, id: number) => void;
};

const Task = ({ text, id, handleRemoveTask, handleEditTask }: TaskProps) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [taskEdited, setTaskEdited] = useState<string>("");
  const handleEdit = () => {
    setIsEditing(false);
    handleEditTask(taskEdited, id);
  };

  return (
    <div className="task">
      {isEditing ? (
        <>
          <Input
            type="text"
            placeholder={text}
            value={taskEdited}
            setValue={setTaskEdited}
          />
          <button onClick={handleEdit}>
            <CiCircleCheck />
          </button>
        </>
      ) : (
        <p>{text}</p>
      )}
      {!isEditing && (
        <button onClick={() => setIsEditing(true)}>
          <CiEdit />
        </button>
      )}
      <button onClick={() => handleRemoveTask(id)}>
        <CiCircleRemove />
      </button>
    </div>
  );
};

export default Task;
