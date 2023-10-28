import './App.css';
import {HashRouter as Router, Routes, Route} from 'react-router-dom';
import Signin from './pages/Signin';
import Welcome from './pages/Welcome';
import Restore from './pages/Restore';
import Terminos from './pages/Terminos';
import Verification from './pages/Verification'
import Confirm from './pages/Confirm'
// import Example from './pages/Example';

function App() {
  return (
    <Router>
      <Routes>
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