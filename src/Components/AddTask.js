import { useState } from "react";
import { useGlobalContext } from "../context";

const AddTask = ({ onAdd, toggleShowAdd }) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!text) {
      alert("Please add a Task");
      return;
    }
    onAdd({ text, day, reminder });
    setText("");
    setDay("");
    toggleShowAdd();
    setReminder(false);
  };

  return (
    <form onSubmit={onSubmit} className="container">
      <div className="mb-3 row">
        <label className="col-sm-4 col-form-label">Task</label>
        <input
          className="col-sm-7"
          type="text"
          placeholder="Add Task"
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></input>
      </div>
      <div className="mb-3 row">
        <label className="col-sm-4 col-form-label">Day & Time</label>
        <input
          className="col-sm-7"
          type="text"
          placeholder="Add Day & Time"
          value={day}
          onChange={(e) => setDay(e.target.value)}
        ></input>
      </div>
      <div className="mb-3 row">
        <label className="col-sm-4 col-form-label">Set Reminder</label>
        <input
          className="form-check-input col-2 ml-2"
          type="checkBox"
          value={reminder}
          onChange={(e) => setReminder(e.target.checked)}
          checked={reminder}
        ></input>
      </div>
      <input
        type="submit"
        value="Save"
        className="btn btn-outline-primary w-100 mb-4"
      />
    </form>
  );
};

export default AddTask;
