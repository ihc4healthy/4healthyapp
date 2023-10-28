import './App.css';
import {HashRouter as Router, Routes, Route} from 'react-router-dom';
import Signin from './pages/Signin';
import Welcome from './pages/Welcome';
<<<<<<< HEAD
import Logros from './pages/Logros';

=======
import Restore from './pages/Restore';
import Terminos from './pages/Terminos';
>>>>>>> 10a4f55b00e624d078913eb8e997aaaef0f3f0ed
// BrowserRouter
// import Example from './pages/Example';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signin" element={<Signin/>}/>
        <Route path="/welcome" element={<Welcome/>}/>
<<<<<<< HEAD
        <Route path="/logros" element={<Logros/>}/>
=======
        <Route path="/Terminos" element={<Terminos/>}/>
        <Route path="/Restore" element={<Restore/>}/>
>>>>>>> 10a4f55b00e624d078913eb8e997aaaef0f3f0ed
      </Routes>
      {/* <Example/> */}
    </Router>
  );
}

export default App;
