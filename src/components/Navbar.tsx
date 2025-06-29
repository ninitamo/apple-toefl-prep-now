
import { useState } from 'react';
import { Menu, X, BookOpen, User, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const navItems = [
    { name: 'Practice Individual Section', href: '/practice/sections' },
    { name: 'Practice Full Test', href: '/practice/full-tests' },
    { name: 'About Test', href: '/exam-info' },
    { name: 'Contact', href: '/contact' },
  ];

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  const handleAuthClick = () => {
    if (user) {
      navigate('/practice/reading');
    } else {
      navigate('/auth');
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-lg border-b border-slate-200/50 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => navigate('/')}>
            <BookOpen className="h-8 w-8 text-slate-700" />
            <span className="text-xl font-light text-slate-800">TOEFL Prep</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-slate-600 hover:text-slate-900 transition-colors duration-200 text-sm font-light relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-slate-700 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-600 hover:text-slate-900"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white/95 backdrop-blur-lg border-b border-slate-200/50">
            <div className="px-4 py-6 space-y-6">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="block text-slate-600 hover:text-slate-900 transition-colors duration-200 font-light"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}

              {user ? (
                <div className="space-y-3 pt-4 border-t border-slate-200">
                  <div className="text-sm text-slate-600 font-light px-2">
                    Signed in as: {user.email}
                  </div>
                  <Button
                    onClick={() => { navigate('/exam-info'); setIsMenuOpen(false); }}
                    className="w-full bg-slate-700 hover:bg-slate-800 text-white rounded-full font-light"
                  >
                    Practice Tests
                  </Button>
                  <Button
                    onClick={() => { handleSignOut(); setIsMenuOpen(false); }}
                    variant="outline"
                    className="w-full border-slate-300 text-slate-700 hover:bg-slate-50 font-light"
                  >
                    Sign Out
                  </Button>
                </div>
              ) : (
                <Button
                  onClick={() => { handleAuthClick(); setIsMenuOpen(false); }}
                  className="w-full bg-slate-700 hover:bg-slate-800 text-white rounded-full font-light"
                >
                  Sign In
                </Button>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
