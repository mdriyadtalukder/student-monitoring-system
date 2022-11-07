import { Route, Routes } from 'react-router-dom';
import './App.css';
import Addusers from './components/Addusers/Addusers';
import Dashboard from './components/Dashboard/Dashboard';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import RequireAuth from './components/RequireAuth/RequireAuth';
import Signup from './components/Signup/Signup';
import Students from './components/Students/Students';
import User from './components/Users/User';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<RequireAuth>
          <Home></Home>
        </RequireAuth>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='/dashboard' element={<RequireAuth>
          <Dashboard></Dashboard>
        </RequireAuth>}>
          <Route index element={<User></User>}></Route>
          <Route path='students' element={<Students></Students>}></Route>
          <Route path='addusers' element={<Addusers></Addusers>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
