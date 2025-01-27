import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import { getHighlightedProducts } from "@/services/api";
import { useTranslation } from "react-i18next";

const ProductHighlights = () => {
  const { t } = useTranslation();
  const { data: products = [], isLoading, error } = useQuery({
    queryKey: ['highlightedProducts'],
    queryFn: getHighlightedProducts,
  });

  const displayProducts = window.innerWidth < 768 ? products.slice(0, 3) : products;

  if (isLoading) {
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-primary">{t('products.highlights')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((index) => (
              <Card key={index} className="animate-pulse">
                <CardContent className="p-4">
                  <div className="aspect-square rounded-lg bg-neutral mb-4" />
                  <div className="h-4 bg-neutral rounded w-3/4 mb-2" />
                  <div className="h-4 bg-neutral rounded w-1/4" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center text-red-500">
          {t('products.error')}
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-primary">{t('products.highlights')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayProducts.map((product) => (
            <Card key={product.id} className="group hover:shadow-lg transition-shadow">
              <CardContent className="p-4">
                <div className="aspect-square rounded-lg overflow-hidden bg-neutral mb-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                <p className="text-primary font-bold">{product.price}</p>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-secondary hover:bg-secondary-dark">
                  {t('products.addToCart')}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductHighlights;