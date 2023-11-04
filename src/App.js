import './App.css';
import {HashRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Welcome from './pages/Welcome';
import Logros from './pages/Logros';
import Restore from './pages/Restore';
import Terminos from './pages/Terminos';
import NewHabit from './pages/habit/NewHabit';
// BrowserRouter
import Verification from './pages/Verification'
import Confirm from './pages/Confirm'
// import Example from './pages/Example';

function App() {
  let user = localStorage.getItem('user');
  //https://stackoverflow.com/questions/52931183/how-to-save-variables-to-localstorage-in-reactjs
  // localStorage.setItem('user', );

  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <Navigate to={user === null?"/signup":"/logros"} replace />
        }/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/welcome" element={<Welcome/>}/>
        <Route path="/logros" element={<Logros/>}/>
        <Route path="/terminos" element={<Terminos/>}/>
        <Route path="/restore" element={<Restore/>}/>
        <Route path="/verification" element={<Verification/>}/>
        <Route path="/confirm" element={<Confirm/>}/>
        <Route path="/habits">
          <Route path='new' element={<NewHabit/>}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;