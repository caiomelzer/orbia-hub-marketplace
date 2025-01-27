import { useParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useTranslation } from "react-i18next";

const Product = () => {
  const { id } = useParams();
  const { t } = useTranslation();

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">{t('product.details')}</h1>
        <p>{t('product.id')}: {id}</p>
      </main>
      <Footer />
    </div>
  );
};

export default Product;