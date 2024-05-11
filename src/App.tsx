import Button from "./components/button"
import Input from "./components/input"
import Task from "./components/task"
import Title from "./components/title/title"

import "./style.css"

function App() {
  const handleAdd = () => {
    alert("Adicionar");
  };
  const handleRemove = () => {
    alert("Remover");
  };
  return (
    <div className="app">
      <Title>TO-Do List</Title>
      <main>
        <header className="inputs">
          <Input type="text" placeholder="New List" />
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
          <Task text="Lavar a roupa"></Task>
          <Task text="Fazer o Projeto"></Task>
          <Task text="Comer"></Task>
        </section>
      </main>
    </div>
  )
}

export default App;
