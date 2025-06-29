
import { useState } from 'react';
import { Menu, X, BookOpen, User, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
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
    { name: 'Practice Individual Section', href: '/practice/full-tests' },
    { name: 'Practice Full Test', href: '/practice/sections' },
    { name: 'About Test', href: '/exam-info' },
    { name: 'Contact', href: '/contact' },

    // { name: 'Progress', href: '#progress' },
    // { name: 'About', href: '#about' },
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
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200/50 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => navigate('/')}>
            <BookOpen className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-semibold text-gray-900">TOEFL Prep</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-600 hover:text-gray-900 transition-colors duration-200 text-sm font-medium"
              >
                {item.name}
              </a>
            ))}

            {/* {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="flex items-center space-x-2">
                    <User className="h-4 w-4" />
                    <span className="text-sm">{user.email}</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={() => navigate('/practice/reading')}>
                    Practice Tests
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleSignOut} className="text-red-600">
                    <LogOut className="h-4 w-4 mr-2" />
                    Sign Out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button 
                onClick={handleAuthClick}
                className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6"
              >
                Sign In
              </Button>
            )} */}
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-gray-900"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white/95 backdrop-blur-md border-b border-gray-200/50">
            <div className="px-4 py-4 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block text-gray-600 hover:text-gray-900 transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}

              {user ? (
                <div className="space-y-2">
                  <div className="text-sm text-gray-600 px-2">
                    Signed in as: {user.email}
                  </div>
                  <Button
                    onClick={() => { navigate('/exam-info'); setIsMenuOpen(false); }}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-full"
                  >
                    Practice Tests
                  </Button>
                  <Button
                    onClick={() => { handleSignOut(); setIsMenuOpen(false); }}
                    variant="outline"
                    className="w-full"
                  >
                    Sign Out
                  </Button>
                </div>
              ) : (
                <Button
                  onClick={() => { handleAuthClick(); setIsMenuOpen(false); }}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-full"
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
