import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Como funciona o programa de fidelidade?",
    answer: "Nosso programa de fidelidade permite que você acumule pontos em todas as suas compras. Cada R$ 1,00 gasto equivale a 1 ponto. Os pontos podem ser trocados por descontos em compras futuras ou produtos exclusivos.",
  },
  {
    question: "Qual o prazo de entrega dos produtos?",
    answer: "O prazo de entrega varia de acordo com a sua localização e os produtos selecionados. Em geral, entregamos em 3-7 dias úteis para as principais cidades do Brasil.",
  },
  {
    question: "Como posso rastrear meu pedido?",
    answer: "Após a confirmação do pedido, você receberá um código de rastreamento por e-mail. Com ele, você pode acompanhar o status da entrega através do nosso site ou aplicativo.",
  },
  {
    question: "Quais são as formas de pagamento aceitas?",
    answer: "Aceitamos cartões de crédito, boleto bancário, PIX e transferência bancária. Para compras corporativas, também oferecemos condições especiais de pagamento.",
  },
];

const FAQ = () => {
  return (
    <section className="py-16 bg-neutral">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-primary">
          Perguntas Frequentes
        </h2>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible>
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-secondary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;