import React from 'react';
import { Instagram, Linkedin, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/5 bg-black text-center">
      <div className="flex justify-center gap-8 mb-8">
        <a href="https://www.instagram.com/lazanomeniavo?igsh=NW9mbjR0ZG92a3Zp" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-white transition-colors">
          <Instagram className="w-5 h-5" />
        </a>
        <a href="https://www.linkedin.com/in/nomeniavo-laza-49a437306" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-white transition-colors">
          <Linkedin className="w-5 h-5" />
        </a>
        <a href="https://www.facebook.com/LazaGabri" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-white transition-colors">
          <Facebook className="w-5 h-5" />
        </a>
      </div>
      <p className="text-gray-600 text-sm">
        © 2026 Laza Marius Gabriel. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
