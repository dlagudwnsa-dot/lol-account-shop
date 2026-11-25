import React from 'react';

export function catalogUrl(placement: string, tier?: string) {
  const url = new URL('https://xn--bp2bs0ne3dj3ao4xing.com/accounts');
  url.searchParams.set('game', 'lol');
  if (tier) url.searchParams.set('tier', tier);
  url.searchParams.set('utm_source', 'lolaccountshop_shop');
  url.searchParams.set('utm_medium', 'owned_content');
  url.searchParams.set('utm_campaign', 'lol_catalog');
  url.searchParams.set('utm_content', placement);
  return url.href;
}

type Props = React.PropsWithChildren<{ placement: string; tier?: string; className?: string }>;

export function CatalogLink({ placement, tier, className, children }: Props) {
  return <a href={catalogUrl(placement, tier)} target="_blank" rel="noopener" className={className}>{children}</a>;
}
