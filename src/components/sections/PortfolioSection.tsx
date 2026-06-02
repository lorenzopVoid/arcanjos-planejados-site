import { motion, Variants } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

import { portfolioCategories } from '../../data/portfolio';
import { Container } from '../ui/Container';
import { SectionHeader } from '../ui/SectionHeader';

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

export function PortfolioSection() {
  const navigate = useNavigate();

  const categories = portfolioCategories.filter(
    (category) => category.id !== 'todos'
  );

  return (
    <section id="portfolio" className="section portfolio-section">
      <Container>
        <SectionHeader
          eyebrow="Portfólio"
          title="Ambientes planejados"
          description="Escolha uma categoria e explore projetos desenvolvidos para transformar cada espaço."
        />
      </Container>

      <motion.div
        className="portfolio-category-showcase"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        {categories.map((category) => (
          <motion.button
            key={category.id}
            type="button"
            className={`portfolio-category-card portfolio-category-card--${category.id}`}
            variants={cardVariants}
            onClick={() => navigate(`/portfolio/${category.id}`)}
          >
            <div className="portfolio-category-card__content">
              <h3>{category.label}</h3>

              <span className="portfolio-category-card__link">
                Ver projetos <ArrowUpRight size={18} />
              </span>
            </div>
          </motion.button>
        ))}
      </motion.div>
    </section>
  );
}