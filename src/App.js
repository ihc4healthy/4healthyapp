import './App.css';
import {HashRouter as Router, Routes, Route} from 'react-router-dom';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import Welcome from './pages/Welcome';
// BrowserRouter
// import Example from './pages/Example';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signup/>}/>
        <Route path="/singin" element={<Signin/>}/>
        <Route path="/welcome" element={<Welcome/>}/>
      </Routes>
      {/* <Example/> */}
    </Router>
  );
}

export default App;
