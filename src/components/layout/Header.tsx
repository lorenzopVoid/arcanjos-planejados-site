import { Menu } from 'lucide-react';

import logo from '../../assets/logo/arcanjos-logo.svg';
import { company, navigation } from '../../data/site';
import { createWhatsAppUrl } from '../../lib/whatsapp';
import { ButtonLink } from '../ui/ButtonLink';
import { Container } from '../ui/Container';

export function Header() {
  return (
    <header className="site-header">
      <Container className="site-header__content">
        <a href="#inicio" className="brand" aria-label={company.name}>
          <img src={logo} alt="Logo Arcanjos Planejados" />
          <span>{company.name}</span>
        </a>

        <nav className="site-header__nav" aria-label="Navegação principal">
          {navigation.map((item) => (
            <a key={item.href} href={item.href} data-label={item.label}>
              <span>{item.label}</span>
            </a>
          ))}
        </nav>

        <ButtonLink
          href={createWhatsAppUrl()}
          variant="light"
          className="site-header__cta"
          target="_blank"
          rel="noreferrer"
        >
          Solicitar Orçamento
        </ButtonLink>

        <button className="site-header__menu" type="button" aria-label="Abrir menu">
          <Menu size={28} />
        </button>
      </Container>
    </header>
  );
}