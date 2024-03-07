import'./Button.css';

//Componentas = funkcija
//Props = parametras
const Button = (props) => {
  
    return (
        <button className={props.style}>{props.showIcon && <span>🎉</span>} {props.text}
        {props.children}</button>
    );
}
export default Button;