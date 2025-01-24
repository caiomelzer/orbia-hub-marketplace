const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Sobre a Orbia</h3>
            <ul className="space-y-2">
              <li>Quem Somos</li>
              <li>Nossa História</li>
              <li>Trabalhe Conosco</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Produtos</h3>
            <ul className="space-y-2">
              <li>Fertilizantes</li>
              <li>Defensivos</li>
              <li>Sementes</li>
              <li>Equipamentos</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Fidelidade</h3>
            <ul className="space-y-2">
              <li>Como Funciona</li>
              <li>Vantagens</li>
              <li>Regulamento</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <ul className="space-y-2">
              <li>Fale Conosco</li>
              <li>SAC</li>
              <li>Ouvidoria</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/20 text-center">
          <p>&copy; 2024 Orbia. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;