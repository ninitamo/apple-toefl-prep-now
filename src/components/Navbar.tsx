
import { useState } from 'react';
import { Menu, X, BookOpen, User, LogOut, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { ThemeToggle } from '@/components/ThemeToggle';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const testItems = [
    {
      name: 'Full Test',
      href: '/practice/full-tests',
      description: 'Practice full free TOEFL test'
    },
    {
      name: 'Individual Sections',
      href: '/practice/sections',
      description: 'Practice individual free TOEFL sections'
    }
  ];

  const materialsItems = [
    {
      name: 'Reading',
      href: '/materials/reading',
      description: 'Reading practice materials and exercises'
    },
    {
      name: 'Writing',
      href: '/materials/writing',
      description: 'Writing practice materials and exercises'
    },
    {
      name: 'Listening',
      href: '/materials/listening',
      description: 'Listening practice materials and exercises'
    },
    {
      name: 'Speaking',
      href: '/materials/speaking',
      description: 'Speaking practice materials and exercises'
    }
  ];

  const articlesFaqItems = [
    {
      name: 'Articles',
      href: '/articles',
      description: 'TOEFL preparation articles and tips'
    },
    {
      name: 'FAQ',
      href: '/faq',
      description: 'Frequently asked questions about TOEFL'
    }
  ];

  const otherNavItems = [
    { 
      name: 'About us', 
      href: '/about',
      description: 'Learn more about our TOEFL preparation platform and team'
    },
    { 
      name: 'Contact', 
      href: '/contact',
      description: 'Get in touch with our support team for help and questions'
    },
  ];

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  const handleAuthClick = () => {
    if (user) {
      navigate('/practice/sections');
    } else {
      navigate('/auth');
    }
  };

  return (
    <TooltipProvider>
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200/50 dark:border-gray-700/50 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2 cursor-pointer" onClick={() => navigate('/')}>
              <BookOpen className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              <span className="text-xl font-semibold text-gray-900 dark:text-gray-100">TOEFL Prep</span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors duration-200 text-sm font-medium">
                      Tests
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="p-4 w-80">
                        {testItems.map((item) => (
                          <Link
                            key={item.name}
                            to={item.href}
                            className="block p-3 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                          >
                            <div className="font-medium text-gray-900 dark:text-gray-100">{item.name}</div>
                            <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">{item.description}</div>
                          </Link>
                        ))}
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors duration-200 text-sm font-medium">
                      Materials
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="p-4 w-80">
                        {materialsItems.map((item) => (
                          <Link
                            key={item.name}
                            to={item.href}
                            className="block p-3 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                          >
                            <div className="font-medium text-gray-900 dark:text-gray-100">{item.name}</div>
                            <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">{item.description}</div>
                          </Link>
                        ))}
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors duration-200 text-sm font-medium">
                      Articles / FAQ
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="p-4 w-80">
                        {articlesFaqItems.map((item) => (
                          <Link
                            key={item.name}
                            to={item.href}
                            className="block p-3 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                          >
                            <div className="font-medium text-gray-900 dark:text-gray-100">{item.name}</div>
                            <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">{item.description}</div>
                          </Link>
                        ))}
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>

              {otherNavItems.map((item) => (
                <Tooltip key={item.name}>
                  <TooltipTrigger asChild>
                    <Link
                      to={item.href}
                      className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors duration-200 text-sm font-medium"
                    >
                      {item.name}
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="max-w-xs text-sm">{item.description}</p>
                  </TooltipContent>
                </Tooltip>
              ))}
            </div>

            <div className="flex items-center space-x-2">
              <ThemeToggle />
              
              <div className="md:hidden">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100"
                >
                  {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
              </div>
            </div>
          </div>

          {isMenuOpen && (
            <div className="md:hidden absolute top-16 left-0 right-0 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-b border-gray-200/50 dark:border-gray-700/50">
              <div className="px-4 py-4 space-y-4">
                <div>
                  <div className="font-medium text-gray-900 dark:text-gray-100 mb-2">Tests</div>
                  <div className="pl-4 space-y-2">
                    {testItems.map((item) => (
                      <div key={item.name}>
                        <Link
                          to={item.href}
                          className="block text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors duration-200"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="font-medium text-gray-900 dark:text-gray-100 mb-2">Materials</div>
                  <div className="pl-4 space-y-2">
                    {materialsItems.map((item) => (
                      <div key={item.name}>
                        <Link
                          to={item.href}
                          className="block text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors duration-200"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="font-medium text-gray-900 dark:text-gray-100 mb-2">Articles / FAQ</div>
                  <div className="pl-4 space-y-2">
                    {articlesFaqItems.map((item) => (
                      <div key={item.name}>
                        <Link
                          to={item.href}
                          className="block text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors duration-200"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {otherNavItems.map((item) => (
                  <div key={item.name}>
                    <Link
                      to={item.href}
                      className="block text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors duration-200 font-medium"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{item.description}</p>
                  </div>
                ))}

                {user ? (
                  <div className="space-y-2 pt-4 border-t border-gray-200 dark:border-gray-700">
                    <div className="text-sm text-gray-600 dark:text-gray-300 px-2">
                      Signed in as: {user.email}
                    </div>
                    <Button
                      onClick={() => { navigate('/practice/sections'); setIsMenuOpen(false); }}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-full"
                    >
                      Free Practice Tests
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
                  <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                    <Button
                      onClick={() => { handleAuthClick(); setIsMenuOpen(false); }}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-full"
                    >
                      Sign In
                    </Button>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </nav>
    </TooltipProvider>
  );
};

export default Navbar;
