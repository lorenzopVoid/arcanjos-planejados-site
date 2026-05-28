import { useMemo, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import { portfolioCategories, projects } from '../../data/portfolio';
import type { ProjectCategory } from '../../types/site';
import { ProjectGalleryModal } from '../gallery/ProjectGalleryModal';
import { Container } from '../ui/Container';
import { SectionHeader } from '../ui/SectionHeader';

type ActiveCategory = ProjectCategory | 'todos';

export function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState<ActiveCategory>('todos');
  const [activeProjectIndex, setActiveProjectIndex] = useState<number | null>(null);

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'todos') return projects;

    return projects.filter((project) => project.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="portfolio" className="section portfolio-section">
      <Container>
        <SectionHeader
          eyebrow="Portfólio"
          title="Ambientes planejados"
          description="Explore projetos desenvolvidos para transformar cada espaço em uma experiência única."
        />

        <div className="portfolio-category-list" aria-label="Categorias do portfólio">
          {portfolioCategories.map((category) => (
            <button
              className={`portfolio-category ${
                activeCategory === category.id ? 'portfolio-category--active' : ''
              }`}
              key={category.id}
              type="button"
              onClick={() => setActiveCategory(category.id)}
            >
              {category.label}
            </button>
          ))}
        </div>
      </Container>

      <div className="portfolio-section__projects">
        <button
          className="portfolio-arrow portfolio-arrow--previous"
          type="button"
          aria-label="Ver projetos anteriores"
        >
          <ChevronLeft size={28} />
        </button>

        <Swiper
          key={activeCategory}
          className="portfolio-swiper"
          modules={[Autoplay, Navigation]}
          loop={filteredProjects.length > 3}
          speed={900}
          spaceBetween={42}
          slidesPerView="auto"
          grabCursor
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          navigation={{
            prevEl: '.portfolio-arrow--previous',
            nextEl: '.portfolio-arrow--next',
          }}
        >
          {filteredProjects.map((project) => {
            const projectIndex = projects.findIndex((item) => item.id === project.id);

            return (
              <SwiperSlide className="portfolio-slide" key={project.id}>
                <button
                  className="project-card"
                  type="button"
                  onClick={() => setActiveProjectIndex(projectIndex)}
                >
                  <div className="project-card__media">
                    <img src={project.images[0]} alt={project.title} loading="lazy" />
                    <span className="project-card__tag">{project.tag}</span>
                    <span className="project-card__hover">Ver galeria</span>
                  </div>

                  <h3>{project.title}</h3>
                  <p>{project.categoryLabel}</p>
                </button>
              </SwiperSlide>
            );
          })}
        </Swiper>

        <button
          className="portfolio-arrow portfolio-arrow--next"
          type="button"
          aria-label="Ver próximos projetos"
        >
          <ChevronRight size={28} />
        </button>
      </div>

      {activeProjectIndex !== null && (
        <ProjectGalleryModal
          activeIndex={activeProjectIndex}
          onChange={setActiveProjectIndex}
          onClose={() => setActiveProjectIndex(null)}
        />
      )}
    </section>
  );
}