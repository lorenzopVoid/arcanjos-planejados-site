import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import { projects } from '../../data/portfolio';
import { useLockBodyScroll } from '../../hooks/useLockBodyScroll';
import { createWhatsAppUrl } from '../../lib/whatsapp';
import { ButtonLink } from '../ui/ButtonLink';

type ProjectGalleryModalProps = {
  activeIndex: number;
  onChange: (index: number) => void;
  onClose: () => void;
};

export function ProjectGalleryModal({ activeIndex, onChange, onClose }: ProjectGalleryModalProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const project = projects[activeIndex];
  const lastProjectIndex = projects.length - 1;
  const lastImageIndex = project.images.length - 1;

  useLockBodyScroll(true);

  const activeImage = useMemo(() => project.images[activeImageIndex] ?? project.images[0], [activeImageIndex, project]);

  const goToPreviousImage = () => setActiveImageIndex((current) => (current === 0 ? lastImageIndex : current - 1));
  const goToNextImage = () => setActiveImageIndex((current) => (current === lastImageIndex ? 0 : current + 1));
  const goToPreviousProject = () => onChange(activeIndex === 0 ? lastProjectIndex : activeIndex - 1);
  const goToNextProject = () => onChange(activeIndex === lastProjectIndex ? 0 : activeIndex + 1);

  useEffect(() => {
    setActiveImageIndex(0);
  }, [activeIndex]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
      if (event.key === 'ArrowLeft') goToPreviousImage();
      if (event.key === 'ArrowRight') goToNextImage();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  });

  return (
    <div className="gallery-modal" role="dialog" aria-modal="true" aria-label="Galeria de projetos">
      <button className="gallery-modal__close" type="button" onClick={onClose} aria-label="Fechar galeria">
        <X size={28} />
      </button>

      <button
        className="gallery-modal__arrow gallery-modal__arrow--left"
        type="button"
        onClick={goToPreviousImage}
        aria-label="Imagem anterior"
      >
        <ChevronLeft size={36} />
      </button>

      <article className="gallery-modal__card">
        <div className="gallery-modal__image-wrap">
          <img src={activeImage} alt={`${project.title} - foto ${activeImageIndex + 1}`} />
        </div>

        <div className="gallery-modal__content">
          <div>
            <span>{project.categoryLabel}</span>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>

          <ButtonLink
            href={createWhatsAppUrl(
              `Olá! Gostei do projeto ${project.title} e gostaria de solicitar um orçamento.`,
            )}
            variant="dark"
          >
            Quero um projeto assim
          </ButtonLink>
        </div>

        <div className="gallery-modal__footer">
          <div className="gallery-modal__thumbs">
            {project.images.map((image, index) => (
              <button
                className={`gallery-modal__thumb ${activeImageIndex === index ? 'gallery-modal__thumb--active' : ''}`}
                key={image}
                type="button"
                onClick={() => setActiveImageIndex(index)}
                aria-label={`Abrir foto ${index + 1}`}
              >
                <img src={image} alt="" />
              </button>
            ))}
          </div>

          <div className="gallery-modal__project-nav">
            <button type="button" onClick={goToPreviousProject}>Projeto anterior</button>
            <button type="button" onClick={goToNextProject}>Próximo projeto</button>
          </div>
        </div>
      </article>

      <button
        className="gallery-modal__arrow gallery-modal__arrow--right"
        type="button"
        onClick={goToNextImage}
        aria-label="Próxima imagem"
      >
        <ChevronRight size={36} />
      </button>
    </div>
  );
}
