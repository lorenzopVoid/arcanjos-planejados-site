import '../../styles/sections/brand-marquee.css';

import arauco from '../../assets/brands/arauco.svg';
import berneck from '../../assets/brands/berneck.svg';
import duratex from '../../assets/brands/duratex.svg';
import eucatex from '../../assets/brands/eucatex.svg';
import fibraplac from '../../assets/brands/fibraplac.svg';
import greenplac from '../../assets/brands/greenplac.svg';
import guararapes from '../../assets/brands/guararapes.svg';
import sudati from '../../assets/brands/sudati.svg';

type BrandMarqueeSectionProps = {
  reverse?: boolean;
};

const brands = [
  { image: duratex, name: 'Duratex', className: 'duratex' },
  { image: arauco, name: 'Arauco', className: 'arauco' },
  { image: guararapes, name: 'Guararapes', className: 'guararapes' },
  { image: berneck, name: 'Berneck', className: 'berneck' },
  { image: greenplac, name: 'Greenplac', className: 'greenplac' },
  { image: fibraplac, name: 'Fibraplac', className: 'fibraplac' },
  { image: eucatex, name: 'Eucatex', className: 'eucatex' },
  { image: sudati, name: 'Sudati', className: 'sudati' },
];

export function BrandMarqueeSection({ reverse = false }: BrandMarqueeSectionProps) {
  const repeatedBrands = [...brands, ...brands, ...brands, ...brands];

  return (
    <div className={`brand-marquee ${reverse ? 'brand-marquee--reverse' : ''}`}>
      <div className="brand-marquee__track">
        {repeatedBrands.map((brand, index) => (
          <div
            key={`${brand.name}-${index}`}
            className="brand-marquee__logo"
            aria-label={brand.name}
          >
            <img
              src={brand.image}
              alt={brand.name}
              loading="lazy"
              className={`brand-marquee__image brand-marquee__image--${brand.className}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}