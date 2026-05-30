import { motion, Variants } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

import { createWhatsAppUrl } from '../../lib/whatsapp';
import { ButtonLink } from '../ui/ButtonLink';
import { Container } from '../ui/Container';

const heroContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.15,
    },
  },
};

const heroItem: Variants = {
  hidden: {
    opacity: 0,
    y: 34,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: 'easeOut',
    },
  },
};

export function HeroSection() {
  return (
    <section id="inicio" className="hero-section">
      <motion.div
        className="hero-section__image"
        initial={{ scale: 1.06, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: false, amount: 0.45 }}
        transition={{
          duration: 1.2,
          ease: 'easeOut',
        }}
      />

      <motion.div
        className="hero-section__overlay"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, amount: 0.45 }}
        transition={{
          duration: 0.9,
          ease: 'easeOut',
        }}
      />

      <Container className="hero-section__content">
        <motion.div
          className="hero-section__text"
          variants={heroContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.45 }}
        >
          <motion.span className="eyebrow eyebrow--light" variants={heroItem}>
            <Sparkles size={18} /> Cozinhas, closets e ambientes planejados
          </motion.span>

          <motion.h1 variants={heroItem}>
            Ambientes sob medida para uma rotina mais elegante.
          </motion.h1>

          <motion.p variants={heroItem}>
            Criamos cozinhas, salas, quartos, banheiros, escritórios e áreas
            externas planejadas com design funcional, acabamento premium e
            execução profissional.
          </motion.p>

          <motion.div className="hero-section__actions" variants={heroItem}>
            <ButtonLink href={createWhatsAppUrl()} variant="gold">
              Iniciar Projeto <ArrowRight size={22} />
            </ButtonLink>

            <ButtonLink href="#portfolio" variant="outlineLight">
              Ver Portfólio
            </ButtonLink>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}