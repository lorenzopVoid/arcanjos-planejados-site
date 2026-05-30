import { motion, Variants } from 'framer-motion';

import { processSteps } from '../../data/process';
import { Container } from '../ui/Container';

const processImages = [
  'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1200&q=90',
  'https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=1200&q=90',
  'https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&w=1200&q=90',
  'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=90',
  'https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&fit=crop&w=1200&q=90',
];

const cardVariants: Variants = {
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
      duration: 0.65,
      ease: 'easeOut',
    },
  },
};

export function ProcessSection() {
  return (
    <section id="processo" className="section process-section">
      <Container>
        <motion.div
          className="process-section__header"
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.75, ease: 'easeOut' }}
        >
          <span>Processo</span>
          <h2>Como Funciona</h2>
          <p>
            Do projeto à entrega, cada etapa é conduzida com clareza e padrão
            profissional.
          </p>
        </motion.div>

        <motion.div
          className="process-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.18 }}
        >
          {processSteps.map((step, index) => (
            <motion.article
              className={`process-step process-step--${index + 1}`}
              key={step.number}
              variants={cardVariants}
            >
              <div className="process-step__image-wrap">
                <img
                  src={processImages[index]}
                  alt=""
                  className="process-step__image"
                />
              </div>

              <div className="process-step__shade" />

              <div className="process-step__content">
                <span className="process-step__number">{step.number}</span>

                <div className="process-step__body">
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}