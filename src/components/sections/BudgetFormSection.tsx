import { Mail, Phone } from 'lucide-react';

import { company } from '../../data/site';
import { Container } from '../ui/Container';
import { SectionHeader } from '../ui/SectionHeader';

const formAction = `https://formsubmit.co/${company.email}`;

export function BudgetFormSection() {
  return (
    <section id="orcamento" className="section budget-section">
      <Container className="budget-section__grid">
        <div>
          <SectionHeader
            eyebrow="Orçamento"
            title="Solicite uma visita ou orçamento"
            description="Envie seus dados e conte qual ambiente você deseja planejar. A equipe da Arcanjos Planejados entrará em contato para orientar os próximos passos."
            align="left"
          />

          <div className="budget-section__contacts">
            <a href={`mailto:${company.email}`}>
              <Mail size={20} /> {company.email}
            </a>

            {company.phones.map((phone) => (
              <a key={phone} href={`tel:+55${phone.replace(/\D/g, '')}`}>
                <Phone size={20} /> {phone}
              </a>
            ))}
          </div>
        </div>

        <form className="budget-form" action={formAction} method="POST">
          <input
            type="hidden"
            name="_subject"
            value="Novo pedido de orçamento - Arcanjos Planejados"
          />

          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />

          <input
            type="hidden"
            name="_next"
            value="https://arcanjos-planejados.com"
          />

          <input
            type="hidden"
            name="_autoresponse"
            value="Recebemos sua solicitação de orçamento. Em breve a equipe da Arcanjos Planejados entrará em contato."
          />

          <label>
            Nome completo
            <input name="nome" type="text" placeholder="Seu nome" required />
          </label>

          <label>
            WhatsApp
            <input name="whatsapp" type="tel" placeholder="(84) 99999-9999" required />
          </label>

          <label>
            E-mail
            <input name="email" type="email" placeholder="seuemail@exemplo.com" />
          </label>

          <label>
            Ambiente desejado
            <select name="ambiente" defaultValue="" required>
              <option value="" disabled>
                Selecione uma opção
              </option>
              <option value="Cozinha planejada">Cozinha planejada</option>
              <option value="Sala planejada">Sala planejada</option>
              <option value="Quarto planejado">Quarto planejado</option>
              <option value="Closet planejado">Closet planejado</option>
              <option value="Escritório planejado">Escritório planejado</option>
              <option value="Banheiro planejado">Banheiro planejado</option>
              <option value="Área externa planejada">Área externa planejada</option>
            </select>
          </label>

          <label className="budget-form__full">
            Mensagem
            <textarea
              name="mensagem"
              rows={5}
              placeholder="Descreva brevemente o que você deseja fazer."
              required
            />
          </label>

          <button className="button button--gold budget-form__full" type="submit">
            Enviar solicitação
          </button>

        </form>
      </Container>
    </section>
  );
}