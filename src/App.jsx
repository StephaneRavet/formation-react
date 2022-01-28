import React, { useState } from 'react';
import Header from "./components/Header";
// import Test from "./components/Test";
import SimLogin from "./pages/SimLogin";
import UserList from "./pages/UserList";
import Counter from "./pages/Counter";
import Profile from './pages/Profile';
import { Route, Routes } from 'react-router-dom';
import Contact from './pages/Contact';
import Signup from './pages/Signup';

function App() {
  const [user, setUser] = useState('')

  return (
    <div>
      <Header user={user} />
      {/* <Test/> */}
      <div className='p-3'>
        <Routes>
          <Route path='/' element={<SimLogin setUser={setUser} />}></Route>
          <Route path='/users' element={<UserList />}></Route>
          <Route path='/profile/:id' element={<Profile />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/counter' element={<Counter />}></Route>
          <Route path='/signup' element={<Signup />}></Route>
          <Route path='*' element={<div>Page Not Found</div>}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
