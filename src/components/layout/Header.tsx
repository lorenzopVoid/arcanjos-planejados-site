import { useState } from 'react';
import { Menu, X } from 'lucide-react';

import logo from '../../assets/logo/arcanjos-logo.svg';
import { company, navigation } from '../../data/site';
import { createWhatsAppUrl } from '../../lib/whatsapp';
import { ButtonLink } from '../ui/ButtonLink';
import { Container } from '../ui/Container';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={`site-header ${isMenuOpen ? 'site-header--open' : ''}`}>
      <Container className="site-header__content">
        <a href="/#inicio" className="brand" aria-label={company.name} onClick={closeMenu}>
          <img src={logo} alt="Logo Arcanjos Planejados" />

          <span className="brand__mobile-title">
            <strong>Arcanjos</strong>
            <small>Planejados</small>
          </span>
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

        <button
          className="site-header__menu"
          type="button"
          aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </Container>

      <div className="site-header__mobile-panel">
        <nav className="site-header__mobile-nav" aria-label="Navegação mobile">
          {navigation.map((item, index) => (
            <a
              key={item.href}
              href={item.href}
              onClick={closeMenu}
              style={{ transitionDelay: `${index * 55}ms` }}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <ButtonLink
          href={createWhatsAppUrl()}
          variant="light"
          className="site-header__mobile-cta"
          target="_blank"
          rel="noreferrer"
          onClick={closeMenu}
        >
          Solicitar Orçamento
        </ButtonLink>
      </div>
    </header>
  );
}