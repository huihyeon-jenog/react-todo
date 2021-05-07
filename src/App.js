import Header from "./Components/Header";
import Tasks from "./Components/Tasks";
import AddTask from "./Components/AddTask";
import { useGlobalContext } from "./context";

function App() {
  const {
    setShowAddTask,
    showAddTask,
    addTask,
    toggleShowAdd,
  } = useGlobalContext();
  return (
    <div className="App container w-25 mt-5 border border-info rounded">
      <Header
        onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
      />
      {showAddTask && <AddTask onAdd={addTask} toggleShowAdd={toggleShowAdd} />}
      <Tasks />
    </div>
  );
}
export default App;
