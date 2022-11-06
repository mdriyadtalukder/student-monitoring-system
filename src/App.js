import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import RequireAuth from './components/RequireAuth/RequireAuth';
import Signup from './components/Signup/Signup';

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
      </Routes>
    </div>
  );
}

export default App;
