import style from './Card.module.css'

const Card = (props) => {
    return(
        <div className={style.card}>
            <p>ID: {props.id}</p>
            <p>Name: {props.name}</p>
            <p>HP: {props.hp}</p>
        </div>
    )
}

export default Card;