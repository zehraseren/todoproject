import "./App.css";
import CreateTask from "./CreateTask";
import Header from "./Header";

function App() {
  const addTask = (newTask) => {
    console.log(newTask);
  };
  return (
    <div className="App">
      <Header />
      <CreateTask onAdd={addTask} />
    </div>
  );
}

export default App;
