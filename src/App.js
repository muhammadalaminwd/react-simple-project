import logo from './logo.svg';
import './App.css';
import Device from './components/Device/Device';
import Watch from './components/Watch/Watch';

function App() {
  return (
    <div className="App">
    <Device name="Muhammad" occupation="Programmer"></Device>
    <Watch></Watch>
    </div>
  );
}

export default App;
