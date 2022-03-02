import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router"
import Login from './components/Login';
import { Redirect } from "react-router-dom"
import Dashboard from './components/Dashboard';
import Jokes from './components/Jokes';
import Protected from './components/Protected';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<><Protected /></>}></Route>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/dashboard" element={<><Protected /><Dashboard /></>}></Route>
        <Route exact path="/jokes" element={<><Protected /><Jokes /></>} />
      </Routes>
    </div>
  );
}

export default App;
