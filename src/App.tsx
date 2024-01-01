import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './pages/home/Home';
import { NotFound } from './pages/not-found/NotFound';
import {QueryClient, QueryClientProvider} from 'react-query';

const queryClient = new QueryClient();

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Navbar />
        <Routes>
          <Route
            path='/rick-and-morty/'
            element={<Home />}
          />
          <Route
            path="*"
            element={<NotFound />}
          />
        </Routes>
      </Router>
    </QueryClientProvider>
  )
}

export default App
