import { company } from '../data/site';

const DEFAULT_MESSAGE = 'Olá! Gostaria de solicitar um orçamento para móveis planejados.';

export function createWhatsAppUrl(message = DEFAULT_MESSAGE): string {
  return `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(message)}`;
}
