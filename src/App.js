import { useAuthState } from 'react-firebase-hooks/auth';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Addusers from './components/Addusers/Addusers';
import Attendence from './components/Attendence/Attendence';
import Dashboard from './components/Dashboard/Dashboard';
import Feedback from './components/Feedback/Feedback';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Attend from './components/Mycourses/Attend';
import Fdback from './components/Mycourses/Fdback';
import Mycourses from './components/Mycourses/Mycourses';
import Edit from './components/MyProfile/Edit';
import Edit2 from './components/MyProfile/Edit2';
import Myprofile from './components/MyProfile/Myprofile';
import RequireAuth from './components/RequireAuth/RequireAuth';
import Signup from './components/Signup/Signup';
import useAdmin from './components/useAdmin/useAdmin';
import Child from './components/Users/Child';
import Editn from './components/Users/Editn';
import Myprofilee from './components/Users/Myprofilee';
import Update from './components/Users/Update';
import User from './components/Users/User';
import Views from './components/Users/Views';
import auth from './firebase.init';

function App() {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
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
        <Route path='/dashboard/myprofile/editn/:enID' element={<Editn></Editn>}></Route>
        <Route path='/dashboard/:userID' element={<Child></Child>}></Route>
        <Route path='/dashboards/:viewID' element={<Views></Views>}></Route>
        <Route path='/dashboardss/:editID' element={<Update></Update>}></Route>
        <Route path='/dashboardp/:pID' element={<Myprofilee></Myprofilee>}></Route>
        <Route path='/dashboard/attend/:adID' element={<Attend></Attend>}></Route>
        <Route path='/dashboard/feedb/:fdID' element={<Fdback></Fdback>}></Route>
        <Route path='/dashboard' element={<RequireAuth>
          <Dashboard></Dashboard>
        </RequireAuth>}>
          {
            admin ?   <Route index element={<User></User>}></Route> :  <Route index element={<Myprofile></Myprofile>}></Route>
          }
          <Route index element={<User></User>}></Route>
          {/* <Route path='addusers' element={<Addusers></Addusers>}></Route> */}
          {/* <Route path='myprofile' element={<Myprofile></Myprofile>}></Route> */}
          <Route path='mycourse' element={<Mycourses></Mycourses>}></Route>
          <Route path='attc' element={<Attendence></Attendence>}></Route>
          <Route path='feedbk' element={<Feedback></Feedback>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
