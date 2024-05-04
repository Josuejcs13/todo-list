import Button from "./components/button";
import Input from "./components/input";
import Title from "./components/title/title";
import "./style.css";

function App() {
  const handleAdd = () => {
    alert("Adicionar");
  };
  const handleRemove = () => {
    alert("Remover");
  };
  return (
    <div className="main">
      <Title>Tarefas</Title>
      <Input type="text" placeholder="Adicione uma tarefa" />
      <Button type="add" handleClick={handleAdd}>
        Adicionar
      </Button>
      <Button type="remove" handleClick={handleRemove}>
        Limpar
      </Button>
    </div>
  );
}

export default App;
