import { Ruler } from 'lucide-react';
import { createWhatsAppUrl } from '../../lib/whatsapp';
import { ButtonLink } from '../ui/ButtonLink';
import { Container } from '../ui/Container';

export function CtaSection() {
  return (
    <section id="contato" className="cta-section">
      <Container className="cta-section__content">
        <Ruler size={68} />
        <h2>Pronto para começar seu projeto?</h2>
        <p>Entre em contato para uma consulta e transforme suas ideias em um ambiente planejado premium.</p>
        <ButtonLink href={createWhatsAppUrl()} variant="gold">
          Solicitar Orçamento Grátis
        </ButtonLink>
      </Container>
    </section>
  );
}
