import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { createWhatsAppUrl } from '../../lib/whatsapp';
import { ButtonLink } from '../ui/ButtonLink';
import { Container } from '../ui/Container';

export function HeroSection() {
  return (
    <section id="inicio" className="hero-section">
      <div className="hero-section__image" />
      <div className="hero-section__overlay" />

      <Container className="hero-section__content">
        <motion.div
          className="hero-section__text"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <span className="eyebrow eyebrow--light">
            <Sparkles size={18} /> Cozinhas, closets e ambientes planejados
          </span>
          <h1>Ambientes sob medida para uma rotina mais elegante.</h1>
          <p>
            Criamos cozinhas, salas, quartos, banheiros, escritórios e áreas externas planejadas
            com design funcional, acabamento premium e execução profissional.
          </p>
          <div className="hero-section__actions">
            <ButtonLink href={createWhatsAppUrl()} variant="gold">
              Iniciar Projeto <ArrowRight size={22} />
            </ButtonLink>
            <ButtonLink href="#portfolio" variant="outlineLight">
              Ver Portfólio
            </ButtonLink>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
