import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [filteredTasks, setFilteredTasks] = useState(TASKS);

  const filterTasks = (category) => {
    if (category === "All") {
      setFilteredTasks(tasks); // Show all tasks from tasks state
    } else {
      const filtered = tasks.filter((task) => task.category === category);
      setFilteredTasks(filtered); // Update filteredTasks with the filtered tasks
    }
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks); // Update the original tasks
    setFilteredTasks(updatedTasks); // Update the filtered tasks
  };

  const handleTaskFormSubmit = (newTask) => {
    // Add the new task to the tasks state
    setFilteredTasks([...tasks, newTask]);
    console.log(filteredTasks)
  }
  
  
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={[...CATEGORIES]} filterTasks={filterTasks} />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleTaskFormSubmit} />
      <TaskList tasks={filteredTasks} onDelete={handleDeleteTask} />
    </div>
  );
}

export default App;



// funny logic works but doesn't update state, therefore changing category returns deleted task

// import React, { useState } from "react";
// import CategoryFilter from "./CategoryFilter";
// import NewTaskForm from "./NewTaskForm";
// import TaskList from "./TaskList";

// import { CATEGORIES, TASKS } from "../data";
// // console.log("Here's the data you're working with");
// // console.log({ CATEGORIES, TASKS });


// function App() {
//   const [tasks, setTasks] = useState(TASKS);

//   const filterTasks = (category) => {
//     if (category === "All") {
//       // If "All" is selected, show all tasks.
//       setTasks(TASKS);
//     } else {
//       const filtered = TASKS.filter((task) => task.category === category);
//       setTasks(filtered); // Update tasks with the filtered tasks
//     }
//   }
//   const handleDeleteTask = (index) => {
//     const updatedTasks = [...tasks];
//     updatedTasks.splice(index, 1);
//     setTasks(updatedTasks);
//   }


//  return (
//     <div className="App">
//       <h2>My tasks</h2>
//       <CategoryFilter categories={[...CATEGORIES]} filterTasks={filterTasks} />
//       <NewTaskForm />
//       <TaskList tasks={tasks} onDelete={handleDeleteTask} />
//     </div>
//   );
// }


// export default App;
