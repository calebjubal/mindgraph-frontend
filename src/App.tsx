import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Upload from './pages/Upload';
import Explore from './pages/Explore';
import Navbar from './components/layout/Navbar';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/explore" element={<Explore />} />
      </Routes>
    </div>
  );
}

export default App;