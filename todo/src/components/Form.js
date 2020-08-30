import React from "react";
import "./Form.style.scss";
const Form = () => {
  return (
    <form className="form-control">
      <input type="text" className="todo-input" />
      <button className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select className="todo-filter" name="todo">
          <option value="all">All</option>
          <option value="complete">Completed</option>
          <option value="Uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
