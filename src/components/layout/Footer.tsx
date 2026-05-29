import { Mail, MapPin, Phone } from 'lucide-react';

import logo from '../../assets/logo/arcanjos-logo.svg';
import { company } from '../../data/site';
import { Container } from '../ui/Container';

export function Footer() {
  return (
    <footer className="footer">
      <Container>
        <div className="footer__grid">
          <div className="footer__brand">
            <img src={logo} alt="Logo Arcanjos Planejados" />

            <p>
              Especialistas em móveis planejados para cozinhas, salas,
              quartos, escritórios, banheiros e áreas externas.
            </p>
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

            <div className="footer__contact-list">
              <div className="footer__contact-item">
                <Phone size={16} />

                <div>
                  {company.phones.map((phone) => (
                    <a
                      key={phone}
                      href={`tel:+55${phone.replace(/\D/g, '')}`}
                    >
                      {phone}
                    </a>
                  ))}
                </div>
              </div>

              <div className="footer__contact-item">
                <Mail size={16} />

                <a href={`mailto:${company.email}`}>
                  {company.email}
                </a>
              </div>

              <div className="footer__contact-item">
                <MapPin size={16} />

                <span>{company.address}</span>
              </div>
            </div>
          </div>
        </div>

        <p className="footer__copy">
          © 2026 Arcanjos Planejados. Todos os direitos reservados.
        </p>
      </Container>
    </footer>
  );
}