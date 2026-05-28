import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import { services } from '../../data/services';
import { createWhatsAppUrl } from '../../lib/whatsapp';
import { Container } from '../ui/Container';

export function ServicesSection() {
  return (
    <section id="servicos" className="services-section">
      <Container>
        <div className="services-section__header">
          <span className="services-section__eyebrow">Serviços</span>

          <h2>Marcenaria planejada para cada ambiente.</h2>

          <p>
            Desenvolvemos cozinhas, closets, dormitórios, salas, banheiros,
            escritórios e áreas externas com foco em estética, funcionalidade
            e acabamento profissional.
          </p>

          <div className="services-section__controls">
            <button
              className="services-arrow services-arrow--prev"
              type="button"
            >
              <ChevronLeft size={22} />
            </button>

            <button
              className="services-arrow services-arrow--next"
              type="button"
            >
              <ChevronRight size={22} />
            </button>
          </div>
        </div>
      </Container>

      <div className="services-section__slider">
        <Swiper
          modules={[Autoplay, Navigation]}
          loop
          speed={850}
          spaceBetween={24}
          slidesPerView={3}
          grabCursor
          autoplay={{
            delay: 4200,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          navigation={{
            prevEl: '.services-arrow--prev',
            nextEl: '.services-arrow--next',
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 18,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1100: {
              slidesPerView: 3,
              spaceBetween: 24,
            },
          }}
          className="services-swiper"
        >
          {services.map((service) => (
            <SwiperSlide key={service.id}>
              <article className="service-card">
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                />

                <div className="service-card__overlay" />

                <div className="service-card__content">
                  <h3>{service.title}</h3>

                  <p>{service.description}</p>

                  <a
                    className="service-card__link"
                    href={createWhatsAppUrl(
                      `Olá! Gostaria de saber mais sobre ${service.title}.`
                    )}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Saiba mais <ArrowRight size={16} />
                  </a>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}