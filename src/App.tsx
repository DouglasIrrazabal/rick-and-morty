import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import { Navbar } from './components/Navbar';
import { Characters } from './pages/Characters';
import { NotFound } from './pages/NotFound';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path='/'
          element={<Characters />}
        />
        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>
    </Router>
  )
}

export default App
