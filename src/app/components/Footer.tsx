'use client'

import React from "react";
import Image from "next/image";
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-center">
        {/* Informações pessoais */}
        <div className="mb-6 md:mb-0">
          <h2 className="text-xl font-bold">Caio Vidal</h2>
          <p className="text-gray-300">caio.vidalnascimento@gmail.com</p>
          <p className="text-gray-300">Curitiba-PR, Brazil</p>
        </div>

        {/* Redes sociais */}
        <div className="flex space-x-4">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-400 transition-colors">
            <FaInstagram size={24} />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-600 transition-colors">
            <FaFacebookF size={24} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition-colors">
            <FaLinkedinIn size={24} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-400 transition-colors">
            <FaTwitter size={24} />
          </a>
        </div>
      </div>
{/* Logo e crédito */}
<div className="flex flex-col items-center mt-10">
  <div className="w-40 h-40 rounded-full border-4 border-white/20 flex items-center justify-center shadow-lg relative group">
    {/* Quadrado branco rotativo */}
    <div className="absolute w-28 h-28 bg-white transition-transform duration-500 group-hover:rotate-45"></div>

    {/* Imagem do logo */}
    <div className="relative">
      <Image
        src="/protoweb.png"
        alt="Logo do desenvolvedor"
        width={80}
        height={80}
        className="object-contain"
      />
    </div>
  </div>
  <p className="text-gray-400 text-sm mt-3">
    Desenvolvido por <span className="font-semibold text-white">ProtoWeb</span>
  </p>
</div>
      {/* Copyright */}
      <div className="text-gray-500 text-sm text-center mt-6">
        © {new Date().getFullYear()} Caio Vidal. Todos os direitos reservados.
      </div>
    </footer>
  );
};

export default Footer;
