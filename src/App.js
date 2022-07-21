import './App.css';
import Login from './Pages/Login';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import {Routes,Route} from "react-router-dom"
import Dashboard from './Pages/Dashboard';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Dashboard/>}/>
        <Route exact path="/login" element={<Login/>}/>
      </Routes>
  
     
    </div>
  );
}

export default App;
 