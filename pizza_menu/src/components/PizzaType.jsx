import "./PizzaType.css"
function PizzaType(props) {
  return (
    
    <div className="pizza_type_form">
      <form>
        <label htmlFor="">Choose a Pizza Type:</label><br></br>
        <select
          name="pizza_type"
          id=""
          value={props.type}
          onChange={props.typeChangeHandler}
        >
          <option value="Meat Lover">Meat Lover</option>
          <option value="Plain">Plain</option>
          <option value="Build Your Own">Build Your Own</option>
        </select>
      </form>
    </div>
  );
}

export default PizzaType;
