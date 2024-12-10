import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#fafafa] flex items-center justify-center">
      <div className="text-center space-y-8 p-8">
        <div className="space-y-4">
          <h1 className="text-6xl font-bold text-zinc-800">404</h1>
          <h2 className="text-2xl text-zinc-600">Page Not Found</h2>
          <p className="text-zinc-500 max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>
        
        <Link
          to="/"
          className="inline-flex items-center px-6 py-3 bg-zinc-800 text-zinc-100 rounded-full text-lg font-semibold hover:bg-zinc-700 transition-all duration-300 transform hover:scale-105"
        >
          <Home className="w-5 h-5 mr-2" />
          Back to Home
        </Link>
      </div>
    </div>
  );
}