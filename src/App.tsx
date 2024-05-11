import { useEffect, useState } from "react"
import Button from "./components/button"
import Input from "./components/input"
import Task from "./components/task"
import Title from "./components/title/title"

import "./style.css"
import { TaskType } from "./types"

function App() {
  const [list, setList] = useState<TaskType[]>([])

  const [value, setValue] = useState<string>("")

  const [task, setTask] = useState<TaskType>({
    id: 0,
    text: "",
    type: "ola",
    done: true,
  })

  useEffect(() => {
    setTask({
      ...task,
      text: value,
    })
  }, [value])

  const handleAdd = () => {
    createTask()
    setList([...list, task])
    setValue("")
  }
  const createTask = () => {
    const newTask = {
      id: task.id + 1,
      text: value,
      type: "",
      done: true,
    }
    setTask(newTask)
  }
  const handleRemove = () => {
    setList([])
  }
  const handleRemoveTask = (id: number) => {
    const newList = list.filter((task) => task.id != id)
    setList(newList)
  }
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
          <div className="buttons">
            <Button type="add" handleClick={handleAdd}>
              Add to-do
            </Button>
            <Button type="remove" handleClick={handleRemove}>
              Delete List
            </Button>
          </div>
        </header>
        <section className="container-list">
          {list.map((task) => (
            <Task
              text={task.text}
              handleRemoveTask={handleRemoveTask}
              id={task.id}
            ></Task>
          ))}
        </section>
      </main>
    </div>
  )
}

export default App
