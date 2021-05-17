import './Card.css'

const Card = (props) => {
    const classnames = props.className + " card"
    return (
        <div className={classnames}>{props.children}</div>
    )
}

export default Card;