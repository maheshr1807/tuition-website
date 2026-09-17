import { academyConfig } from './config';

export const openWhatsApp = (message) => {
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${academyConfig.whatsapp}?text=${encodedMessage}`;
  window.open(whatsappUrl, '_blank');
};
