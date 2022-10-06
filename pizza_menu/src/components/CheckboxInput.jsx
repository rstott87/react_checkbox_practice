import "./CheckboxInput.css"

function CheckboxInput(props) {
  return (
    <div className="checkbox_input">
      <label htmlFor={props.topping}>{props.topping}</label>
      <input
        disabled={props.disabled}
        type="checkbox"
        id={props.id}
        name={props.topping}
        value={props.topping}
        checked={props.checked}
        onChange={props.onChange}
      />
    </div>
  );
}
export default CheckboxInput;
