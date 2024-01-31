import Footer from "./components/Footer";
import AddTask from "./components/AddTasks";
import DisplayTask from "./components/DisplayTask";
import "./App.css";
import { useState } from "react";
function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (value) => {
    setTasks([...tasks, value]);
  };

  return (
    <div className="card">
      <AddTask addTask={addTask} />
      <DisplayTask tasks={tasks} />
      <Footer />
    </div>
  );
}

export default App;
