import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Signin from './pages/Signin';
import Welcome from './pages/Welcome';
// import Example from './pages/Example';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signin" element={<Signin/>}/>
        <Route path="/welcome" element={<Welcome/>}/>
      </Routes>
      {/* <Example/> */}
    </Router>
  );
}

export default App;
