import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

export default function Architecture() {
  return (
    <div className="min-h-screen bg-[#161617] flex items-center justify-center">
      <div className="text-center space-y-8 p-8">
        <div className="space-y-4">
          <img
              src="https://res.cloudinary.com/dfbibvdhq/image/upload/v1750143251/diagram-export-16-06-2025-18_30_01_tdaqcx.svg"
              alt="Architecture"
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
            />
        </div>
      </div>
    </div>
  );
}