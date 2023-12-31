import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import { Navbar } from './components/Navbar';
import { Characters } from './components/Characters';
import { NotFound } from './components/NotFound';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path='/rick-and-morty'
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
