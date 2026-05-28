import { Check, Crown, Ruler, ShieldCheck } from 'lucide-react';
import { createWhatsAppUrl } from '../../lib/whatsapp';
import { ButtonLink } from '../ui/ButtonLink';
import { Container } from '../ui/Container';

const benefits = [
  'Projetos por ambiente',
  'Materiais selecionados',
  'Acabamento profissional',
  'Garantia contratual',
  'Montagem técnica',
  'Suporte pós-venda',
];

export function AboutSection() {
  return (
    <section className="section about-section">
      <Container className="about-section__grid">
        <div className="about-section__content">
          <span className="eyebrow eyebrow--dark">
            <Crown size={18} /> Alto padrão
          </span>
          <h2>Marcenaria planejada para cada ambiente da sua casa ou empresa.</h2>
          <p>
            A Arcanjos Planejados desenvolve cozinhas, closets, dormitórios, salas, banheiros,
            escritórios e áreas externas com foco em aproveitamento de espaço, estética e rotina.
          </p>

          <div className="benefit-grid">
            {benefits.map((benefit) => (
              <div className="benefit-item" key={benefit}>
                <Check size={22} />
                <span>{benefit}</span>
              </div>
            ))}
          </div>

          <ButtonLink href={createWhatsAppUrl()} variant="dark">
            Agendar Consulta
          </ButtonLink>
        </div>

        <div className="about-section__media" aria-label="Ambientes planejados premium">
          <div className="floating-card floating-card--top">
            <Ruler size={22} />
            <strong>100%</strong>
            <span>sob medida</span>
          </div>

          <img
            className="about-section__image about-section__image--primary"
            src="https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&fit=crop&w=1200&q=90"
            alt="Cozinha planejada premium"
          />
          <img
            className="about-section__image about-section__image--secondary"
            src="https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=1200&q=90"
            alt="Sala planejada com painel"
          />

          <div className="floating-card floating-card--bottom">
            <ShieldCheck size={22} />
            <strong>Garantia</strong>
            <span>contratual</span>
          </div>
        </div>
      </Container>
    </section>
  );
}
