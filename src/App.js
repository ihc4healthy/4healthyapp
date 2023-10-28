import './App.css';
import {HashRouter as Router, Routes, Route} from 'react-router-dom';
import Signin from './pages/Signin';
import Welcome from './pages/Welcome';
import Restore from './pages/Restore';
import Terminos from './pages/Terminos';
// BrowserRouter
// import Example from './pages/Example';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signin" element={<Signin/>}/>
        <Route path="/welcome" element={<Welcome/>}/>
        <Route path="/Terminos" element={<Terminos/>}/>
        <Route path="/Restore" element={<Restore/>}/>
      </Routes>
      {/* <Example/> */}
    </Router>
  );
}

export default App;
