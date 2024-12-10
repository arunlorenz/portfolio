import { Github, Linkedin, Mail } from 'lucide-react';

export default function SocialLinks() {
  return (
    <div className="flex space-x-6">
      <a
        href="https://github.com/arunlorenz"
        target="_blank"
        rel="noopener noreferrer"
        className="text-zinc-800 transform hover:scale-110 transition-transform duration-300"
      >
        <Github className="w-6 h-6" />
      </a>
      <a
        href="https://linkedin.com/in/arunkumar-ns"
        target="_blank"
        rel="noopener noreferrer"
        className="text-zinc-800 transform hover:scale-110 transition-transform duration-300"
      >
        <Linkedin className="w-6 h-6" />
      </a>
      <a
        href="mailto:arunkumarns543@gmail.com"
        className="text-zinc-800 transform hover:scale-110 transition-transform duration-300"
      >
        <Mail className="w-6 h-6" />
      </a>
    </div>
  );
}