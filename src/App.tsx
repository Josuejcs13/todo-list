import Button from "./components/button"
import Input from "./components/input"
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
    <div className="main">
      <Title>Tarefas</Title>
      <Input type="text" placeholder="Adicione uma tarefa" />
      <Button text="Adicionar" type="add" handleClick={handleAdd} />
      <Button text="Limpar" type="remove" handleClick={handleRemove} />
    </div>
  )
}

export default App
