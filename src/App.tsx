import Button from "./components/button"
import Input from "./components/input"
import Task from "./components/task"
import Title from "./components/title/title"

import "./style.css"

function App() {
  const handleAdd = () => {
    alert("Adicionar")
  }
  const handleRemove = () => {
    alert("Remover")
  }
  return (
    <div className="app">
      <Title>TO-Do List</Title>
      <main>
        <header className="inputs">
          <Input type="text" placeholder="New List" />
          <div className="buttons">
            <Button text="Add to-do" type="add" handleClick={handleAdd} />
            <Button
              text="Delete List"
              type="remove"
              handleClick={handleRemove}
            />
          </div>
        </header>
        <section className="container-list">
          <Task text="Lavar a roupa"></Task>
          <Task text="Fazer o Projeto"></Task>
          <Task text="Comer"></Task>
        </section>
      </main>
    </div>
  )
}

export default App
