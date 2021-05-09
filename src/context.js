import React, { useContext, useState, useEffect } from "react";
import Axios from "axios";

const AppContext = React.createContext();

const AppProvier = ({ children }) => {
  const [showAddTask, setShowAddTask] = useState(false);
  const [data, setData] = useState([]);

  const getData = async () => {
    const res = await Axios.get("http://localhost:4000/task");
    setData(res.data);
  };
  const deleteTask = async (id) => {
    await Axios.delete(`http://localhost:4000/task/${id}`);
    setData(data.filter((task) => task.id !== id));
  };
  const toggleReminder = async (id) => {
    const modi = data.filter((task) => {
      if (task.id === id) {
        return task;
      }
    });
    await Axios.put(`http://localhost:4000/task/${id}`, {
      id: modi[0].id,
      text: modi[0].text,
      day: modi[0].day,
      reminder: !modi[0].reminder,
    });
    getData();
  };
  const toggleShowAdd = () => {
    setShowAddTask(false);
  };
  const addTask = async (task) => {
    await Axios.post("http://localhost:4000/task", {
      id: Math.floor(Math.random() * 1000) + 1,
      text: task.text,
      day: task.day,
      reminder: task.reminder,
    });
    getData();
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <AppContext.Provider
      value={{
        showAddTask,
        setShowAddTask,
        data,
        setData,
        addTask,
        toggleReminder,
        toggleShowAdd,
        deleteTask,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvier };
