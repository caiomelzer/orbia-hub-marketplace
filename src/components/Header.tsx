import { Search, User, ShoppingCart, MapPin } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useAuth } from "@/hooks/useAuth";
import { useToast } from "@/components/ui/use-toast";
import { Link } from "react-router-dom";

const Header = () => {
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const { t } = useTranslation();
  const { isAuthenticated, login, logout } = useAuth();
  const { toast } = useToast();

  const handleAuthAction = () => {
    if (isAuthenticated) {
      logout();
      toast({
        title: t('header.logoutSuccess'),
        description: t('header.logoutMessage'),
      });
    } else {
      login();
      toast({
        title: t('header.loginSuccess'),
        description: t('header.loginMessage'),
      });
    }
  };

  const categories = {
    'nav.product1': [
      { title: 'Nitrogenados', href: '/product/1/nitrogenados' },
      { title: 'Fosfatados', href: '/product/1/fosfatados' },
      { title: 'Potássicos', href: '/product/1/potassicos' },
    ],
    'nav.product2': [
      { title: 'Herbicidas', href: '/product/2/herbicidas' },
      { title: 'Fungicidas', href: '/product/2/fungicidas' },
      { title: 'Inseticidas', href: '/product/2/inseticidas' },
    ],
    'nav.product3': [
      { title: 'Premium A', href: '/product/3/premium-a' },
      { title: 'Premium B', href: '/product/3/premium-b' },
      { title: 'Premium C', href: '/product/3/premium-c' },
    ],
  };

  return (
    <>
      <header className="bg-[#00374b] shadow-md">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-white">Orbia</div>
            
            <div className="hidden md:flex flex-1 max-w-xl mx-4">
              <div className="relative w-full">
                <Input
                  type="search"
                  placeholder={t('header.search')}
                  className="w-full pl-10"
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-neutral-dark" />
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                className="md:hidden text-white"
                onClick={() => setIsSearchVisible(!isSearchVisible)}
              >
                <Search className="h-5 w-5" />
              </Button>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="flex items-center gap-2 text-white hover:text-white/90">
                    <MapPin className="h-5 w-5" />
                    <div className="text-left hidden sm:block">
                      <p className="text-xs text-neutral">{t('header.sendTo')}</p>
                      <p className="text-sm font-medium">{t('header.selectAddress')}</p>
                    </div>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-[300px] bg-white">
                  <DropdownMenuItem>
                    <div className="flex flex-col">
                      <span className="font-medium">{t('header.addAddress')}</span>
                      <span className="text-sm text-neutral-dark">{t('header.newAddress')}</span>
                    </div>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <Button 
                variant="ghost" 
                className="flex items-center gap-2 text-white hover:text-white/90"
                onClick={handleAuthAction}
              >
                <User className="h-5 w-5" />
                <span className="hidden sm:inline">
                  {isAuthenticated ? t('header.logout') : t('header.login')}
                </span>
              </Button>

              <Button variant="ghost" className="relative text-white hover:text-white/90">
                <ShoppingCart className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 bg-[#8bb8c8] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  0
                </span>
              </Button>
            </div>
          </div>

          {isSearchVisible && (
            <div className="md:hidden mt-4 animate-slideIn">
              <div className="relative">
                <Input
                  type="search"
                  placeholder={t('header.search')}
                  className="w-full pl-10"
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-neutral-dark" />
              </div>
            </div>
          )}
        </div>
      </header>
      <nav className="bg-[#004c66] text-white py-2 relative">
        <div className="container mx-auto px-4">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-white hover:text-[#8bb8c8] transition-colors">
                  {t('nav.product1')}
                </NavigationMenuTrigger>
                <NavigationMenuContent className="absolute left-0 w-screen">
                  <div className="w-full bg-white shadow-lg">
                    <div className="container mx-auto py-8">
                      <div className="grid grid-cols-3 gap-8">
                        {categories['nav.product1'].map((item) => (
                          <Link
                            key={item.href}
                            to={item.href}
                            className="block p-6 rounded-lg hover:bg-slate-50 transition-colors"
                          >
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                            <p className="text-sm text-gray-600">
                              Explore nossa linha completa de {item.title.toLowerCase()}
                            </p>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-white hover:text-[#8bb8c8] transition-colors">
                  {t('nav.product2')}
                </NavigationMenuTrigger>
                <NavigationMenuContent className="absolute left-0 w-screen">
                  <div className="w-full bg-white shadow-lg">
                    <div className="container mx-auto py-8">
                      <div className="grid grid-cols-3 gap-8">
                        {categories['nav.product2'].map((item) => (
                          <Link
                            key={item.href}
                            to={item.href}
                            className="block p-6 rounded-lg hover:bg-slate-50 transition-colors"
                          >
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                            <p className="text-sm text-gray-600">
                              Conheça nossos {item.title.toLowerCase()} de alta performance
                            </p>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {isAuthenticated && (
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-white hover:text-[#8bb8c8] transition-colors">
                    {t('nav.product3')}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="absolute left-0 w-screen">
                    <div className="w-full bg-white shadow-lg">
                      <div className="container mx-auto py-8">
                        <div className="grid grid-cols-3 gap-8">
                          {categories['nav.product3'].map((item) => (
                            <Link
                              key={item.href}
                              to={item.href}
                              className="block p-6 rounded-lg hover:bg-slate-50 transition-colors"
                            >
                              <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                              <p className="text-sm text-gray-600">
                                Produtos premium exclusivos para clientes
                              </p>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              )}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </nav>
      <div className="bg-yellow-50 text-yellow-800 py-2">
        <div className="container mx-auto px-4 text-sm text-center">
          {t('disclaimer.text', 'Atenção: Este site utiliza cookies para melhorar sua experiência. Ao continuar navegando, você concorda com nossa política de privacidade.')}
        </div>
      </div>
    </>
  );
};

export default Header;