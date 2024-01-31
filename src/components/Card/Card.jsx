import './card.css'

function Card(props) {
    console.log(props.fruit)

    return (
        <div className={`card-styling ${props.extraStyling}`}>
            <h2>{props.fruit}</h2>
            <p>{props.geenIdee}</p>
        </div>
    );
}

export default Card;