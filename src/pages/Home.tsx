import { Link } from 'react-router-dom';
import Background3D from '../components/Background3D';
import SocialLinks from '../components/SocialLinks';

export default function Home() {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-[#fafafa] text-zinc-800">
      <Background3D />
      <div className="relative container mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-8">
          <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden shadow-xl">
            <img
              src="https://res.cloudinary.com/dfbibvdhq/image/upload/f_auto,q_auto/yfybfen6hqtdmb1a4v8y"
              alt="Arunkumar N S"
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
            />
          </div>

          <div className="text-center space-y-4 backdrop-blur-sm bg-zinc-800/5 p-6 rounded-xl">
            <h1 className="text-3xl md:text-4xl font-bold">Arunkumar N S</h1>
            <p className="text-xl md:text-2xl text-zinc-600">Dev. Java/Cloud Computing</p>
          </div>

          <SocialLinks />

          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 mt-8">
            <Link
              to="/about"
              className="px-8 py-3 bg-zinc-800 text-zinc-100 rounded-full text-lg font-semibold hover:bg-zinc-700 transition-colors duration-300 transform hover:scale-105"
            >
              About Me
            </Link>
            <Link
              to="/projects"
              className="px-8 py-3 bg-zinc-100 backdrop-blur-sm border-2 border-zinc-800 text-zinc-800 rounded-full text-lg font-semibold hover:bg-zinc-200 transition-colors duration-300 transform hover:scale-105"
            >
              My Projects
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}