import { Link } from 'react-router-dom';
import { Button } from '../ui/button';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm px-8 py-4 flex items-center justify-between">
      <h1 className="text-2xl font-bold text-primary">MindGraph Lite</h1>
      <div className="flex gap-4">
        <Button asChild>
          <Link to="/">Home</Link>
        </Button>
        <Button asChild>
          <Link to="/upload">Upload</Link>
        </Button>
        <Button asChild>
          <Link to="/explore">Explore</Link>
        </Button>
      </div>
    </nav>
  );
}