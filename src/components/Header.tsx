import { Search, User, ShoppingCart, MapPin } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const Header = () => {
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const { t } = useTranslation();

  return (
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

            <Button variant="ghost" className="flex items-center gap-2 text-white hover:text-white/90">
              <User className="h-5 w-5" />
              <span className="hidden sm:inline">{t('header.login')}</span>
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
  );
};

export default Header;