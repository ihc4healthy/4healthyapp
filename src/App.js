import './App.css';
import {HashRouter as Router, Routes, Route} from 'react-router-dom';
import Signin from './pages/Signin';
import Welcome from './pages/Welcome';
import Logros from './pages/Logros';

// BrowserRouter
// import Example from './pages/Example';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signin" element={<Signin/>}/>
        <Route path="/welcome" element={<Welcome/>}/>
        <Route path="/logros" element={<Logros/>}/>
      </Routes>
      {/* <Example/> */}
    </Router>
  );
}

export default App;
