import { Mail, MapPin, Phone } from 'lucide-react';
import logo from '../../assets/logo/arcanjos-logo.png';
import { company } from '../../data/site';
import { Container } from '../ui/Container';

export function Footer() {
  return (
    <footer className="footer">
      <Container>
        <div className="footer__grid">
          <div className="footer__brand">
            <img src={logo} alt="Logo Arcanjos Planejados" />
            <p>Especialistas em móveis planejados para cozinhas, salas, quartos, escritórios, banheiros e áreas externas.</p>
          </div>

          <div>
            <h4>Serviços</h4>
            <a href="#servicos">Cozinhas Planejadas</a>
            <a href="#servicos">Salas Planejadas</a>
            <a href="#servicos">Quartos e Closets</a>
            <a href="#servicos">Banheiros e Áreas Externas</a>
          </div>

          <div>
            <h4>Empresa</h4>
            <a href="#inicio">Sobre Nós</a>
            <a href="#portfolio">Portfólio</a>
            <a href="#processo">Processo</a>
            <a href="#orcamento">Orçamento</a>
          </div>

          <div className="footer__contact">
            <h4>Contato</h4>
            {company.phones.map((phone) => (
              <p key={phone}><Phone size={18} /> {phone}</p>
            ))}
            <p><Mail size={18} /> {company.email}</p>
            <p><MapPin size={18} /> {company.address}</p>
          </div>
        </div>

        <p className="footer__copy">© 2026 Arcanjos Planejados. Todos os direitos reservados.</p>
      </Container>
    </footer>
  );
}
