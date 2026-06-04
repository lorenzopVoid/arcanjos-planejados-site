import type { FormEvent } from 'react';
import { Mail, Phone } from 'lucide-react';
import { motion, type Variants } from 'framer-motion';

import { company } from '../../data/site';
import { Container } from '../ui/Container';
import { SectionHeader } from '../ui/SectionHeader';

const formAction = `https://formsubmit.co/${company.email}`;

const sectionVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 36,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: 'easeOut',
    },
  },
};

const formVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 42,
    scale: 0.98,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.75,
      ease: 'easeOut',
      delay: 0.12,
    },
  },
};

export function BudgetFormSection() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    const form = event.currentTarget;
    const formData = new FormData(form);

    const nome = String(formData.get('nome') || '');
    const whatsapp = String(formData.get('whatsapp') || '');
    const email = String(formData.get('email') || '');
    const ambiente = String(formData.get('ambiente') || '');
    const mensagem = String(formData.get('mensagem') || '');

    const phone = company.phones[0]?.replace(/\D/g, '');

    const whatsappMessage = `
Olá, vim pelo site da Arcanjos Planejados e gostaria de solicitar um orçamento.

Nome: ${nome}
WhatsApp: ${whatsapp}
E-mail: ${email || 'Não informado'}
Ambiente desejado: ${ambiente}

Mensagem:
${mensagem}
    `.trim();

    if (phone) {
      window.open(
        `https://wa.me/55${phone}?text=${encodeURIComponent(whatsappMessage)}`,
        '_blank',
        'noopener,noreferrer'
      );
    }
  };

  return (
    <section id="orcamento" className="section budget-section">
      <Container className="budget-section__grid">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
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
        </motion.div>

        <motion.form
          className="budget-form"
          action={formAction}
          method="POST"
          onSubmit={handleSubmit}
          variants={formVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
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
            <input
              name="whatsapp"
              type="tel"
              placeholder="(84) 99999-9999"
              required
            />
          </label>

          <label>
            E-mail
            <input
              name="email"
              type="email"
              placeholder="seuemail@exemplo.com"
            />
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
              <option value="Escritório planejado">
                Escritório planejado
              </option>
              <option value="Banheiro planejado">Banheiro planejado</option>
              <option value="Área externa planejada">
                Área externa planejada
              </option>
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
        </motion.form>
      </Container>
    </section>
  );
}