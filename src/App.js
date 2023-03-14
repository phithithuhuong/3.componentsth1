import logo from './logo.svg';
import './App.css';
import Welcome from "./components/Welcome";
import Hi from "./components/Hi";

function App() {
  return (
      <div className="App">
        <Welcome name="Props" />
          <Hi/>
      </div>
  );
}

export default App;
