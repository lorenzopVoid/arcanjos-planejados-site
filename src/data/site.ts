import type { NavItem } from '../types/site';

export const company = {
  name: 'Arcanjos Planejados',
  tagline: 'Cozinhas, closets, quartos e escritórios sob medida',
  phone: '(84) 98844-5467',
  phones: ['(84) 98844-5467', '(84) 98759-0488', '(84) 99165-5075'],
  email: 'contato@arcanjos-planejados.com',
  address: 'Extremoz, RN',
  whatsapp: '5584988445467',
};

export const navigation: NavItem[] = [
  { label: 'Início', href: '#inicio' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Portfólio', href: '#portfolio' },
  { label: 'Processo', href: '#processo' },
  { label: 'Orçamento', href: '#orcamento' },
  { label: 'Contato', href: '#contato' },
];
