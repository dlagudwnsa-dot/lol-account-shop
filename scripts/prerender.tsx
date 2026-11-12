import React from 'react';
import { renderToStaticMarkup, renderToString } from 'react-dom/server';
import { readFile, writeFile } from 'node:fs/promises';
import App from '../App';
import { pageMeta, siteOrigin, type Page } from '../NavigationContext';

const template = await readFile('dist/index.html', 'utf8');
for (const page of Object.keys(pageMeta) as Page[]) {
  const { title, description, path } = pageMeta[page];
  const url = new URL(path, siteOrigin).href;
  const head = renderToStaticMarkup(<>
    <title>{title}</title>
    <meta name="description" content={description} />
    <link rel="canonical" href={url} />
    <meta property="og:url" content={url} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
  </>);
  const body = renderToString(<App initialPage={page} />);
  const html = template.replace(/<!--page-head-->[\s\S]*?<!--\/page-head-->/, () => head)
    .replace('<div id="root"></div>', () => `<div id="root">${body}</div>`);
  if (!html.includes(head) || !html.includes(body)) throw new Error(`Invalid template for ${path}`);
  await writeFile(page === 'home' ? 'dist/index.html' : `dist${path}.html`, html);
}
