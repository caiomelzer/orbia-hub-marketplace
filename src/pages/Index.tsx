import Header from "@/components/Header";
import Banner from "@/components/Banner";
import ProductHighlights from "@/components/ProductHighlights";
import LoyaltyBenefits from "@/components/LoyaltyBenefits";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import AdditionalBanners from "@/components/AdditionalBanners";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1">
        <Banner />
        <ProductHighlights />
        <LoyaltyBenefits />
        <FAQ />
        <AdditionalBanners />
      </main>
      <Footer />
    </div>
  );
};

export default Index;