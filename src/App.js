
import './App.css';
import UserData from './components/UserData';
import MainScreen from './components/MainScreen';

import { Route, Routes } from 'react-router-dom';

function App() {

  return (
    <div className="centered-container">
      <Routes>
        <Route path='/' element={<MainScreen />} />
        <Route path='/data' element={<UserData />} />
      </Routes>
    </div>
  );
}

export default App;
