import { Card, CardContent } from "@/components/ui/card";

const benefits = [
  {
    id: 1,
    title: "Pontos em Dobro",
    description: "Acumule pontos em dobro nas primeiras compras",
  },
  {
    id: 2,
    title: "Descontos Exclusivos",
    description: "Aproveite descontos especiais para membros",
  },
  {
    id: 3,
    title: "Suporte Prioritário",
    description: "Atendimento especializado para suas necessidades",
  },
];

const LoyaltyBenefits = () => {
  return (
    <section className="py-16 bg-neutral">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Programa de Fidelidade Orbia
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit) => (
            <Card key={benefit.id} className="text-center p-6">
              <CardContent>
                <h3 className="text-xl font-semibold mb-4 text-primary">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LoyaltyBenefits;