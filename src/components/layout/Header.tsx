import { useState } from 'react';
import { Menu, X } from 'lucide-react';

import logo from '../../assets/logo/arcanjos-logo.svg';
import { company, navigation } from '../../data/site';
import { createWhatsAppUrl } from '../../lib/whatsapp';
import { ButtonLink } from '../ui/ButtonLink';
import { Container } from '../ui/Container';

function getNavigationHref(href: string) {
  if (href.startsWith('/')) return href;
  return `/${href}`;
}

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={`site-header ${isMenuOpen ? 'site-header--open' : ''}`}>
      <Container className="site-header__content">
        <a href="/#inicio" className="brand" aria-label={company.name} onClick={closeMenu}>
          <img className="brand__logo" src={logo} alt="Logo Arcanjos Planejados" />

          <span className="brand__mobile-text">
            <strong>Arcanjos</strong>
            <small>Planejados</small>
          </span>
        </a>

        <nav className="site-header__nav" aria-label="Navegação principal">
          {navigation.map((item) => (
            <a key={item.href} href={getNavigationHref(item.href)} data-label={item.label}>
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

        <button
          className="site-header__menu"
          type="button"
          aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          {isMenuOpen ? <X size={36} /> : <Menu size={36} />}
        </button>
      </Container>

      <div className="site-header__mobile-panel">
        <nav className="site-header__mobile-nav" aria-label="Navegação mobile">
          {navigation.map((item) => (
            <a key={item.href} href={getNavigationHref(item.href)} onClick={closeMenu}>
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href={createWhatsAppUrl()}
          className="button button--gold site-header__mobile-cta"
          target="_blank"
          rel="noreferrer"
          onClick={closeMenu}
        >
          Solicitar Orçamento
        </a>
      </div>
    </header>
  );
}