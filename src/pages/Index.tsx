import Header from "@/components/Header";
import Banner from "@/components/Banner";
import ProductHighlights from "@/components/ProductHighlights";
import LoyaltyBenefits from "@/components/LoyaltyBenefits";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import AdditionalBanners from "@/components/AdditionalBanners";
import { useTranslation } from "react-i18next";
import { useAuth } from "@/hooks/useAuth";
import { getCountryFromHostname } from "@/i18n/config";
import { useEffect } from "react";
import { toast } from "sonner";
import { getCookie, setCookie } from "@/utils/cookieUtils";

const Index = () => {
  const { i18n, t } = useTranslation();
  const country = getCountryFromHostname();
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    const hasAcceptedCookies = getCookie('cookiesAccepted');
    
    if (!hasAcceptedCookies) {
      toast("Política de Cookies", {
        description: t('cookies.message', 'Este site utiliza cookies para melhorar sua experiência.'),
        action: {
          label: t('cookies.accept', 'Aceitar'),
          onClick: () => {
            setCookie('cookiesAccepted', 'true', 365);
          },
        },
        duration: Infinity,
        position: "bottom-center",
        className: "bg-white border border-gray-200 shadow-lg",
      });
    }
  }, [t]);

  // Componentes específicos por país
  const shouldShowFAQ = country === 'BR';

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1">
        <Banner />
        {isAuthenticated && <ProductHighlights />}
        <LoyaltyBenefits />
        {shouldShowFAQ && <FAQ />}
        <AdditionalBanners />
      </main>
      <Footer />
    </div>
  );
};

export default Index;