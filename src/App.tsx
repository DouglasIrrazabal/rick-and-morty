import './App.css';
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Characters } from './pages/Characters';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path='/'
          element={<Navigate to='/characters' replace={true} />}
        />
        <Route
          path="*"
          element={<Navigate to="/characters" replace={true} />}
        />
        <Route
          path='/characters'
          element={<Characters />}
        />
      </Routes>
    </Router>
  )
}

export default App
