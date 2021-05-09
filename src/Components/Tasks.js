import Task from "./Task";
import { useGlobalContext } from "../context";

const Tasks = () => {
  const { data } = useGlobalContext();
  return (
    <>
      {data.map((task) => {
        return <Task key={task.id} task={task} />;
      })}
    </>
  );
};

export default Tasks;
