import './App.css';
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Characters } from './pages/Characters';
import { Locations } from './pages/Locations';
import { Episodes } from './pages/Episodes';


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
        <Route
          path='/locations'
          element={<Locations />}
        />
        <Route
          path='/episodes'
          element={<Episodes />}
        />
      </Routes>
    </Router>
  )
}

export default App
