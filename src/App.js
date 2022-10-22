import { Route, Routes } from 'react-router-dom';
import './App.css';
import Signup from './components/auth/Signup';
import Home from './components/Home';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
