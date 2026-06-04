import { Ruler } from 'lucide-react';
import { motion, type Variants } from 'framer-motion';

import { createWhatsAppUrl } from '../../lib/whatsapp';
import { ButtonLink } from '../ui/ButtonLink';
import { Container } from '../ui/Container';

const ctaVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 42,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: 'easeOut',
      staggerChildren: 0.12,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 26,
    filter: 'blur(8px)',
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.62,
      ease: 'easeOut',
    },
  },
};

export function CtaSection() {
  return (
    <section id="contato" className="cta-section">
      <Container>
        <motion.div
          className="cta-section__content"
          variants={ctaVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
        >
          <motion.div className="cta-section__icon" variants={itemVariants}>
            <Ruler size={68} />
          </motion.div>

          <motion.h2 variants={itemVariants}>
            Pronto para começar seu projeto?
          </motion.h2>

          <motion.p variants={itemVariants}>
            Entre em contato para uma consulta e transforme suas ideias em um
            ambiente planejado premium.
          </motion.p>

          <motion.div variants={itemVariants}>
            <ButtonLink href={createWhatsAppUrl()} variant="gold">
              Solicitar Orçamento Grátis
            </ButtonLink>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}