import './App.css';
import Home from './Screens/Home.js'
import {Routes,Route} from 'react-router-dom';
import Registration from './Screens/Registration';
import Login from './Screens/Login';
import Dashboard from './Screens/Dashboard';
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
   <div>
    <div>
      <Routes>
        <Route exact path="/" element={<Home></Home>} ></Route>
        <Route path="/reg" element={<Registration></Registration>} ></Route>
        <Route path="/Login" element={<Login></Login>} ></Route>
        <Route path="/dashboard" element={<Dashboard></Dashboard>} ></Route>
      </Routes>
    </div>
   </div>
  );
}

export default App;
