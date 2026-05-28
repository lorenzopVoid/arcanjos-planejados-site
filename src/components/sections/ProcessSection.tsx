import { ChevronRight } from 'lucide-react';
import { processSteps } from '../../data/process';
import { Container } from '../ui/Container';
import { SectionHeader } from '../ui/SectionHeader';

export function ProcessSection() {
  return (
    <section id="processo" className="section process-section">
      <Container>
        <SectionHeader
          eyebrow="Processo"
          title="Como Funciona"
          description="Do projeto à entrega, cada etapa é conduzida com clareza e padrão profissional."
        />

        <div className="process-grid">
          {processSteps.map((step, index) => (
            <article className="process-step" key={step.number}>
              <div className="process-step__number">{step.number}</div>
              {index < processSteps.length - 1 && <ChevronRight className="process-step__arrow" />}
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
