/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { initialPortfolio } from '../data';
import { PortfolioItem, PortfolioCategory } from '../types';
import BeforeAfterSlider from './BeforeAfterSlider';
import {
  Search,
  SlidersHorizontal,
  X,
  Play,
  ArrowRight,
  TrendingUp,
  Eye,
  BarChart,
  Grid,
  Sparkles,
  Info,
  HelpCircle,
  Layers,
} from 'lucide-react';

const CATEGORIES: PortfolioCategory[] = [
  'Thumbnail Design',
  'Thumbnail Templates',
  'Before & After Thumbnail Comparisons',
  'Video Editing',
  'YouTube Automation',
  'Adobe Stock Images',
  'Shutterstock Portfolio',
  'Dreamstime Portfolio',
  '123RF Portfolio',
  'AI Images',
  'SEO Projects',
  'Photo Restoration',
  'Photo Upscaling'
];

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeItem, setActiveItem] = useState<PortfolioItem | null>(null);

  // Filter items based on Category & Search Query
  const filteredItems = initialPortfolio.filter((item) => {
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase())) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div id="portfolio-galleries-page" className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12 border-b border-neutral-800 pb-10">
        <div className="text-center md:text-left">
          <span className="px-3 py-1 text-xs font-mono font-medium bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-full tracking-wider uppercase">
            Curated Gallery
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl font-sans font-bold text-white tracking-tight">
            Portfolio Galleries
          </h1>
          <p className="mt-4 text-base text-neutral-400 max-w-2xl font-sans leading-relaxed">
            Automatically organized folders containing thumbnail designs, restoration comparisons, SEO dashboards, video reels, and official stock digital asset collections.
          </p>
        </div>
      </div>

      {/* Search and Filters Hub */}
      <div className="bg-neutral-900/30 border border-neutral-800/80 p-5 rounded-2xl mb-12 flex flex-col lg:flex-row gap-5 items-center justify-between backdrop-blur-md">
        {/* Search */}
        <div className="relative w-full lg:max-w-md">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" />
          <input
            type="text"
            placeholder="Search keywords, categories, metrics..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-neutral-950/80 border border-neutral-800 focus:border-emerald-500/40 focus:ring-1 focus:ring-emerald-500/40 rounded-xl py-3 pl-11 pr-4 text-sm font-sans text-white placeholder-neutral-500 outline-none transition-all duration-200"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-500 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Dynamic Folders Info Banner */}
        <div className="flex items-center gap-2.5 bg-neutral-950/50 border border-neutral-800/60 px-4 py-2 rounded-xl text-xs text-neutral-400 font-mono">
          <SlidersHorizontal className="w-4 h-4 text-emerald-400" />
          <span>Showing {filteredItems.length} of {initialPortfolio.length} files. Smart folders organize all assets dynamically.</span>
        </div>
      </div>

      {/* Category Folders Toolbar */}
      <div className="mb-12">
        <div className="flex items-center gap-2 mb-4 text-xs font-mono text-neutral-500 font-bold uppercase tracking-wider">
          <Layers className="w-3.5 h-3.5" />
          <span>Active Folders</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {/* 'All' category */}
          <button
            onClick={() => setSelectedCategory('All')}
            className={`px-4 py-2 rounded-xl text-xs font-mono font-semibold transition-all duration-200 active:scale-95 ${
              selectedCategory === 'All'
                ? 'bg-emerald-400 text-neutral-950 shadow-md shadow-emerald-400/5'
                : 'bg-neutral-900 text-neutral-400 hover:bg-neutral-800 hover:text-white border border-neutral-800/60'
            }`}
          >
            All Folders ({initialPortfolio.length})
          </button>

          {CATEGORIES.map((cat) => {
            const count = initialPortfolio.filter((item) => item.category === cat).length;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-semibold transition-all duration-200 active:scale-95 ${
                  selectedCategory === cat
                    ? 'bg-emerald-400 text-neutral-950 shadow-md shadow-emerald-400/5'
                    : 'bg-neutral-900 text-neutral-400 hover:bg-neutral-800 hover:text-white border border-neutral-800/60'
                }`}
              >
                {cat} ({count})
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Portfolio Grid */}
      <AnimatePresence mode="popLayout">
        {filteredItems.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-center py-20 border-2 border-dashed border-neutral-800 rounded-3xl"
          >
            <HelpCircle className="w-12 h-12 text-neutral-600 mx-auto mb-4 animate-pulse" />
            <h3 className="text-lg font-sans font-bold text-white">No items found in folder</h3>
            <p className="text-sm text-neutral-500 mt-2 max-w-sm mx-auto font-sans leading-relaxed">
              We couldn&apos;t find any assets matching &quot;{searchQuery}&quot; in the {selectedCategory} folder. Try adjusting your keywords.
            </p>
          </motion.div>
        ) : (
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredItems.map((item) => {
              const isComparison =
                item.category === 'Before & After Thumbnail Comparisons' ||
                item.category === 'Photo Restoration' ||
                item.category === 'Photo Upscaling';

              return (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35 }}
                  whileHover={{ y: -4 }}
                  className="group relative flex flex-col justify-between rounded-2xl border border-neutral-800 bg-neutral-900/30 overflow-hidden hover:border-neutral-700 transition-all duration-300"
                >
                  {/* Card Media Preview Container */}
                  <div className="relative aspect-16/10 bg-neutral-950 overflow-hidden select-none">
                    {/* Render Interactive Slider directly on list if Before/After is present */}
                    {isComparison && item.beforeImageUrl ? (
                      <BeforeAfterSlider
                        beforeImage={item.beforeImageUrl}
                        afterImage={item.imageUrl}
                        title={item.title}
                      />
                    ) : (
                      <>
                        <img
                          src={item.imageUrl}
                          alt={item.title}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                        />
                        <div className="absolute inset-0 bg-neutral-950/30 transition-opacity group-hover:opacity-10 pointer-events-none" />

                        {/* Interactive Action Icon Overlay */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/60 backdrop-blur-[2px]">
                          <button
                            onClick={() => setActiveItem(item)}
                            className="p-3.5 rounded-full bg-emerald-400 text-neutral-950 shadow-2xl hover:bg-emerald-300 transition-transform active:scale-90 flex items-center gap-2 text-xs font-mono font-bold"
                          >
                            {item.videoUrl ? <Play className="w-4 h-4 fill-neutral-950" /> : <Eye className="w-4 h-4" />}
                            {item.videoUrl ? 'Play Video' : 'View Details'}
                          </button>
                        </div>

                        {/* Video Badge */}
                        {item.videoUrl && (
                          <div className="absolute top-4 right-4 bg-black/75 backdrop-blur-md p-2 rounded-xl border border-red-500/20 text-red-500 shadow-xl flex items-center gap-1.5">
                            <Play className="w-3.5 h-3.5 fill-red-500" />
                            <span className="text-[10px] font-mono font-bold uppercase tracking-wider">VIDEO</span>
                          </div>
                        )}
                      </>
                    )}

                    {/* Category Overlay Tag */}
                    <div className="absolute bottom-4 left-4 z-10 bg-neutral-950/90 backdrop-blur-md px-3 py-1.5 rounded-xl border border-neutral-800 text-[10px] font-mono text-neutral-300 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      {item.category}
                    </div>
                  </div>

                  {/* Card Info Content */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Metric Chips (if available) */}
                      {item.metrics && (
                        <div className="flex flex-wrap gap-2 mb-4">
                          {item.metrics.ctr && (
                            <span className="inline-flex items-center gap-1 text-[10px] font-mono font-bold text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded-lg border border-emerald-500/20">
                              <TrendingUp className="w-3.5 h-3.5" />
                              CTR: {item.metrics.ctr}
                            </span>
                          )}
                          {item.metrics.views && (
                            <span className="inline-flex items-center gap-1 text-[10px] font-mono font-bold text-blue-400 bg-blue-500/10 px-2 py-1 rounded-lg border border-blue-500/20">
                              <Eye className="w-3.5 h-3.5" />
                              Views: {item.metrics.views}
                            </span>
                          )}
                          {item.metrics.seoScore && (
                            <span className="inline-flex items-center gap-1 text-[10px] font-mono font-bold text-yellow-400 bg-yellow-500/10 px-2 py-1 rounded-lg border border-yellow-500/20">
                              <BarChart className="w-3.5 h-3.5" />
                              SEO Score: {item.metrics.seoScore}
                            </span>
                          )}
                          {item.metrics.organicTraffic && (
                            <span className="inline-flex items-center gap-1 text-[10px] font-mono font-bold text-pink-400 bg-pink-500/10 px-2 py-1 rounded-lg border border-pink-500/20">
                              <Sparkles className="w-3.5 h-3.5" />
                              {item.metrics.organicTraffic}
                            </span>
                          )}
                        </div>
                      )}

                      {/* Title */}
                      <h3
                        onClick={() => setActiveItem(item)}
                        className="text-base sm:text-lg font-sans font-bold text-white tracking-tight hover:text-emerald-400 cursor-pointer transition-colors duration-200"
                      >
                        {item.title}
                      </h3>

                      {/* Description */}
                      <p className="mt-2 text-xs sm:text-sm text-neutral-400 leading-relaxed font-sans line-clamp-2">
                        {item.description}
                      </p>
                    </div>

                    {/* Footer Tags */}
                    <div className="mt-6 pt-4 border-t border-neutral-850 flex flex-wrap gap-1.5">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[9px] font-mono text-neutral-400 bg-neutral-800/50 px-2 py-0.5 rounded border border-neutral-800"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Full Screen Lightbox Modal for Items */}
      <AnimatePresence>
        {activeItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 350 }}
              className="relative w-full max-w-5xl bg-neutral-900 border border-neutral-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveItem(null)}
                className="absolute top-4 right-4 z-50 p-2 rounded-full bg-black/50 text-neutral-400 hover:text-white border border-neutral-800 backdrop-blur-md transition-colors active:scale-95"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Lightbox Media Segment */}
              <div className="flex-1 min-h-[300px] bg-black flex items-center justify-center relative">
                {activeItem.videoUrl ? (
                  // Video Embed Player
                  <div className="w-full aspect-video select-none">
                    <iframe
                      src={activeItem.videoUrl}
                      title={activeItem.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full border-0"
                    />
                  </div>
                ) : activeItem.beforeImageUrl ? (
                  // Double image comparison slider
                  <div className="w-full p-6 flex items-center justify-center">
                    <div className="w-full max-w-2xl">
                      <BeforeAfterSlider
                        beforeImage={activeItem.beforeImageUrl}
                        afterImage={activeItem.imageUrl}
                        title={activeItem.title}
                      />
                    </div>
                  </div>
                ) : (
                  // Single image static preview
                  <img
                    src={activeItem.imageUrl}
                    alt={activeItem.title}
                    referrerPolicy="no-referrer"
                    className="max-h-[75vh] object-contain"
                  />
                )}
              </div>

              {/* Lightbox Info Segment */}
              <div className="w-full lg:w-96 p-6 sm:p-8 bg-neutral-900 border-t lg:border-t-0 lg:border-l border-neutral-800 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-mono font-bold tracking-widest text-emerald-400 uppercase bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-full">
                    {activeItem.category}
                  </span>

                  <h2 className="mt-4 text-xl sm:text-2xl font-sans font-extrabold text-white tracking-tight">
                    {activeItem.title}
                  </h2>

                  <p className="mt-4 text-xs font-mono text-neutral-500 flex items-center gap-1.5">
                    <Info className="w-3.5 h-3.5" />
                    Auto-Organized folder • Added on {activeItem.dateAdded}
                  </p>

                  <p className="mt-4 text-sm text-neutral-300 leading-relaxed font-sans">
                    {activeItem.description}
                  </p>

                  {/* Metrics Dashboard */}
                  {activeItem.metrics && (
                    <div className="mt-6 p-4 rounded-xl bg-neutral-950/60 border border-neutral-850">
                      <h4 className="text-xs font-mono text-neutral-400 font-bold uppercase tracking-wider mb-3">
                        Project Performance Metrics
                      </h4>
                      <div className="grid grid-cols-2 gap-3">
                        {activeItem.metrics.ctr && (
                          <div className="bg-neutral-900 p-2.5 rounded-lg border border-neutral-800">
                            <span className="block text-[9px] font-mono text-neutral-500 uppercase">
                              Click Rate (CTR)
                            </span>
                            <span className="text-base font-sans font-extrabold text-emerald-400">
                              {activeItem.metrics.ctr}
                            </span>
                          </div>
                        )}
                        {activeItem.metrics.views && (
                          <div className="bg-neutral-900 p-2.5 rounded-lg border border-neutral-800">
                            <span className="block text-[9px] font-mono text-neutral-500 uppercase">
                              Channel Views
                            </span>
                            <span className="text-base font-sans font-extrabold text-blue-400">
                              {activeItem.metrics.views}
                            </span>
                          </div>
                        )}
                        {activeItem.metrics.seoScore && (
                          <div className="bg-neutral-900 p-2.5 rounded-lg border border-neutral-800">
                            <span className="block text-[9px] font-mono text-neutral-500 uppercase">
                              SEO Score
                            </span>
                            <span className="text-base font-sans font-extrabold text-yellow-400">
                              {activeItem.metrics.seoScore}
                            </span>
                          </div>
                        )}
                        {activeItem.metrics.organicTraffic && (
                          <div className="bg-neutral-900 p-2.5 rounded-lg border border-neutral-800">
                            <span className="block text-[9px] font-mono text-neutral-500 uppercase">
                              Growth Rate
                            </span>
                            <span className="text-base font-sans font-extrabold text-pink-400">
                              {activeItem.metrics.organicTraffic}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Tag List */}
                  <div className="mt-6 flex flex-wrap gap-1.5">
                    {activeItem.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-mono text-neutral-400 bg-neutral-950 px-2.5 py-1 rounded-lg border border-neutral-850"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Buttons */}
                <div className="mt-8 pt-6 border-t border-neutral-800 flex items-center justify-between">
                  <span className="text-xs font-mono text-neutral-500">
                    Ready to hire?
                  </span>
                  <a
                    href="https://www.fiverr.com/shozabraza2/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-neutral-950 bg-emerald-400 hover:bg-emerald-300 px-4 py-2.5 rounded-xl shadow-md transition-all active:scale-95"
                  >
                    Discuss Project
                    <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
