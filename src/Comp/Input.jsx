import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../TodoSlice";

function Input() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (text.trim() === "") return;

    const newTask = {
      id: Date.now(), 
      text: text,
      iscomplete: false
    };

    dispatch(addTask(newTask));
    setText(""); // clear input
  };

  return (
    <div className="input-row">
      <input
        className="task-input"
        type="text"
        placeholder="Enter task..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button className="add-btn" onClick={handleAdd}>Add</button>
    </div>
  );
}

export default Input;