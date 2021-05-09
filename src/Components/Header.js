import { useGlobalContext } from "../context";

const Header = () => {
  const { setShowAddTask, showAddTask } = useGlobalContext();
  return (
    <div className="d-flex p-3 justify-content-between mb-4">
      <h1 className="text-success">ToDo List</h1>
      <button
        className={
          showAddTask ? "btn btn-outline-danger" : "btn btn-outline-success"
        }
        onClick={() => setShowAddTask(!showAddTask)}
      >
        {showAddTask ? "Close" : "Add"}
      </button>
    </div>
  );
};

export default Header;
