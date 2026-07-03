/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import PortfolioPage from './components/PortfolioPage';
import ServicesPage from './components/ServicesPage';
import ProfilesPage from './components/ProfilesPage';
import { initialProfiles } from './data';
import { Youtube, Mail, Globe, ArrowUpRight, CheckCircle2 } from 'lucide-react';

export default function App() {
  const [currentTab, setCurrentTab] = useState<'home' | 'portfolio' | 'services' | 'profiles'>('home');

  const handleTabChange = (tab: 'home' | 'portfolio' | 'services' | 'profiles') => {
    setCurrentTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col justify-between selection:bg-emerald-400 selection:text-neutral-950 font-sans antialiased overflow-x-hidden">
      
      {/* Header / Navigation bar */}
      <Navbar currentTab={currentTab} onNavigate={handleTabChange} />

      {/* Main Content Sections */}
      <main className="flex-1 w-full bg-neutral-950">
        {currentTab === 'home' && <HomePage onNavigate={handleTabChange} />}
        {currentTab === 'portfolio' && <PortfolioPage />}
        {currentTab === 'services' && <ServicesPage />}
        {currentTab === 'profiles' && <ProfilesPage />}
      </main>

      {/* Global Agency-Grade Footer */}
      <footer className="w-full bg-neutral-950 border-t border-neutral-900 pt-16 pb-8 select-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 border-b border-neutral-900 pb-12 mb-8">
            {/* Branding Column */}
            <div className="md:col-span-5 space-y-4">
              <div className="flex items-center gap-2">
                <span className="text-xl font-sans font-black tracking-tight text-white">
                  Shozab Raza
                </span>
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
              </div>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-sans max-w-sm">
                Professional YouTube Thumbnail Designer, Video Editor, and Automation Architect. Delivering growth-engineered visual systems that command feed attention and scale channel revenue globally.
              </p>
              {/* Trust Badge */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-neutral-900 border border-neutral-850 text-[10px] font-mono font-bold text-neutral-300 rounded-lg">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                Verified Fiverr Seller
              </div>
            </div>

            {/* Navigation Column */}
            <div className="md:col-span-3 space-y-4">
              <h4 className="text-xs font-mono font-bold text-neutral-300 uppercase tracking-widest">
                Portals
              </h4>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => handleTabChange('home')}
                    className={`text-xs font-mono text-neutral-400 hover:text-emerald-400 transition-colors ${currentTab === 'home' ? 'text-emerald-400 font-bold' : ''}`}
                  >
                    Home Dashboard
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleTabChange('portfolio')}
                    className={`text-xs font-mono text-neutral-400 hover:text-emerald-400 transition-colors ${currentTab === 'portfolio' ? 'text-emerald-400 font-bold' : ''}`}
                  >
                    Portfolio Galleries
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleTabChange('services')}
                    className={`text-xs font-mono text-neutral-400 hover:text-emerald-400 transition-colors ${currentTab === 'services' ? 'text-emerald-400 font-bold' : ''}`}
                  >
                    Fiverr Gigs
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleTabChange('profiles')}
                    className={`text-xs font-mono text-neutral-400 hover:text-emerald-400 transition-colors ${currentTab === 'profiles' ? 'text-emerald-400 font-bold' : ''}`}
                  >
                    Professional Profiles
                  </button>
                </li>
              </ul>
            </div>

            {/* Platform Shortcuts Column */}
            <div className="md:col-span-4 space-y-4">
              <h4 className="text-xs font-mono font-bold text-neutral-300 uppercase tracking-widest">
                Active Agency Contributor
              </h4>
              <div className="flex flex-wrap gap-2">
                {initialProfiles.slice(0, 5).map((profile) => (
                  <a
                    key={profile.id}
                    href={profile.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[10px] font-mono text-neutral-400 hover:text-white bg-neutral-900/60 hover:bg-neutral-900 border border-neutral-850 px-2.5 py-1.5 rounded-lg flex items-center gap-1 transition-colors"
                  >
                    {profile.platform.replace(' (Asset Arc)', '').replace(' (Pro Stock Photos)', '')}
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Copyright, Policy, Framework credit info */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center">
            <span className="text-[10px] font-mono text-neutral-600">
              © 2026 Shozab Raza. All rights reserved. • Designed for high CTR click conversions.
            </span>
            <div className="flex items-center gap-4 text-[10px] font-mono text-neutral-600">
              <a href="https://www.fiverr.com/shozabraza2/" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors">
                Fiverr Marketplace Terms
              </a>
              <span>•</span>
              <span className="flex items-center gap-1 text-emerald-500/80 font-semibold select-none">
                <Globe className="w-3.5 h-3.5" />
                Global Deployment
              </span>
            </div>
          </div>

        </div>
      </footer>
    </div>
  );
}
