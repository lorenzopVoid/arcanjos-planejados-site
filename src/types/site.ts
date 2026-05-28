export type NavItem = {
  label: string;
  href: string;
};

export type Service = {
  id: string;
  title: string;
  description: string;
  image: string;
};

export type ProjectCategory = 'cozinha' | 'sala' | 'quarto' | 'escritorio' | 'banheiro' | 'area-externa';

export type PortfolioCategory = {
  id: ProjectCategory | 'todos';
  label: string;
};

export type Project = {
  id: string;
  title: string;
  category: ProjectCategory;
  categoryLabel: string;
  tag: string;
  images: string[];
  description: string;
};

export type ProcessStep = {
  number: string;
  title: string;
  description: string;
};
