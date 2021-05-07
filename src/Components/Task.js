import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "../context";

const Task = ({ task }) => {
  const { toggleReminder, deleteTask } = useGlobalContext();
  return (
    <div
      className={`task p-3 mb-3 h-25 ${
        task.reminder ? "bg-light text-dark" : "bg-success text-white"
      }`}
      onDoubleClick={() => toggleReminder(task.id)}
    >
      <h3>{task.text}</h3>
      <FaTimes
        style={{
          color: "red",
          cursor: "pointer",
          fontSize: "30px",
          top: "0",
        }}
        onClick={() => deleteTask(task.id)}
      />
      <p>{task.day}</p>
    </div>
  );
};

export default Task;
