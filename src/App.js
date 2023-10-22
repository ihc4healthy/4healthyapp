import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Signin from './pages/Signin';
// import Example from './pages/Example';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signin" element={<Signin/>}/>
      </Routes>
      {/* <Example/> */}
    </Router>
  );
}

export default App;
