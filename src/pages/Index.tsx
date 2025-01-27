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

const Index = () => {
  const { i18n } = useTranslation();
  const country = getCountryFromHostname();
  const { isAuthenticated } = useAuth();

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