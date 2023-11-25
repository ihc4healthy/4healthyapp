import './App.css';
import { useContext } from 'react';
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
import { UserContext } from './utils/UserConxtextProvider';
import CommunityList from './pages/community/CommunityList';
import NewComment from './pages/community/NewComment';
import Explora from './pages/Explora';
import Configuration from './pages/Configuration';// import Example from './pages/Example';
import Links from './pages/Links';
// import Example from './pages/Example';

function App() {
  const useHash = true;
  const Router = useHash ? HashRouter : BrowserRouter;
  const { user, setUser } = useContext(UserContext);

  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <Navigate to={user === null?"/signup":"/today"} replace />
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
        <Route path='/Comunitylist' element={<CommunityList/>}/>
        <Route path='/NewComment' element={<NewComment/>}/>
        <Route path='/explora' element={<Explora/>}/>
        <Route path='/configuration' element={<Configuration/>}/>
        <Route path='/Links' element={<Links/>}/>
      </Routes>
    </Router>
  );
}

export default App;