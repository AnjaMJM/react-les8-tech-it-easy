import './card.css'
import {tvPhoto, tvPrice, tvSize, tvTitle} from "../../helpers/product-basis-input.js";
import {tvOptions} from "../../helpers/tv-options.js";

// eslint-disable-next-line react/prop-types
function Card({item}) {

    return (
        // eslint-disable-next-line react/prop-types
        <li key={item.type} className="card-base">
            <img src={tvPhoto(item)} alt="tv" className="card-photo"/>
            <div className="card-text">
                <h3>{tvTitle(item)}</h3>
                <h2>{tvPrice(item)}</h2>
                <p>{tvSize(item)}</p>
                <div className={"card-options-list"}>{item.options.map((option) => {
                return <div className={"card-options"}>
                    <img className={"card-icon"} src={tvOptions(option.applicable)}/>
                    <p>{option.name}</p>
                </div>
                })}
                </div></div>
        </li>
    );
}

export default Card;