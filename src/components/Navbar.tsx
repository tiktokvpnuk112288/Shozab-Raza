/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Menu, X, ArrowUpRight, ShieldCheck } from 'lucide-react';

interface NavbarProps {
  currentTab: 'home' | 'portfolio' | 'services' | 'profiles';
  onNavigate: (tab: 'home' | 'portfolio' | 'services' | 'profiles') => void;
}

export default function Navbar({ currentTab, onNavigate }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'portfolio', label: 'Portfolio Galleries' },
    { id: 'services', label: 'Fiverr Services' },
    { id: 'profiles', label: 'Professional Profiles' },
  ] as const;

  const handleLinkClick = (id: 'home' | 'portfolio' | 'services' | 'profiles') => {
    onNavigate(id);
    setIsOpen(false);
  };

  return (
    <nav className="sticky top-0 z-40 w-full border-b border-neutral-900 bg-neutral-950/80 backdrop-blur-md select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          
          {/* Brand Logo */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => handleLinkClick('home')}>
            <span className="text-xl sm:text-2xl font-sans font-black tracking-tight text-white hover:text-emerald-400 transition-colors">
              Shozab Raza
            </span>
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`text-xs font-mono font-bold tracking-wider uppercase transition-all duration-200 px-3.5 py-2 rounded-xl border ${
                  currentTab === link.id
                    ? 'text-emerald-400 border-neutral-850 bg-neutral-900/40'
                    : 'text-neutral-400 border-transparent hover:text-white hover:bg-neutral-900/20'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Desktop Call-To-Action */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://www.fiverr.com/shozabraza2/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-neutral-950 bg-emerald-400 hover:bg-emerald-300 px-4 py-2.5 rounded-xl shadow-lg shadow-emerald-400/10 active:scale-95 transition-all duration-200"
            >
              Hire Me
              <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl text-neutral-400 hover:text-white hover:bg-neutral-900 focus:outline-none transition-colors border border-neutral-800"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden border-b border-neutral-900 bg-neutral-950 p-4 space-y-3 shadow-2xl">
          <div className="space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`w-full text-left text-xs font-mono font-bold tracking-wider uppercase px-4 py-3 rounded-xl transition-colors flex items-center justify-between ${
                  currentTab === link.id
                    ? 'text-emerald-400 bg-neutral-900/60 border border-neutral-850'
                    : 'text-neutral-400 hover:text-white hover:bg-neutral-900'
                }`}
              >
                {link.label}
                {currentTab === link.id && <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />}
              </button>
            ))}
          </div>
          
          <div className="pt-4 border-t border-neutral-900">
            <a
              href="https://www.fiverr.com/shozabraza2/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-1.5 text-xs font-mono font-bold text-neutral-950 bg-emerald-400 hover:bg-emerald-300 px-4 py-4.5 rounded-xl shadow-lg shadow-emerald-400/5 active:scale-95 transition-all"
            >
              Hire Me on Fiverr
              <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
