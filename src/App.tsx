import './App.css';
import {Routes,Route} from "react-router-dom"

// pages
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route  path="/" element={<Dashboard/>}/>
        <Route  path="/login" element={<Login/>}/>
        <Route  path="/register" element={<Register/>}/>
      </Routes>
  
     
    </div>
  );
}

export default App;
 