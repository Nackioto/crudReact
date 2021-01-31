import './App.css';

function App() {
  return (
    <div className="App">
      <h1>CRUD App with MERN</h1>

      <label htmlFor="">Food Name:</label>
      <input type="text" />
      <label htmlFor="">Days Since You Ate It:</label>
      <input type="number" />
      <button>Add to List</button>
    </div>
  );
}

export default App;
