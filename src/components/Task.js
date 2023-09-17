import React from "react";

function Task({ text, category, onDelete }) {
  const handleDeleteClick = () => {
    onDelete(); // Call the onDelete function when the delete button is clicked
  };

  return (
    <div className={`task ${category}`}>
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={handleDeleteClick}>
        X
      </button>
    </div>
  );
}

export default Task;
