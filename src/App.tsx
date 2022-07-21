import './App.css';
import Login from './pages/Login';
import {Routes,Route} from "react-router-dom"
import Dashboard from './pages/Dashboard';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route  path="/" element={<Dashboard/>}/>
        <Route  path="/login" element={<Login/>}/>
      </Routes>
  
     
    </div>
  );
}

export default App;
 