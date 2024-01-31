const DisplayTask = ({ tasks }) => {
  return (
    <div>
      <h2>Add List</h2>
      <ul style={{ listStyleType: "none" }}>
        {tasks.map((task, key) => (
          <li key={key}>{task}</li>
        ))}
      </ul>
    </div>
  );
};

export default DisplayTask;
