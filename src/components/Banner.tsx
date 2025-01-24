import { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const banners = [
  {
    id: 1,
    title: "Produtos para sua Safra",
    description: "As melhores soluções para o agronegócio",
    image: "/placeholder.svg",
  },
  {
    id: 2,
    title: "Programa de Fidelidade",
    description: "Acumule pontos em suas compras",
    image: "/placeholder.svg",
  },
];

const Banner = () => {
  const [currentBanner, setCurrentBanner] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[400px] overflow-hidden bg-neutral">
      {banners.map((banner, index) => (
        <div
          key={banner.id}
          className={`absolute inset-0 transition-opacity duration-500 ${
            index === currentBanner ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${banner.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/30" />
          <div className="container mx-auto px-4 h-full flex items-center">
            <div className="text-white max-w-xl">
              <h2 className="text-4xl font-bold mb-4">{banner.title}</h2>
              <p className="text-xl mb-8">{banner.description}</p>
              <Button className="bg-primary hover:bg-primary-dark">
                Saiba mais
              </Button>
            </div>
          </div>
        </div>
      ))}
      
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
        {banners.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full ${
              index === currentBanner ? "bg-white" : "bg-white/50"
            }`}
            onClick={() => setCurrentBanner(index)}
          />
        ))}
      </div>
      
      <Button
        variant="ghost"
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white"
        onClick={() =>
          setCurrentBanner((prev) => (prev - 1 + banners.length) % banners.length)
        }
      >
        <ArrowLeft className="h-6 w-6" />
      </Button>
      
      <Button
        variant="ghost"
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white"
        onClick={() => setCurrentBanner((prev) => (prev + 1) % banners.length)}
      >
        <ArrowRight className="h-6 w-6" />
      </Button>
    </div>
  );
};

export default Banner;