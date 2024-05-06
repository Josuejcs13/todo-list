import Button from "./components/button"
import Input from "./components/input"
import List from "./components/list"
import Title from "./components/title/title"
// import icon from "./assets/reading-side.svg"
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
        {/* <img src={icon} alt="image of a person reading" className="icon" /> */}
        <section className="container-list">
          <List text="Lavar a roupa"></List>
          <List text="Fazer o Projeto"></List>
          <List text="Comer"></List>
        </section>
      </main>
    </div>
  )
}

export default App
