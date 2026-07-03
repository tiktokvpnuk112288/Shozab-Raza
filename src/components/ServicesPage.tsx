/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { initialGigs } from '../data';
import { Check, Star, Clock, ArrowRight, DollarSign, ChevronLeft, ChevronRight } from 'lucide-react';

interface GigMediaGalleryProps {
  imageUrl: string;
  galleryImages?: string[];
  title: string;
  category: string;
}

function GigMediaGallery({ imageUrl, galleryImages, title, category }: GigMediaGalleryProps) {
  const images = galleryImages && galleryImages.length > 0 ? galleryImages : [imageUrl];
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full md:w-5/12 aspect-video md:aspect-auto min-h-[240px] bg-neutral-900 overflow-hidden group select-none">
      {/* Active Image */}
      <img
        src={images[activeIndex]}
        alt={`${title} - Gallery Image ${activeIndex + 1}`}
        referrerPolicy="no-referrer"
        className="w-full h-full object-cover transition-all duration-500"
      />

      {/* Visual Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:via-neutral-950/20 md:to-neutral-950/85 pointer-events-none" />
      
      {/* Category Tag */}
      <span className="absolute top-4 left-4 z-10 px-3 py-1 text-[10px] font-mono font-bold tracking-wider uppercase bg-emerald-500/90 text-neutral-950 rounded-full shadow-lg">
        {category}
      </span>

      {/* Fiverr Official Tag Badge */}
      <div className="absolute bottom-4 left-4 z-10 flex items-center gap-1.5 bg-black/75 backdrop-blur-md px-2.5 py-1 rounded-lg border border-neutral-700">
        <Star className="w-3.5 h-3.5 fill-amber-400 stroke-amber-400" />
        <span className="text-xs font-bold text-white font-sans">5.0</span>
        <span className="text-[10px] text-neutral-400 font-mono font-medium">(100+ reviews)</span>
      </div>

      {/* Navigation Controls (Only show if multiple images exist) */}
      {images.length > 1 && (
        <>
          <button
            onClick={handlePrev}
            className="absolute left-2.5 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-black/60 hover:bg-black/80 text-white/80 hover:text-white border border-neutral-800 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-4 h-4 stroke-[2.5]" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-2.5 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-black/60 hover:bg-black/80 text-white/80 hover:text-white border border-neutral-800 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
            aria-label="Next image"
          >
            <ChevronRight className="w-4 h-4 stroke-[2.5]" />
          </button>

          {/* Pagination Indicators */}
          <div className="absolute bottom-4 right-4 z-10 flex items-center gap-1 bg-black/50 backdrop-blur-md px-2 py-1 rounded-full border border-neutral-800">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setActiveIndex(idx);
                }}
                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                  idx === activeIndex ? 'bg-emerald-400 w-3' : 'bg-neutral-500 hover:bg-neutral-400'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default function ServicesPage() {
  return (
    <div id="fiverr-services-page" className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Page Header */}
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="px-3 py-1 text-xs font-mono font-medium bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-full tracking-wider uppercase">
            Fiverr Marketplace
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl font-sans font-bold text-white tracking-tight">
            Fiverr Freelance Gigs
          </h1>
          <p className="mt-4 text-lg text-neutral-400 max-w-2xl mx-auto font-sans leading-relaxed">
            Order premium design, restoration, and editing services directly on Fiverr with 100% buyer protection, fast turnarounds, and top-tier client feedback.
          </p>
        </motion.div>
      </div>

      {/* Gigs List / Premium Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {initialGigs.map((gig, index) => {
          return (
            <motion.div
              key={gig.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, delay: index * 0.1 }}
              whileHover={{
                y: -6,
                borderColor: 'rgba(16, 185, 129, 0.3)',
                boxShadow: '0 20px 40px -15px rgba(16, 185, 129, 0.08)'
              }}
              className="flex flex-col md:flex-row rounded-3xl overflow-hidden border border-neutral-800 bg-neutral-900/30 backdrop-blur-md transition-all duration-300"
            >
              {/* Left Side: Interactive Gig Image / Media Gallery */}
              <GigMediaGallery
                imageUrl={gig.imageUrl}
                galleryImages={gig.galleryImages}
                title={gig.title}
                category={gig.category}
              />

              {/* Right Side: Gig Content */}
              <div className="flex-1 p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  {/* Fiverr Logo & Title */}
                  <div className="flex items-center justify-between mb-4">
                    {/* Stylized Fiverr Logo */}
                    <div className="flex items-center gap-1 font-sans text-lg font-black tracking-tight select-none">
                      <span className="text-white">fiverr</span>
                      <span className="text-emerald-500 font-extrabold text-2xl leading-none">.</span>
                    </div>

                    <div className="flex items-center gap-3 text-xs text-neutral-500 font-mono">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-neutral-400" />
                        {gig.deliveryTime}
                      </span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-sans font-bold text-white tracking-tight leading-snug hover:text-emerald-400 transition-colors duration-200">
                    {gig.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 text-sm text-neutral-400 leading-relaxed font-sans line-clamp-3">
                    {gig.description}
                  </p>

                  {/* Bullet points */}
                  <ul className="mt-4 space-y-2">
                    {gig.features.slice(0, 3).map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5 text-xs text-neutral-300 font-sans">
                        <span className="mt-0.5 p-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                          <Check className="w-3 h-3 stroke-[3]" />
                        </span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer and Call-to-action */}
                <div className="mt-6 pt-4 border-t border-neutral-800/80 flex items-center justify-between">
                  {/* Price */}
                  <div>
                    <span className="block text-[10px] font-mono text-neutral-500 uppercase tracking-widest">
                      STARTING AT
                    </span>
                    <span className="text-2xl font-sans font-extrabold text-white tracking-tight flex items-center">
                      <span className="text-emerald-400 text-lg font-medium">$</span>
                      {gig.startingPrice.replace('$', '')}
                    </span>
                  </div>

                  {/* CTA Button */}
                  <a
                    href={gig.gigUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-mono font-bold text-neutral-950 bg-emerald-400 hover:bg-emerald-300 active:scale-95 px-5 py-3 rounded-xl shadow-lg shadow-emerald-400/10 hover:shadow-emerald-400/20 transition-all duration-300"
                  >
                    Order Gig
                    <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                  </a>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Bottom CTA Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="mt-16 p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-neutral-900 to-neutral-950 border border-neutral-800 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left"
      >
        <div>
          <h3 className="text-2xl font-sans font-bold text-white tracking-tight">
            Need a Custom Design Package?
          </h3>
          <p className="mt-2 text-sm sm:text-base text-neutral-400 max-w-xl font-sans leading-relaxed">
            Do you have bulk YouTube channels or complex photo restoration workloads? I offer custom quotes, competitive pricing, and tailored delivery schedules.
          </p>
        </div>
        <a
          href="https://www.fiverr.com/shozabraza2/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full md:w-auto text-center inline-flex items-center justify-center gap-2 text-xs font-mono font-bold text-white bg-neutral-800 hover:bg-neutral-700 px-6 py-4 rounded-xl border border-neutral-700 transition-all duration-300 active:scale-95"
        >
          Request Custom Order
          <ArrowRight className="w-4 h-4" />
        </a>
      </motion.div>
    </div>
  );
}
