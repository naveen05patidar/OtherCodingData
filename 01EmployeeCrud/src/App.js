// import logo from './logo.svg';
import './App.css';
import {Link, Route, Routes} from 'react-router-dom';
import Home from './Home';
import SaveEmp from './SaveEmp.js';
import  Search  from './Search';
import Edit from './Edit.js';
import Delete from './Delete.js';

function App() {
  return (
    <div>
      <div>
        <Link to="/">Home</Link>
        <Link to="/create">Create</Link>
        <Link to="/search">Search</Link>
        <Link to="/update">Update</Link>
        <Link to="/delete">Delete</Link>
      </div>
      <div>
        <Routes>
          <Route exact path='/' element={<Home/>}></Route>
          <Route path='/create' element={<SaveEmp/>}></Route>
          <Route path='/search' element={<Search/>}></Route>
          <Route path='/update' element={<Edit/>}></Route>
          <Route path='/delete' element={<Delete/>}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
