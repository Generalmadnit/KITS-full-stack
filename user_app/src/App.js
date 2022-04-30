import logo from './logo.svg';
import './App.css';
import List from './List';
import StateExample from './StateExample';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Users</h2>
        {/* <StateExample></StateExample> */}
        <List></List>
      </header>
    </div>
  );
}

export default App;
