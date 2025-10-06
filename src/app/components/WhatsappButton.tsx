'use client'

import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsappButton: React.FC = () => {
  const phone = "5541997421848";
  const message = "Olá, Caio Vidal!";
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
<a
  href={url}
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-5 right-5 bg-green-500 hover:bg-green-600 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg transition-colors z-50"
>
  <FaWhatsapp size={24} />
</a>
  );
};

export default WhatsappButton;