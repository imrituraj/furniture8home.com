export const WHATSAPP_NUMBER = '916002584075';

export function waLink(text) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}
