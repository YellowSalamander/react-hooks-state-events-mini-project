import React, { useState } from "react";
import { CATEGORIES } from "../data"; // Import CATEGORIES from your data file

const slicecategories = CATEGORIES.slice(1,9)

function NewTaskForm({categories, onTaskFormSubmit}) {
  const [formData, setFormData] = useState({
    text: "",
    category: slicecategories[0]
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  
    // Create a new task object with the form data
    const newTask = {
      text: formData.text,
      category: formData.category,
    };
  console.log(formData.category)
    // Call the onTaskFormSubmit callback with the new task
    onTaskFormSubmit(newTask)
    console.log(newTask)
  
    // Clear the form
    setFormData({ text: "", category: CATEGORIES[0] });
  };

 


  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input
          type="text"
          name="text"
          value={formData.text}
          onChange={handleChange}
        />
      </label>
      <label>
  Category
  <select name="category" value={formData.category} onChange={handleChange}>
  {slicecategories.map((category) => (
    <option key={category} value={category}>
      {category}
    </option>
  ))}
</select>
</label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;




// this works but barely
// mport React, { useState } from "react";
// import { CATEGORIES } from "../data";

// function NewTaskForm({ categories, onTaskFormSubmit }) {
//   const [formData, setFormData] = useState({
//     text: "",
//     category: CATEGORIES[0],
//   });

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     // Create a new task object with the form data
//     const newTask = {
//       text: formData.text,
//       category: formData.category,
//     };

//     // Call the onTaskFormSubmit callback with the new task
//     onTaskFormSubmit(newTask);

//     // Clear the form
//     setFormData({ text: "", category: CATEGORIES[0] });
//   };

//   return (
//     <form className="new-task-form" onSubmit={handleSubmit}>
//       <label>
//         Details
//         <input
//           type="text"
//           name="text"
//           value={formData.text}
//           onChange={handleChange}
//         />
//       </label>
//       <label>
//         Category
//         <select name="category" value={formData.category} onChange={handleChange}>
//           {CATEGORIES
//             .filter((category) => category !== "All")
//             .map((category) => (
//               <option key={category} value={category}>
//                 {category}
//               </option>
//             ))}
//         </select>
//       </label>
//       <input type="submit" value="Add task" />
//     </form>
//   );
// }

// export default NewTaskForm;