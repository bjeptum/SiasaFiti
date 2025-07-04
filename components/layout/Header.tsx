import Link from 'next/link';
import { Button } from '../ui/Button';

export function Header() {
  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">S</span>
            </div>
            <span className="text-xl font-bold text-gray-900">SiasaFiti</span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/dashboard" className="text-gray-600 hover:text-green-600 font-medium">
              Dashboard
            </Link>
            <Link href="/quizzes" className="text-gray-600 hover:text-green-600 font-medium">
              Quizzes
            </Link>
            <Link href="/budget" className="text-gray-600 hover:text-green-600 font-medium">
              Budget Sim
            </Link>
            <Link href="/news" className="text-gray-600 hover:text-green-600 font-medium">
              County News
            </Link>
          </nav>
          
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm">
              Sign In
            </Button>
            <Button size="sm">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}