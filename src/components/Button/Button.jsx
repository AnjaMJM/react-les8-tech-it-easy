import "./button.css"


function Button({children, handleClick}) {

    return (
        <button onClick={handleClick} className="button-basic">{children}</button>
    );
}

export default Button;