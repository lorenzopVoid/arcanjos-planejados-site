import cozinhaIlha01 from '../assets/projects/cozinhas/com-ilha/01.jpg';
import cozinhaIlha02 from '../assets/projects/cozinhas/com-ilha/02.jpg';
import cozinhaIlha03 from '../assets/projects/cozinhas/com-ilha/03.jpg';
import cozinhaIlha04 from '../assets/projects/cozinhas/com-ilha/04.jpg';
import cozinhaIlha05 from '../assets/projects/cozinhas/com-ilha/05.jpg';
import cozinhaIlha06 from '../assets/projects/cozinhas/com-ilha/06.jpg';
import cozinhaIlha07 from '../assets/projects/cozinhas/com-ilha/07.jpg';
import cozinhaIlha08 from '../assets/projects/cozinhas/com-ilha/08.jpg';

import cozinhaLavanderia01 from '../assets/projects/cozinhas/com-lavanderia/01.png';
import cozinhaLavanderia02 from '../assets/projects/cozinhas/com-lavanderia/02.jpg';
import cozinhaLavanderia03 from '../assets/projects/cozinhas/com-lavanderia/03.jpg';

import cozinhaCompacta01 from '../assets/projects/cozinhas/compactas/01.png';
import cozinhaCompacta02 from '../assets/projects/cozinhas/compactas/02.jpg';
import cozinhaCompacta03 from '../assets/projects/cozinhas/compactas/03.jpg';
import cozinhaCompacta04 from '../assets/projects/cozinhas/compactas/04.jpg';
import cozinhaCompacta05 from '../assets/projects/cozinhas/compactas/05.jpg';
import cozinhaCompacta06 from '../assets/projects/cozinhas/compactas/06.jpg';
import cozinhaCompacta07 from '../assets/projects/cozinhas/compactas/07.jpg';
import cozinhaCompacta08 from '../assets/projects/cozinhas/compactas/08.jpg';
import cozinhaCompacta09 from '../assets/projects/cozinhas/compactas/09.jpg';
import cozinhaCompacta10 from '../assets/projects/cozinhas/compactas/10.jpg';
import cozinhaCompacta11 from '../assets/projects/cozinhas/compactas/11.jpg';
import cozinhaCompacta12 from '../assets/projects/cozinhas/compactas/12.jpg';
import cozinhaCompacta13 from '../assets/projects/cozinhas/compactas/13.jpg';
import cozinhaCompacta14 from '../assets/projects/cozinhas/compactas/14.jpg';

import cozinhaGrande01 from '../assets/projects/cozinhas/grandes/01.png';
import cozinhaGrande02 from '../assets/projects/cozinhas/grandes/02.jpg';
import cozinhaGrande03 from '../assets/projects/cozinhas/grandes/03.jpg';
import cozinhaGrande04 from '../assets/projects/cozinhas/grandes/04.jpg';
import cozinhaGrande05 from '../assets/projects/cozinhas/grandes/05.png';
import cozinhaGrande06 from '../assets/projects/cozinhas/grandes/06.png';

import cozinhaMedia01 from '../assets/projects/cozinhas/media/01.jpg';
import cozinhaMedia02 from '../assets/projects/cozinhas/media/02.jpg';
import cozinhaMedia03 from '../assets/projects/cozinhas/media/03.jpg';

export type PortfolioProjectGroup = {
  id: string;
  category: string;
  title: string;
  subtitle: string;
  description: string;
  cover: string;
  images: string[];
};

export const portfolioProjectGroups: PortfolioProjectGroup[] = [
  {
    id: 'cozinhas-compactas',
    category: 'cozinha',
    title: 'Cozinhas compactas',
    subtitle: 'Aproveitamento inteligente para espaços menores.',
    description:
      'Inspirações de cozinhas compactas planejadas para otimizar cada centímetro com funcionalidade, organização e acabamento sofisticado.',
    cover: cozinhaCompacta01,
    images: [
      cozinhaCompacta01,
      cozinhaCompacta02,
      cozinhaCompacta03,
      cozinhaCompacta04,
      cozinhaCompacta05,
      cozinhaCompacta06,
      cozinhaCompacta07,
      cozinhaCompacta08,
      cozinhaCompacta09,
      cozinhaCompacta10,
      cozinhaCompacta11,
      cozinhaCompacta12,
      cozinhaCompacta13,
      cozinhaCompacta14,
    ],
  },

  {
    id: 'cozinhas-media',
    category: 'cozinha',
    title: 'Cozinhas médias',
    subtitle: 'Equilíbrio entre praticidade, circulação e design.',
    description:
      'Referências de cozinhas médias com soluções planejadas para melhorar o fluxo, ampliar o armazenamento e criar uma composição visual elegante.',
    cover: cozinhaMedia01,
    images: [
      cozinhaMedia01,
      cozinhaMedia02,
      cozinhaMedia03,
    ],
  },

  {
    id: 'cozinhas-grandes',
    category: 'cozinha',
    title: 'Cozinhas grandes',
    subtitle: 'Ambientes amplos com composição completa.',
    description:
      'Inspirações para cozinhas grandes com marcenaria planejada, torres, aéreos, bancadas amplas e soluções para uma rotina mais confortável.',
    cover: cozinhaGrande01,
    images: [
      cozinhaGrande01,
      cozinhaGrande02,
      cozinhaGrande03,
      cozinhaGrande04,
      cozinhaGrande05,
      cozinhaGrande06,
    ],
  },

  {
    id: 'cozinhas-com-lavanderia',
    category: 'cozinha',
    title: 'Cozinhas com lavanderia',
    subtitle: 'Integração funcional entre cozinha e área de serviço.',
    description:
      'Referências de cozinhas integradas à lavanderia, com soluções planejadas para organização, circulação e separação visual dos ambientes.',
    cover: cozinhaLavanderia01,
    images: [
      cozinhaLavanderia01,
      cozinhaLavanderia02,
      cozinhaLavanderia03,
    ],
  },

  {
    id: 'cozinhas-com-ilha',
    category: 'cozinha',
    title: 'Cozinhas com ilha',
    subtitle: 'Integração, funcionalidade e sofisticação.',
    description:
      'Inspirações de cozinhas com ilha central para integrar preparo, armazenamento e convivência em um ambiente planejado.',
    cover: cozinhaIlha01,
    images: [
      cozinhaIlha01,
      cozinhaIlha02,
      cozinhaIlha03,
      cozinhaIlha04,
      cozinhaIlha05,
      cozinhaIlha06,
      cozinhaIlha07,
      cozinhaIlha08,
    ],
  },
];