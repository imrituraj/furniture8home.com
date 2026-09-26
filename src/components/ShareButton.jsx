import { useState } from 'react';
import { ShareIcon } from './Icons.jsx';
import { productUrl } from '../lib/productLink.js';

async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text);
  } catch {
    const input = document.createElement('textarea');
    input.value = text;
    input.setAttribute('readonly', '');
    input.style.position = 'fixed';
    input.style.left = '-9999px';
    document.body.appendChild(input);
    input.select();
    document.execCommand('copy');
    input.remove();
  }
}

export default function ShareButton({ product, className = '', label = '' }) {
  const [copied, setCopied] = useState(false);

  async function share(event) {
    event.preventDefault();
    event.stopPropagation();
    const url = productUrl(product.slug);
    const payload = {
      title: `${product.name} · Furniture8home`,
      text: `${product.name} (${product.price}) at Furniture8home, Guwahati`,
      url,
    };

    if (navigator.share) {
      try {
        await navigator.share(payload);
        return;
      } catch (error) {
        if (error?.name === 'AbortError') return;
      }
    }

    await copyText(url);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  }

  const text = copied ? 'Link copied' : (label || 'Share link');

  return (
    <button
      type="button"
      className={`${className}${copied ? ' is-copied' : ''}`}
      onClick={share}
      title={copied ? 'Link copied' : 'Share this product'}
      aria-label={label ? text : (copied ? 'Link copied' : `Share ${product.name}`)}
    >
      <ShareIcon size={label ? 16 : 17} />
      {label ? <span>{text}</span> : null}
    </button>
  );
}
