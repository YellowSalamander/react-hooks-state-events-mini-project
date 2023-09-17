import React, { useEffect, useState } from "react";
import Task from "./Task";

function TaskList({ tasks, onDelete }) {
  const [tasksToRender, setTasksToRender] = useState([]);

  // Use useEffect to update tasksToRender whenever tasks prop changes
  useEffect(() => {
    setTasksToRender(tasks);
  }, [tasks]);

  const handleDeleteTask = (index) => {
    onDelete(index);
  };

  return (
    <div className="tasks">
      {tasksToRender.map((task, index) => (
        <Task
          key={index}
          text={task.text}
          category={task.category}
          onDelete={() => handleDeleteTask(index)}
        />
      ))}
    </div>
  );
}

export default TaskList;


// import React from "react";
// import Task from "./Task";

// function TaskList({ tasks, onDelete }) {
//     const handleDeleteTask = (index) => {
//       onDelete(index);
//     }
//   return (
//     <div className="tasks">
//       {tasks.map((task, index) => (
//         <Task
//           key={index}
//           text={task.text}
//           category={task.category}
//           onDelete={() => handleDeleteTask(index)}
//         />
//       ))}
//     </div>
//   );
// }

// export default TaskList;