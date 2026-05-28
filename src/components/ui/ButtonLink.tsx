import type { AnchorHTMLAttributes, PropsWithChildren } from 'react';

type ButtonVariant = 'dark' | 'gold' | 'outlineDark' | 'outlineLight' | 'light';

type ButtonLinkProps = PropsWithChildren<
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    variant?: ButtonVariant;
  }
>;

const variantClassName: Record<ButtonVariant, string> = {
  dark: 'button button--dark',
  gold: 'button button--gold',
  light: 'button button--light',
  outlineDark: 'button button--outline-dark',
  outlineLight: 'button button--outline-light',
};

export function ButtonLink({ children, variant = 'dark', className = '', href, target, rel, ...props }: ButtonLinkProps) {
  const isExternal = href?.startsWith('http');

  return (
    <a
      className={`${variantClassName[variant]} ${className}`.trim()}
      href={href}
      target={target ?? (isExternal ? '_blank' : undefined)}
      rel={rel ?? (isExternal ? 'noreferrer' : undefined)}
      {...props}
    >
      {children}
    </a>
  );
}
