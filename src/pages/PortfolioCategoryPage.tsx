import { useEffect, useMemo, useRef, useState } from 'react';
import type { MouseEvent as ReactMouseEvent } from 'react';
import {
  ArrowLeft,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  X,
} from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';

import {
  portfolioProjectGroups,
  PortfolioProjectGroup,
} from '../data/portfolioProjects';

import { Container } from '../components/ui/Container';
import { ButtonLink } from '../components/ui/ButtonLink';
import { createWhatsAppUrl } from '../lib/whatsapp';

import '../styles/sections/portfolio.css';

export function PortfolioCategoryPage() {
  const { categoryId } = useParams();

  const [activeProject, setActiveProject] =
    useState<PortfolioProjectGroup | null>(null);

  const [activeImage, setActiveImage] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  const thumbsRef = useRef<HTMLDivElement | null>(null);

  const projects = useMemo(() => {
    return portfolioProjectGroups.filter(
      (project) => project.category === categoryId
    );
  }, [categoryId]);

  const closeModal = () => {
    setActiveProject(null);
    setActiveImage(0);
    setIsZoomed(false);
  };

  const showPreviousImage = () => {
    if (!activeProject) return;

    setIsZoomed(false);

    setActiveImage((current) =>
      current === 0 ? activeProject.images.length - 1 : current - 1
    );
  };

  const showNextImage = () => {
    if (!activeProject) return;

    setIsZoomed(false);

    setActiveImage((current) =>
      current === activeProject.images.length - 1 ? 0 : current + 1
    );
  };

  const handleThumbsMouseDown = (
    event: ReactMouseEvent<HTMLDivElement>
  ) => {
    const slider = thumbsRef.current;

    if (!slider) return;

    const startX = event.pageX;
    const scrollLeft = slider.scrollLeft;

    const handleMouseMove = (moveEvent: MouseEvent) => {
      const distance = (moveEvent.pageX - startX) * 1.2;
      slider.scrollLeft = scrollLeft - distance;
    };

    const stopDragging = () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', stopDragging);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', stopDragging);
  };

  useEffect(() => {
    if (!activeProject) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeModal();
      }

      if (event.key === 'ArrowLeft') {
        showPreviousImage();
      }

      if (event.key === 'ArrowRight') {
        showNextImage();
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeProject]);

  return (
    <main className="portfolio-page">
      <section className="section portfolio-category-page">
        <Container>
          <Link to="/#portfolio" className="portfolio-page__back">
            <ArrowLeft size={18} />
            Voltar ao portfólio
          </Link>

          <div className="portfolio-page__header">
            <span>Portfólio</span>

            <h1>Cozinhas planejadas</h1>

            <p>
              Inspirações de cozinhas sob medida para diferentes estilos,
              tamanhos e necessidades.
            </p>
          </div>

          <div className="portfolio-project-grid">
            {projects.map((project) => (
              <button
                className="portfolio-project-card"
                key={project.id}
                type="button"
                onClick={() => {
                  setActiveProject(project);
                  setActiveImage(0);
                  setIsZoomed(false);
                }}
              >
                <img src={project.cover} alt={project.title} />

                <div className="portfolio-project-card__overlay" />

                <div className="portfolio-project-card__content">
                  <h2>{project.title}</h2>

                  <p>{project.subtitle}</p>

                  <span>
                    Ver galeria <ArrowUpRight size={18} />
                  </span>
                </div>
              </button>
            ))}
          </div>
        </Container>
      </section>

      <AnimatePresence>
        {activeProject && (
          <motion.div
            className="portfolio-modal"
            role="dialog"
            aria-modal="true"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
          >
            <button
              className="portfolio-modal__close"
              type="button"
              onClick={closeModal}
              aria-label="Fechar galeria"
            >
              <X size={26} />
            </button>

            <button
              className="portfolio-modal__nav portfolio-modal__nav--prev"
              type="button"
              onClick={showPreviousImage}
              aria-label="Imagem anterior"
            >
              <ChevronLeft size={34} />
            </button>

            <button
              className="portfolio-modal__nav portfolio-modal__nav--next"
              type="button"
              onClick={showNextImage}
              aria-label="Próxima imagem"
            >
              <ChevronRight size={34} />
            </button>

            <div className="portfolio-modal__counter">
              {String(activeImage + 1).padStart(2, '0')} /{' '}
              {String(activeProject.images.length).padStart(2, '0')}
            </div>

            <motion.div
              className="portfolio-modal__image"
              initial={{ y: 24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 24, opacity: 0 }}
              transition={{ duration: 0.45, ease: 'easeOut' }}
            >
              <motion.img
                key={activeProject.images[activeImage]}
                src={activeProject.images[activeImage]}
                alt={activeProject.title}
                className={isZoomed ? 'is-zoomed' : ''}
                onClick={() => setIsZoomed((current) => !current)}
                initial={{ opacity: 0, scale: 1.025, filter: 'blur(8px)' }}
                animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                exit={{ opacity: 0, scale: 0.98, filter: 'blur(8px)' }}
                transition={{ duration: 0.45, ease: 'easeOut' }}
              />
            </motion.div>

            <motion.div
              className="portfolio-modal__bottom"
              initial={{ y: 34, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 34, opacity: 0 }}
              transition={{ duration: 0.45, delay: 0.08, ease: 'easeOut' }}
            >
              <div className="portfolio-modal__info">
                <span>Inspiração</span>

                <h2>{activeProject.title}</h2>

                <p>{activeProject.description}</p>
              </div>

              <div
                className="portfolio-modal__thumbs"
                ref={thumbsRef}
                onMouseDown={handleThumbsMouseDown}
              >
                {activeProject.images.map((image, index) => (
                  <button
                    key={`${image}-${index}`}
                    type="button"
                    className={activeImage === index ? 'is-active' : ''}
                    onClick={() => {
                      setActiveImage(index);
                      setIsZoomed(false);
                    }}
                  >
                    <img src={image} alt="" />
                  </button>
                ))}
              </div>

              <div className="portfolio-modal__cta">
                <ButtonLink href={createWhatsAppUrl()} variant="gold">
                  Quero um projeto nesse estilo
                </ButtonLink>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}