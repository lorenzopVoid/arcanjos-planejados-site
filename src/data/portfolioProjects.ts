const projectImages = import.meta.glob('../assets/projects/**/*.webp', {
  eager: true,
  query: '?url',
  import: 'default',
});

function getProjectImages(folder: string) {
  return Object.entries(projectImages)
    .filter(([path]) => path.includes(`/assets/projects/${folder}/`))
    .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
    .map(([, src]) => src as string);
}

export type PortfolioProjectGroup = {
  id: string;
  category: string;
  title: string;
  subtitle: string;
  description: string;
  cover: string;
  images: string[];
};

function createProjectGroup(data: Omit<PortfolioProjectGroup, 'cover' | 'images'> & { folder: string }) {
  const images = getProjectImages(data.folder);

  return {
    id: data.id,
    category: data.category,
    title: data.title,
    subtitle: data.subtitle,
    description: data.description,
    cover: images[0],
    images,
  };
}

export const portfolioProjectGroups: PortfolioProjectGroup[] = [
  createProjectGroup({
    id: 'cozinhas-compactas',
    category: 'cozinha',
    folder: 'cozinhas/compactas',
    title: 'Cozinhas compactas',
    subtitle: 'Aproveitamento inteligente para espaços menores.',
    description:
      'Inspirações de cozinhas compactas planejadas para otimizar cada centímetro com funcionalidade, organização e acabamento sofisticado.',
  }),

  createProjectGroup({
    id: 'cozinhas-media',
    category: 'cozinha',
    folder: 'cozinhas/media',
    title: 'Cozinhas médias',
    subtitle: 'Equilíbrio entre praticidade, circulação e design.',
    description:
      'Referências de cozinhas médias com soluções planejadas para melhorar o fluxo, ampliar o armazenamento e criar uma composição visual elegante.',
  }),

  createProjectGroup({
    id: 'cozinhas-grandes',
    category: 'cozinha',
    folder: 'cozinhas/grandes',
    title: 'Cozinhas grandes',
    subtitle: 'Ambientes amplos com composição completa.',
    description:
      'Inspirações para cozinhas grandes com marcenaria planejada, torres, aéreos, bancadas amplas e soluções para uma rotina mais confortável.',
  }),

  createProjectGroup({
    id: 'cozinhas-com-lavanderia',
    category: 'cozinha',
    folder: 'cozinhas/com-lavanderia',
    title: 'Cozinhas com lavanderia',
    subtitle: 'Integração funcional entre cozinha e área de serviço.',
    description:
      'Referências de cozinhas integradas à lavanderia, com soluções planejadas para organização, circulação e separação visual dos ambientes.',
  }),

  createProjectGroup({
    id: 'cozinhas-com-ilha',
    category: 'cozinha',
    folder: 'cozinhas/com-ilha',
    title: 'Cozinhas com ilha',
    subtitle: 'Integração, funcionalidade e sofisticação.',
    description:
      'Inspirações de cozinhas com ilha central para integrar preparo, armazenamento e convivência em um ambiente planejado.',
  }),

  createProjectGroup({
    id: 'banheiros-compactos',
    category: 'banheiro',
    folder: 'banheiro/compactos',
    title: 'Banheiros compactos',
    subtitle: 'Funcionalidade para espaços reduzidos.',
    description:
      'Inspirações de banheiros compactos com marcenaria planejada para otimizar armazenamento, circulação e acabamento.',
  }),

  createProjectGroup({
    id: 'banheiros-grandes',
    category: 'banheiro',
    folder: 'banheiro/grandes',
    title: 'Banheiros grandes',
    subtitle: 'Conforto, elegância e organização.',
    description:
      'Referências de banheiros amplos com bancadas planejadas, armários, nichos e soluções para uma composição sofisticada.',
  }),

  createProjectGroup({
    id: 'escritorios-bibliotecas',
    category: 'escritorio',
    folder: 'escritorio/bibliotecas',
    title: 'Bibliotecas',
    subtitle: 'Organização e presença visual.',
    description:
      'Inspirações de bibliotecas planejadas para organizar livros, objetos decorativos e criar ambientes elegantes e funcionais.',
  }),

  createProjectGroup({
    id: 'escritorios-executivos-corporativos',
    category: 'escritorio',
    folder: 'escritorio/executivos-corporativos',
    title: 'Executivos corporativos',
    subtitle: 'Ambientes profissionais de alto padrão.',
    description:
      'Referências de escritórios executivos e corporativos com marcenaria planejada, elegância e funcionalidade para rotina de trabalho.',
  }),

  createProjectGroup({
    id: 'escritorios-jovem-moderno',
    category: 'escritorio',
    folder: 'escritorio/jovem-moderno',
    title: 'Jovem moderno',
    subtitle: 'Trabalho, estudo e estilo.',
    description:
      'Inspirações de escritórios modernos para jovens, com soluções práticas para estudo, produtividade e organização.',
  }),

  createProjectGroup({
    id: 'escritorios-pequenos',
    category: 'escritorio',
    folder: 'escritorio/pequenos',
    title: 'Escritórios pequenos',
    subtitle: 'Aproveitamento inteligente do espaço.',
    description:
      'Referências de escritórios compactos planejados para oferecer conforto, armazenamento e funcionalidade mesmo em áreas reduzidas.',
  }),

  createProjectGroup({
    id: 'escritorios-planejados',
    category: 'escritorio',
    folder: 'escritorio/planejados',
    title: 'Escritórios planejados',
    subtitle: 'Soluções sob medida para produtividade.',
    description:
      'Inspirações de escritórios planejados com bancadas, armários e composições feitas para otimizar a rotina.',
  }),

  createProjectGroup({
    id: 'quartos-casal',
    category: 'quarto',
    folder: 'quarto/casal',
    title: 'Quartos de casal',
    subtitle: 'Conforto e sofisticação.',
    description:
      'Referências de quartos de casal com guarda-roupas, painéis, cabeceiras e soluções planejadas para uma rotina mais elegante.',
  }),

  createProjectGroup({
    id: 'quartos-closets',
    category: 'quarto',
    folder: 'quarto/closets',
    title: 'Closets',
    subtitle: 'Organização com acabamento premium.',
    description:
      'Inspirações de closets planejados para roupas, acessórios e objetos pessoais com aproveitamento inteligente do espaço.',
  }),

  createProjectGroup({
    id: 'quartos-espacos-inteiros',
    category: 'quarto',
    folder: 'quarto/espacos-inteiros',
    title: 'Espaços inteiros',
    subtitle: 'Ambientes completos e integrados.',
    description:
      'Referências de quartos completos com marcenaria planejada para integrar cama, painel, armários e áreas de apoio.',
  }),

  createProjectGroup({
    id: 'quartos-infantil',
    category: 'quarto',
    folder: 'quarto/infantil',
    title: 'Quartos infantis',
    subtitle: 'Criatividade, segurança e organização.',
    description:
      'Inspirações de quartos infantis planejados para unir funcionalidade, armazenamento e um visual acolhedor.',
  }),

  createProjectGroup({
    id: 'quartos-solteiro',
    category: 'quarto',
    folder: 'quarto/solteiro',
    title: 'Quartos de solteiro',
    subtitle: 'Praticidade para o dia a dia.',
    description:
      'Referências de quartos de solteiro com soluções planejadas para estudo, descanso e organização.',
  }),

  createProjectGroup({
    id: 'salas-apartamento',
    category: 'sala',
    folder: 'sala/apartamento',
    title: 'Salas de apartamento',
    subtitle: 'Elegância em espaços compactos.',
    description:
      'Inspirações de salas de apartamento com painéis, racks e composições planejadas para aproveitar melhor o ambiente.',
  }),

  createProjectGroup({
    id: 'salas-com-espaco-gourmet',
    category: 'sala',
    folder: 'sala/com-espaco-gourmet',
    title: 'Salas com espaço gourmet',
    subtitle: 'Integração e convivência.',
    description:
      'Referências de salas integradas ao espaço gourmet com soluções planejadas para receber, organizar e valorizar o ambiente.',
  }),

  createProjectGroup({
    id: 'salas-grandes',
    category: 'sala',
    folder: 'sala/grandes',
    title: 'Salas grandes',
    subtitle: 'Composições amplas e sofisticadas.',
    description:
      'Inspirações de salas grandes com painéis, estantes, racks e soluções planejadas para ambientes amplos.',
  }),

  createProjectGroup({
    id: 'salas-medias',
    category: 'sala',
    folder: 'sala/medias',
    title: 'Salas médias',
    subtitle: 'Equilíbrio entre beleza e funcionalidade.',
    description:
      'Referências de salas médias com marcenaria planejada para organização, integração visual e conforto.',
  }),

  createProjectGroup({
    id: 'area-externa-gourmet',
    category: 'area-externa',
    folder: 'area-externa/area-gourmet',
    title: 'Área gourmet',
    subtitle: 'Lazer, convivência e funcionalidade.',
    description:
      'Inspirações de áreas gourmet planejadas para receber, cozinhar e aproveitar momentos de lazer com conforto e sofisticação.',
  }),
];