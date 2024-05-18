import { useEffect, useState } from "react";
import Button from "./components/button";
import Input from "./components/input";
import Title from "./components/title/title";
import SelectType from "./components/selectType";
import { Category, TaskType } from "./types";

import "./style.css";
import List from "./components/list";
import { IoMdReturnLeft } from "react-icons/io";

function App() {
  const [category, setCategory] = useState<Category>(Category.Trabalho);

  const [list, setList] = useState<TaskType[]>([]);

  const [value, setValue] = useState<string>("");

  const [task, setTask] = useState<TaskType>({
    id: 0,
    text: "",
    category: category,
    done: true,
  });

  useEffect(() => {
    setTask({
      ...task,
      text: value,
      category: category,
    });
  }, [value, category]);

  const createTask = () => {
    const newTask: TaskType = {
      id: task.id + 1,
      text: value,
      category: category,
      done: true,
    };
    setTask(newTask);
  };

  const handleAdd = () => {
    createTask();
    setList([...list, task]);
    setValue("");
  };

  const handleRemove = () => {
    setList([]);
  };

  const handleRemoveTask = (id: number) => {
    const newList = list.filter((task) => task.id != id);
    setList(newList);
  };

  const handleEditTask = (editedText: string, id: number) => {
    const taskToEdit = list.find((task) => task.id === id);
    const editedTask = {
      ...taskToEdit,
      text: editedText,
    };
    const newList = list.map((task) => {
      if (task.id === id) {
        return editedTask;
      }
      return task;
    });
    setList(newList as TaskType[]);
  };

  return (
    <div className="app">
      <Title>TO-Do List</Title>

      <main>
        <header className="inputs">
          <Input
            type="text"
            placeholder="New List"
            value={value}
            setValue={setValue}
          />
          <SelectType
            category={category}
            setCategory={setCategory}
          ></SelectType>

          <div className="buttons">
            <Button type="add" handleClick={handleAdd}>
              Add to-do
            </Button>
            <Button type="remove" handleClick={handleRemove}>
              Delete List
            </Button>
          </div>
        </header>
        <List
          list={list}
          handleRemoveTask={handleRemoveTask}
          handleEditTask={handleEditTask}
        />
      </main>
    </div>
  );
}

export default App;
