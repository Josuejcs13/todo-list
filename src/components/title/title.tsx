import "./style.css"
type TitleProps = {
    children: string
}

const Title = ({children}: TitleProps) => {
    return <h1 className="title">{children}</h1>
}
export default Title