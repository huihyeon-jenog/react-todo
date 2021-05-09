import Header from "./Components/Header";
import Tasks from "./Components/Tasks";
import AddTask from "./Components/AddTask";
import { useGlobalContext } from "./context";

function App() {
  const { showAddTask, addTask, toggleShowAdd } = useGlobalContext();
  return (
    <div className="App container w-25 mt-5 border border-info rounded">
      <Header />
      {showAddTask && <AddTask onAdd={addTask} toggleShowAdd={toggleShowAdd} />}
      <Tasks />
    </div>
  );
}
export default App;
