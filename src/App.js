import { Route, Routes } from 'react-router-dom';
import './App.css';
import Addusers from './components/Addusers/Addusers';
import Dashboard from './components/Dashboard/Dashboard';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Mycourses from './components/Mycourses/Mycourses';
import Edit from './components/MyProfile/Edit';
import Edit2 from './components/MyProfile/Edit2';
import Myprofile from './components/MyProfile/Myprofile';
import RequireAuth from './components/RequireAuth/RequireAuth';
import Signup from './components/Signup/Signup';
import Child from './components/Users/Child';
import Update from './components/Users/Update';
import User from './components/Users/User';
import Views from './components/Users/Views';

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
        <Route path='/dashboard/myprofile/edit' element={<Edit></Edit>}></Route>
        <Route path='/dashboard/myprofile/edit2' element={<Edit2></Edit2>}></Route>
        <Route path='/dashboard/:userID' element={<Child></Child>}></Route>
        <Route path='/dashboards/:viewID' element={<Views></Views>}></Route>
        <Route path='/dashboardss/:editID' element={<Update></Update>}></Route>
        <Route path='/dashboard' element={<RequireAuth>
          <Dashboard></Dashboard>
        </RequireAuth>}>
          <Route index element={<User></User>}></Route>
          {/* <Route path='addusers' element={<Addusers></Addusers>}></Route> */}
          <Route path='myprofile' element={<Myprofile></Myprofile>}></Route>
          <Route path='mycourse' element={<Mycourses></Mycourses>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
