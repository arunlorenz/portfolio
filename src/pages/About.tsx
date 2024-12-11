import { useNavigate } from 'react-router-dom';
import { Code2 } from 'lucide-react';

export default function About() {
  const navigate = useNavigate();
  const yamlContent = `name: Arunkumar N S
role: Dev. Java/Cloud Computing
location: Tirupur, India
contact:
  email: arunkumarns543@gmail.com
  linkedin: linkedin.com/in/arunkumar-ns
  github: github.com/arunlorenz

skills:
  backend:
    - Java
    - Python
    - MySQL

  Cloud:
    - AWS
    - GCP
    - Docker

experience:
  - company: Zoho Corporation
    role: Software Development Intern   -   July 2024 to Present
    highlights:
      - Developed new features and resolved critical bugs in the payroll product
      - Collaborated with cross-functional teams, including front-end and other payroll modules
       to implement and refine business logic for salary components in Zoho Payroll.

education:
  degree: Bachelor's in Electronics and Communication Engineering
  college: Karpagam Institute of Technology - 2025`;


  const lines = yamlContent.split('\n');

  return (
    <div className="min-h-screen bg-zinc-900 text-zinc-100">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-zinc-800 rounded-t-lg p-4 flex items-center space-x-4 border-b border-zinc-700">
            <Code2 className="w-5 h-5 text-zinc-400" />
            <div className="flex items-center space-x-2">
              <div 
                className="w-3 h-3 rounded-full bg-red-500 cursor-pointer hover:bg-red-600 transition-colors duration-200"
                onClick={() => navigate('/')}
              />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <span className="text-sm text-zinc-400 font-mono">about.yml</span>
          </div>

          <div className="bg-zinc-800 rounded-b-lg overflow-hidden">
            <div className="p-6 font-mono text-sm overflow-x-auto">
              <table className="border-collapse w-full">
                <tbody>
                  {lines.map((line, index) => (
                    <tr key={index} className="hover:bg-zinc-700/50">
                      <td className="py-0.5 pr-6 text-right text-zinc-500 select-none w-12 border-r border-zinc-700">
                        {index + 1}
                      </td>
                      <td className="py-0.5 pl-6">
                        <pre className="text-zinc-100">
                          {line.startsWith('#') ? (
                            <span className="text-gray-500">{line}</span>
                          ) : line.startsWith('    - ') ? (
                            <span className="text-blue-400">{line}</span>
                          ) : (
                            <>
                              <span className="text-emerald-400">{line.match(/^[^:]+/)?.[0]}</span>
                              {line.includes(':') ? <span className="text-zinc-100">:</span> : ''}
                              <span className="text-amber-300">{line.match(/:.+/)?.[0]?.substring(1)}</span>
                            </>
                          )}
                        </pre>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}