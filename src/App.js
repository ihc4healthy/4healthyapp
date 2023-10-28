import './App.css';
import Signin from './pages/Signin';
import {HashRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import Signup from './pages/Signup';
import Welcome from './pages/Welcome';
import Logros from './pages/Logros';
import Restore from './pages/Restore';
import Terminos from './pages/Terminos';
// BrowserRouter
import Restore from './pages/Restore';
import Terminos from './pages/Terminos';
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
        <Route path="/singin" element={<Signin/>}/>
        <Route path="/" element={
          <Navigate to={user === null?"/signup":"/logros"} replace />
        }/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/welcome" element={<Welcome/>}/>
        <Route path="/logros" element={<Logros/>}/>
        <Route path="/terminos" element={<Terminos/>}/>
        <Route path="/restore" element={<Restore/>}/>
        <Route path="/" element={<Restore/>}/>
        <Route path="/Signin" element={<Signin/>}/>
        <Route path="/welcome" element={<Welcome/>}/>
        <Route path="/Terminos" element={<Terminos/>}/>
        <Route path="/Verification" element={<Verification/>}/>
        <Route path="/Confirm" element={<Confirm/>}/>
      </Routes>
    </Router>
  );
}

export default App;