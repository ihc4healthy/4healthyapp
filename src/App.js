import './App.css';
import Signin from './pages/Signin';
import {HashRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import Signup from './pages/Signup';
import Welcome from './pages/Welcome';
import Logros from './pages/Logros';
import Restore from './pages/Restore';
import Terminos from './pages/Terminos';
import NewHabit from './pages/habit/NewHabit';
// BrowserRouter
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
        <Route path="/signin" element={<Signin/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/welcome" element={<Welcome/>}/>
        <Route path="/logros" element={<Logros/>}/>
        <Route path="/terminos" element={<Terminos/>}/>
        <Route path="/restore" element={<Restore/>}/>
        <Route path="/habits">
          <Route path='new' element={<NewHabit/>}/>
        </Route>
      </Routes>
      {/* <Example/> */}
    </Router>
  );
}

export default App;
