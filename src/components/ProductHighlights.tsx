import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const products = [
  {
    id: 1,
    name: "Fertilizante Premium",
    price: "R$ 299,90",
    image: "/placeholder.svg",
  },
  {
    id: 2,
    name: "Defensivo Agrícola",
    price: "R$ 199,90",
    image: "/placeholder.svg",
  },
  {
    id: 3,
    name: "Sementes Selecionadas",
    price: "R$ 159,90",
    image: "/placeholder.svg",
  },
  {
    id: 4,
    name: "Kit Irrigação",
    price: "R$ 399,90",
    image: "/placeholder.svg",
  },
  {
    id: 5,
    name: "Adubo Orgânico",
    price: "R$ 89,90",
    image: "/placeholder.svg",
  },
  {
    id: 6,
    name: "Inseticida Natural",
    price: "R$ 129,90",
    image: "/placeholder.svg",
  },
  {
    id: 7,
    name: "Substrato Premium",
    price: "R$ 79,90",
    image: "/placeholder.svg",
  },
  {
    id: 8,
    name: "Kit Ferramentas",
    price: "R$ 249,90",
    image: "/placeholder.svg",
  },
];

const ProductHighlights = () => {
  const displayProducts = window.innerWidth < 768 ? products.slice(0, 3) : products;

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-primary">Produtos em Destaque</h2>
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
                  Adicionar ao Carrinho
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