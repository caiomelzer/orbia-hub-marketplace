const AdditionalBanners = () => {
  const banners = [
    {
      id: 1,
      title: "Soluções Sustentáveis",
      description: "Produtos que respeitam o meio ambiente",
      image: "/placeholder.svg",
    },
    {
      id: 2,
      title: "Tecnologia no Campo",
      description: "Inovação para aumentar sua produtividade",
      image: "/placeholder.svg",
    },
    {
      id: 3,
      title: "Suporte Especializado",
      description: "Equipe técnica sempre à disposição",
      image: "/placeholder.svg",
    },
  ];

  return (
    <section className="py-16 bg-neutral">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {banners.map((banner) => (
            <div
              key={banner.id}
              className="relative h-[200px] rounded-lg overflow-hidden"
            >
              <img
                src={banner.image}
                alt={banner.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white p-4">
                <h3 className="text-xl font-bold mb-2">{banner.title}</h3>
                <p className="text-center">{banner.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdditionalBanners;