import './App.css';
import {BrowserRouter, HashRouter, Routes, Route, Navigate} from 'react-router-dom';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Welcome from './pages/Welcome';
import Logros from './pages/Logros';
import Restore from './pages/Restore';
import Terminos from './pages/Terminos';
import NewHabit from './pages/habit/NewHabit';
import Verification from './pages/Verification'
import Confirm from './pages/Confirm'
import HabitsToday from './pages/habit/HabitsToday';
import HabitsList from './pages/habit/HabitsList';
// import Example from './pages/Example';

function App() {
  let user = localStorage.getItem('user');
  //https://stackoverflow.com/questions/52931183/how-to-save-variables-to-localstorage-in-reactjs
  // localStorage.setItem('user', );
  const useHash = true;
  const Router = useHash ? HashRouter : BrowserRouter;

  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <Navigate to={user === null?"/signup":"/habits"} replace />
        }/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/welcome" element={<Welcome/>}/>
        <Route path="/logros" element={<Logros/>}/>
        <Route path="/terminos" element={<Terminos/>}/>
        <Route path="/restore" element={<Restore/>}/>
        <Route path="/verification" element={<Verification/>}/>
        <Route path="/confirm" element={<Confirm/>}/>
        <Route path="habits">
          <Route path='' element={<HabitsList/>}/>
          <Route path='new' element={<NewHabit/>}/>
        </Route>
        <Route path='/today' element={<HabitsToday/>}/>
      </Routes>
    </Router>
  );
}

export default App;