import "./stile.css"
import { CiCircleRemove } from "react-icons/ci"

type ListProps = {
  text: string
}
const List = ({ text }: ListProps) => {
  return (
    <div className="list">
      <p>{text}</p>
      <button>
        <CiCircleRemove />
      </button>
    </div>
  )

}

export default List
