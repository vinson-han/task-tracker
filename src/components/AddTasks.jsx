import { useState } from "react";
import "../App.css";

const AddTask = ({ addTask }) => {
  const [input, setInput] = useState([]);
  const handleInput = (event) => {
    setInput(event.target.value);
  };
  const handleClick = () => {
    addTask(input);
    setInput("");
  };
  const handleEnter = (event) => {
    event.key === "Enter" ? handleClick() : "";
  };
  return (
    <div className="addTask">
      <input
        id="input"
        name="input"
        value={input}
        onChange={handleInput}
        onKeyDown={handleEnter}
      />
      <button className="button" onClick={() => handleClick()}>
        Add Task
      </button>
    </div>
  );
};

export default AddTask;
