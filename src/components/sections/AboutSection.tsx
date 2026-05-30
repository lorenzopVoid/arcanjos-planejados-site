import { motion, Variants } from 'framer-motion';
import { Check, Crown, Ruler, ShieldCheck } from 'lucide-react';

import { createWhatsAppUrl } from '../../lib/whatsapp';
import { ButtonLink } from '../ui/ButtonLink';
import { Container } from '../ui/Container';
import { BrandMarqueeSection } from './BrandMarqueeSection';

const benefits = [
  'Projetos por ambiente',
  'Materiais selecionados',
  'Acabamento profissional',
  'Garantia contratual',
  'Montagem técnica',
  'Suporte pós-venda',
];

const textGroup: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.13,
      delayChildren: 0.1,
    },
  },
};

const textItem: Variants = {
  hidden: {
    opacity: 0,
    y: 34,
    filter: 'blur(8px)',
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.75,
      ease: 'easeOut',
    },
  },
};

const benefitGroup: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.15,
    },
  },
};

const benefitItem: Variants = {
  hidden: {
    opacity: 0,
    y: 18,
    scale: 0.96,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.45,
      ease: 'easeOut',
    },
  },
};

const imagePrimary: Variants = {
  hidden: {
    opacity: 0,
    y: 48,
    scale: 0.96,
    clipPath: 'inset(12% 0% 0% 0% round 32px)',
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    clipPath: 'inset(0% 0% 0% 0% round 32px)',
    transition: {
      duration: 0.9,
      ease: 'easeOut',
    },
  },
};

const imageSecondary: Variants = {
  hidden: {
    opacity: 0,
    x: 48,
    y: 36,
    scale: 0.94,
    clipPath: 'inset(0% 0% 18% 0% round 28px)',
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    clipPath: 'inset(0% 0% 0% 0% round 28px)',
    transition: {
      duration: 0.9,
      delay: 0.18,
      ease: 'easeOut',
    },
  },
};

const floatingTop: Variants = {
  hidden: {
    opacity: 0,
    y: -18,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.65,
      delay: 0.38,
      ease: 'easeOut',
    },
  },
};

const floatingBottom: Variants = {
  hidden: {
    opacity: 0,
    y: 22,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.65,
      delay: 0.5,
      ease: 'easeOut',
    },
  },
};

export function AboutSection() {
  return (
    <section id="sobre" className="section about-section">
      <BrandMarqueeSection />

      <Container className="about-section__grid">
        <motion.div
          className="about-section__content"
          variants={textGroup}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.35 }}
        >
          <motion.span className="eyebrow eyebrow--dark" variants={textItem}>
            <Crown size={18} /> Alto padrão
          </motion.span>

          <motion.h2 variants={textItem}>
            Marcenaria planejada para cada ambiente da sua casa ou empresa.
          </motion.h2>

          <motion.p variants={textItem}>
            A Arcanjos Planejados desenvolve cozinhas, closets, dormitórios, salas, banheiros,
            escritórios e áreas externas com foco em aproveitamento de espaço, estética e rotina.
          </motion.p>

          <motion.div
            className="benefit-grid"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{
              duration: 0.6,
              ease: 'easeOut',
            }}
          >
            {benefits.map((benefit, index) => (
              <motion.div
                className="benefit-item"
                key={benefit}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.07,
                  ease: 'easeOut',
                }}
              >
                <Check size={22} />
                <span>{benefit}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={textItem}>
            <ButtonLink href={createWhatsAppUrl()} variant="dark">
              Agendar Consulta
            </ButtonLink>
          </motion.div>
        </motion.div>

        <motion.div
          className="about-section__media"
          aria-label="Ambientes planejados premium"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.25 }}
        >
          <motion.div className="floating-card floating-card--top" variants={floatingTop}>
            <Ruler size={22} />
            <strong>100%</strong>
            <span>sob medida</span>
          </motion.div>

          <motion.img
            className="about-section__image about-section__image--primary"
            src="https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&fit=crop&w=1200&q=90"
            alt="Cozinha planejada premium"
            variants={imagePrimary}
          />

          <motion.img
            className="about-section__image about-section__image--secondary"
            src="https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=1200&q=90"
            alt="Sala planejada com painel"
            variants={imageSecondary}
          />

          <motion.div className="floating-card floating-card--bottom" variants={floatingBottom}>
            <ShieldCheck size={22} />
            <strong>Garantia</strong>
            <span>contratual</span>
          </motion.div>
        </motion.div>
      </Container>

      <BrandMarqueeSection reverse />
    </section>
  );
}
