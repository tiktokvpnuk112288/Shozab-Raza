/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { initialGigs } from '../data';
import BeforeAfterSlider from './BeforeAfterSlider';
import shozabPortrait from '../assets/images/shozab_portrait_1783063350884.jpg';
import videoEditorBanner from '../assets/images/video_editor_banner_1783063383470.jpg';
import {
  TrendingUp,
  Youtube,
  Video,
  Database,
  Search,
  Camera,
  Layers,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Zap,
  CheckCircle,
  Clock,
  MessageSquare,
  Users,
  Award
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (tab: 'home' | 'portfolio' | 'services' | 'profiles') => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  // Select a restoration example and thumbnail comparison example for direct showcase
  const beforeAfterThumb = {
    before: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&q=80&w=800',
    after: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&q=80&w=800',
    title: 'Thumbnail Redesign (Click-Through Rate Optimization)'
  };

  const beforeAfterPhoto = {
    before: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=800',
    after: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=800',
    title: 'Vintage Image Restoration & Colorization'
  };

  return (
    <div id="home-dashboard-page" className="w-full">
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden min-h-[90vh] flex items-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Background glow graphics */}
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full z-10">
          {/* Hero Left Content */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 justify-center lg:justify-start"
            >
              <img
                src={shozabPortrait}
                alt="Shozab Raza Avatar"
                referrerPolicy="no-referrer"
                className="w-10 h-10 rounded-full border border-emerald-500/20 object-cover select-none shrink-0"
              />
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-mono font-bold bg-neutral-900 text-emerald-400 border border-neutral-800 rounded-full tracking-wider uppercase">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                Available for Custom Contracts
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-4"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-sans font-extrabold text-white tracking-tight leading-none">
                Scale Your Audience with <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">High-Performance</span> Visual Content.
              </h1>
              <p className="text-lg text-neutral-400 max-w-2xl mx-auto lg:mx-0 font-sans leading-relaxed">
                Hi, I&apos;m <span className="text-white font-semibold">Shozab Raza</span>. I construct high-converting YouTube thumbnails, edit viral videos, orchestrate channel automation setups, curate premium stock asset registries, and deploy ranking SEO plans globally.
              </p>
            </motion.div>

            {/* Quick Title Tags */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-wrap gap-2 justify-center lg:justify-start"
            >
              {[
                'Thumbnail Master',
                'Video Editor',
                'Automation Architect',
                'AI Creator',
                'SEO Specialist',
                'Stock Contributor'
              ].map((t) => (
                <span key={t} className="text-[11px] font-mono text-neutral-300 bg-neutral-900/60 border border-neutral-800 px-3 py-1.5 rounded-xl">
                  {t}
                </span>
              ))}
            </motion.div>

            {/* Hero CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2"
            >
              <button
                onClick={() => onNavigate('portfolio')}
                className="inline-flex items-center justify-center gap-2 text-sm font-mono font-bold text-neutral-950 bg-emerald-400 hover:bg-emerald-300 px-6 py-4 rounded-xl shadow-xl shadow-emerald-400/10 active:scale-95 transition-all duration-200"
              >
                Explore Galleries
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </button>
              <button
                onClick={() => onNavigate('services')}
                className="inline-flex items-center justify-center gap-2 text-sm font-mono font-bold text-white bg-neutral-900 hover:bg-neutral-800 px-6 py-4 rounded-xl border border-neutral-800 transition-all duration-200 active:scale-95"
              >
                Fiverr Gigs
                <Youtube className="w-4 h-4" />
              </button>
            </motion.div>
          </div>

          {/* Hero Right Visual: High-Impact Custom Workspace Layout */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            {/* Visual Wrapper */}
            <div className="relative p-2.5 rounded-3xl bg-neutral-950 border border-neutral-800 shadow-2xl shadow-black/80 overflow-hidden group select-none">
              <div className="aspect-square rounded-2xl relative overflow-hidden flex flex-col justify-between p-6">
                {/* Background image underlayer */}
                <div className="absolute inset-0">
                  <img
                    src={videoEditorBanner}
                    alt="Shozab Raza Video Editor Workspace"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/75 to-neutral-950/40" />
                </div>

                {/* Visual Header */}
                <div className="flex items-center justify-between z-10">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500" />
                    <span className="w-3 h-3 rounded-full bg-yellow-500" />
                    <span className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <span className="text-[10px] font-mono text-neutral-300 bg-neutral-950/85 px-2.5 py-1 rounded-md border border-neutral-800 uppercase tracking-widest">
                    Studio Monitor
                  </span>
                </div>

                {/* Main graphic with glassy, frosted metric cards */}
                <div className="space-y-4 my-auto py-4 z-10 w-full">
                  <div className="flex items-center justify-between p-3.5 rounded-xl bg-neutral-900/60 border border-neutral-800/40 backdrop-blur-md">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
                        <TrendingUp className="w-4.5 h-4.5" />
                      </div>
                      <div>
                        <span className="block text-[9px] font-mono text-neutral-400 uppercase tracking-wider">Average CTR</span>
                        <span className="text-lg font-sans font-black text-white">12.8%</span>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                      +210% Growth
                    </span>
                  </div>

                  <div className="flex items-center justify-between p-3.5 rounded-xl bg-neutral-900/60 border border-neutral-800/40 backdrop-blur-md">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400">
                        <Users className="w-4.5 h-4.5" />
                      </div>
                      <div>
                        <span className="block text-[9px] font-mono text-neutral-400 uppercase tracking-wider">Audience Scale</span>
                        <span className="text-lg font-sans font-black text-white">14.5M+</span>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono font-bold text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded border border-blue-500/20">
                      Total Views
                    </span>
                  </div>

                  <div className="flex items-center justify-between p-3.5 rounded-xl bg-neutral-900/60 border border-neutral-800/40 backdrop-blur-md">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400">
                        <Award className="w-4.5 h-4.5" />
                      </div>
                      <div>
                        <span className="block text-[9px] font-mono text-neutral-400 uppercase tracking-wider">Adobe Stock Assets</span>
                        <span className="text-lg font-sans font-black text-white">50,000+</span>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono font-bold text-purple-400 bg-purple-500/10 px-2 py-0.5 rounded border border-purple-500/20">
                      Licensed
                    </span>
                  </div>
                </div>

                {/* Footer Signature */}
                <div className="pt-3 border-t border-neutral-800/60 flex items-center justify-between text-xs text-neutral-400 z-10">
                  <span className="font-mono text-[10px]">Creator: S_Raza</span>
                  <span className="font-sans font-semibold text-emerald-400 text-[11px]">Online Studio Workspace</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Client Metrics Strip */}
      <section className="bg-neutral-950 border-y border-neutral-850 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <span className="block text-3xl sm:text-4xl font-sans font-black text-white">500+</span>
              <span className="block text-xs font-mono text-neutral-500 uppercase tracking-widest mt-1">Thumbnails Designed</span>
            </div>
            <div>
              <span className="block text-3xl sm:text-4xl font-sans font-black text-white">10M+</span>
              <span className="block text-xs font-mono text-neutral-500 uppercase tracking-widest mt-1">Video Impressions Boost</span>
            </div>
            <div>
              <span className="block text-3xl sm:text-4xl font-sans font-black text-white">50,000+</span>
              <span className="block text-xs font-mono text-neutral-500 uppercase tracking-widest mt-1">Stock Downloads</span>
            </div>
            <div>
              <span className="block text-3xl sm:text-4xl font-sans font-black text-white">100%</span>
              <span className="block text-xs font-mono text-neutral-500 uppercase tracking-widest mt-1">Fiverr Satisfaction</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Interactive Before & After Showcase Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="px-3 py-1 text-xs font-mono font-medium bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-full tracking-wider uppercase">
            Proof of Quality
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-sans font-extrabold text-white tracking-tight">
            Before & After Interactive Slide
          </h2>
          <p className="mt-4 text-base text-neutral-400 max-w-2xl mx-auto font-sans leading-relaxed">
            Drag the handle to see actual optimizations. From fading vintage photos back to high definition, to restructuring text layouts to scale click rates.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
          {/* Comparison Card 1 */}
          <div className="flex flex-col justify-between p-6 sm:p-8 rounded-3xl border border-neutral-800 bg-neutral-900/20">
            <div>
              <h3 className="text-lg sm:text-xl font-sans font-bold text-white tracking-tight mb-2">
                {beforeAfterThumb.title}
              </h3>
              <p className="text-sm text-neutral-400 mb-6 leading-relaxed font-sans">
                Redesigning amateur thumbnails to include high-fidelity contrast, deep drop shadows, structured grids, and vibrant background gradients. Maximize your impression potential.
              </p>
            </div>
            <BeforeAfterSlider
              beforeImage={beforeAfterThumb.before}
              afterImage={beforeAfterThumb.after}
              title={beforeAfterThumb.title}
            />
          </div>

          {/* Comparison Card 2 */}
          <div className="flex flex-col justify-between p-6 sm:p-8 rounded-3xl border border-neutral-800 bg-neutral-900/20">
            <div>
              <h3 className="text-lg sm:text-xl font-sans font-bold text-white tracking-tight mb-2">
                {beforeAfterPhoto.title}
              </h3>
              <p className="text-sm text-neutral-400 mb-6 leading-relaxed font-sans">
                Comprehensive vintage photo restoration. Erasing visual tears, correcting humidity damage, and introducing deep learning colorization to bring your history back to life.
              </p>
            </div>
            <BeforeAfterSlider
              beforeImage={beforeAfterPhoto.before}
              afterImage={beforeAfterPhoto.after}
              title={beforeAfterPhoto.title}
            />
          </div>
        </div>
      </section>

      {/* 4. Bento Skills & Expertise Grid */}
      <section className="bg-neutral-950/40 border-y border-neutral-850 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="px-3 py-1 text-xs font-mono font-medium bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-full tracking-wider uppercase">
              Skill Matrix
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-sans font-extrabold text-white tracking-tight">
              My Core Professional Domains
            </h2>
            <p className="mt-4 text-base text-neutral-400 max-w-2xl mx-auto font-sans leading-relaxed">
              I specialize in high-impact growth services that translate directly into higher channel performance, monetization, and asset appreciation.
            </p>
          </div>

          {/* Bento Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Box 1: Thumbnail Design */}
            <div className="md:col-span-2 p-8 rounded-2xl border border-neutral-800 bg-neutral-900/30 backdrop-blur-md hover:border-neutral-700 transition-all duration-300">
              <div className="p-3 bg-red-500/10 text-red-400 rounded-xl w-fit mb-6 border border-red-500/20">
                <Youtube className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-sans font-bold text-white tracking-tight mb-2">
                YouTube Thumbnail Engineering
              </h3>
              <p className="text-sm text-neutral-400 leading-relaxed font-sans">
                A thumbnail has under 1.5 seconds to hook a scrolling viewer. I study psychological triggers, color contrast scales, facial emotion recognition, and structural negative spaces to construct thumbnails that boost CTR on desktop and mobile platforms.
              </p>
            </div>

            {/* Box 2: Video Editing */}
            <div className="p-8 rounded-2xl border border-neutral-800 bg-neutral-900/30 backdrop-blur-md hover:border-neutral-700 transition-all duration-300">
              <div className="p-3 bg-blue-500/10 text-blue-400 rounded-xl w-fit mb-6 border border-blue-500/20">
                <Video className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-sans font-bold text-white tracking-tight mb-2">
                Premium Non-Linear Video Editing
              </h3>
              <p className="text-sm text-neutral-400 leading-relaxed font-sans">
                Cinematic storyboarding, sound-design integration, color grading, and speed ramping optimized for retention rates.
              </p>
            </div>

            {/* Box 3: YouTube Automation */}
            <div className="p-8 rounded-2xl border border-neutral-800 bg-neutral-900/30 backdrop-blur-md hover:border-neutral-700 transition-all duration-300">
              <div className="p-3 bg-purple-500/10 text-purple-400 rounded-xl w-fit mb-6 border border-purple-500/20">
                <Database className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-sans font-bold text-white tracking-tight mb-2">
                YouTube Automation Systems
              </h3>
              <p className="text-sm text-neutral-400 leading-relaxed font-sans">
                Build sustainable cashflow channels. I orchestrate complete operational workflows: automated asset curation, scripts, voiceovers, and scheduled uploads.
              </p>
            </div>

            {/* Box 4: SEO Ranking & Search Optimization */}
            <div className="md:col-span-2 p-8 rounded-2xl border border-neutral-800 bg-neutral-900/30 backdrop-blur-md hover:border-neutral-700 transition-all duration-300">
              <div className="p-3 bg-amber-500/10 text-amber-400 rounded-xl w-fit mb-6 border border-amber-500/20">
                <Search className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-sans font-bold text-white tracking-tight mb-2">
                Search Engine Optimization & Visibility Mapping
              </h3>
              <p className="text-sm text-neutral-400 leading-relaxed font-sans">
                Increase your organic positioning on Google and YouTube searches. Utilizing strict keyword semantic maps, competitor query profiling, structured schema implementations, and search intent targeting to bring high-retention traffic to your digital portals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Gigs Teaser */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-16">
          <div>
            <span className="px-3 py-1 text-xs font-mono font-medium bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-full tracking-wider uppercase">
              Marketplace
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-sans font-extrabold text-white tracking-tight">
              Featured Freelance Services
            </h2>
            <p className="mt-2 text-base text-neutral-400 max-w-xl font-sans leading-relaxed">
              Order directly on Fiverr with escrow buyer protection and instant revision rights.
            </p>
          </div>
          <button
            onClick={() => onNavigate('services')}
            className="inline-flex items-center gap-2 text-xs font-mono font-bold text-white bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 px-5 py-3.5 rounded-xl transition-all"
          >
            View All Services ({initialGigs.length})
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Gig Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {initialGigs.map((gig) => (
            <div
              key={gig.id}
              className="flex flex-col justify-between rounded-2xl border border-neutral-800 bg-neutral-900/40 hover:border-neutral-700 transition-all duration-300 p-5 group"
            >
              <div>
                <div className="relative aspect-video rounded-xl overflow-hidden mb-4">
                  <img
                    src={gig.imageUrl}
                    alt={gig.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                  />
                  <span className="absolute top-2 left-2 text-[8px] font-mono font-bold text-emerald-400 bg-black/80 border border-neutral-800 px-2 py-0.5 rounded-md">
                    {gig.category}
                  </span>
                </div>
                <h3 className="text-sm sm:text-base font-sans font-bold text-white tracking-tight leading-snug line-clamp-2">
                  {gig.title}
                </h3>
              </div>

              <div className="mt-6 pt-4 border-t border-neutral-850 flex items-center justify-between">
                <div>
                  <span className="block text-[8px] font-mono text-neutral-500">STARTING AT</span>
                  <span className="text-base font-sans font-black text-emerald-400">{gig.startingPrice}</span>
                </div>
                <a
                  href={gig.gigUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl bg-neutral-800 text-neutral-300 hover:bg-emerald-400 hover:text-neutral-950 transition-colors"
                >
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Why Choose Shozab section */}
      <section className="bg-neutral-950 border-t border-neutral-850 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <span className="px-3 py-1 text-xs font-mono font-medium bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-full tracking-wider uppercase">
              Creative Partner
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-sans font-extrabold text-white tracking-tight">
              Why Partner With Me?
            </h2>
            <p className="mt-4 text-base text-neutral-400 leading-relaxed font-sans">
              I do not just create generic assets. I design growth-engineered digital instruments focused entirely on conversion, engagement, and click optimization.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex gap-4">
                <div className="p-2 bg-emerald-500/10 text-emerald-400 rounded-lg border border-emerald-500/20 h-fit">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-sans font-bold text-white">Fiverr Escrow Safety</h4>
                  <p className="text-xs text-neutral-500 mt-1 leading-relaxed">All transactions go through Fiverr, ensuring zero-risk investments for your brand.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="p-2 bg-emerald-500/10 text-emerald-400 rounded-lg border border-emerald-500/20 h-fit">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-sans font-bold text-white">Under 24H Available</h4>
                  <p className="text-xs text-neutral-500 mt-1 leading-relaxed">Fast-turnaround options for breaking news and high-priority channel releases.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-neutral-900/50 border border-neutral-800">
              <CheckCircle className="w-6 h-6 text-emerald-400 mb-4" />
              <h4 className="text-sm font-sans font-bold text-white">Psychology-Backed CTR</h4>
              <p className="text-xs text-neutral-500 mt-2 leading-relaxed font-sans">
                Every line, expression, color tint, and font is strategically placed to trigger intense scroll stops and action clicks.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-neutral-900/50 border border-neutral-800">
              <CheckCircle className="w-6 h-6 text-emerald-400 mb-4" />
              <h4 className="text-sm font-sans font-bold text-white">Multi-Platform Ready</h4>
              <p className="text-xs text-neutral-500 mt-2 leading-relaxed font-sans">
                Images, stock photos, and videos formatted for YouTube, TikTok, Adobe Stock, and corporate dashboards simultaneously.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-neutral-900/50 border border-neutral-800">
              <CheckCircle className="w-6 h-6 text-emerald-400 mb-4" />
              <h4 className="text-sm font-sans font-bold text-white">Scalable Automation</h4>
              <p className="text-xs text-neutral-500 mt-2 leading-relaxed font-sans">
                Full lifecycle channel setup and production lines that deliver passive income structures on luxury and tech niches.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-neutral-900/50 border border-neutral-800">
              <CheckCircle className="w-6 h-6 text-emerald-400 mb-4" />
              <h4 className="text-sm font-sans font-bold text-white">High Fidelity Restoration</h4>
              <p className="text-xs text-neutral-500 mt-2 leading-relaxed font-sans">
                Advanced digital preservation that enhances old low-res files into print-ready 300 DPI heirloom formats.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Contact Agency Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="p-8 sm:p-16 rounded-3xl bg-neutral-900/30 border border-neutral-800 relative overflow-hidden flex flex-col items-center text-center">
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
          
          <span className="px-3 py-1 text-xs font-mono font-medium bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-full tracking-wider uppercase">
            Start Today
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-sans font-extrabold text-white tracking-tight max-w-2xl">
            Let&apos;s Build Something Extraordinary Together
          </h2>
          <p className="mt-4 text-base text-neutral-400 max-w-xl font-sans leading-relaxed">
            Need high-CTR thumbnails, expert video editing, automated channel setups, or print-ready image restorations? Order on Fiverr now or connect on social media.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a
              href="https://www.fiverr.com/shozabraza2/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 text-sm font-mono font-bold text-neutral-950 bg-emerald-400 hover:bg-emerald-300 px-8 py-4 rounded-xl transition-all shadow-lg active:scale-95"
            >
              Order on Fiverr
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </a>
            <button
              onClick={() => onNavigate('profiles')}
              className="inline-flex items-center justify-center gap-2 text-sm font-mono font-bold text-white bg-neutral-950 hover:bg-neutral-900 px-8 py-4 rounded-xl border border-neutral-800 transition-all active:scale-95"
            >
              Contact Profiles
              <MessageSquare className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
