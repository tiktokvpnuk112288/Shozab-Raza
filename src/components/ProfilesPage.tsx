/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { initialProfiles } from '../data';
import * as LucideIcons from 'lucide-react';
import shozabPortrait from '../assets/images/shozab_portrait_1783063350884.jpg';

export default function ProfilesPage() {
  // Helper to render lucide icons dynamically
  const renderIcon = (name: string, colorClass: string) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const IconComponent = (LucideIcons as any)[name];
    if (IconComponent) {
      return <IconComponent className={`w-6 h-6 ${colorClass}`} />;
    }
    return <LucideIcons.Globe className={`w-6 h-6 ${colorClass}`} />;
  };

  return (
    <div id="professional-profiles-page" className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Page Header */}
      <div className="mb-16 bg-neutral-900/25 border border-neutral-850 p-6 sm:p-8 rounded-3xl flex flex-col md:flex-row items-center gap-8 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative shrink-0 w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-2xl overflow-hidden border border-emerald-500/30 shadow-2xl shadow-emerald-500/5 group select-none"
        >
          <img
            src={shozabPortrait}
            alt="Shozab Raza Portrait"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/40 to-transparent pointer-events-none" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center md:text-left space-y-3"
        >
          <span className="inline-flex px-3 py-1 text-xs font-mono font-medium bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-full tracking-wider uppercase">
            Global Presence
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-sans font-extrabold text-white tracking-tight">
            My Professional Profiles
          </h1>
          <p className="text-sm sm:text-base text-neutral-400 max-w-2xl font-sans leading-relaxed">
            Connect with me across official freelancing platforms, digital stock agencies, and corporate social networks. I deliver world-class digital assets and creative services globally.
          </p>
        </motion.div>
      </div>

      {/* Grid Layout for Profiles */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {initialProfiles.map((profile, index) => {
          // Compute subtle bg glowing effect color
          let glowColor = 'rgba(16, 185, 129, 0.15)'; // default emerald
          if (profile.platform.includes('Adobe')) glowColor = 'rgba(239, 68, 68, 0.15)';
          else if (profile.platform.includes('Shutterstock')) glowColor = 'rgba(249, 115, 22, 0.15)';
          else if (profile.platform.includes('123RF')) glowColor = 'rgba(245, 158, 11, 0.15)';
          else if (profile.platform.includes('Dreamstime')) glowColor = 'rgba(59, 130, 246, 0.15)';
          else if (profile.platform.includes('LinkedIn')) glowColor = 'rgba(37, 99, 235, 0.15)';
          else if (profile.platform.includes('Instagram')) glowColor = 'rgba(236, 72, 153, 0.15)';
          else if (profile.platform.includes('Facebook')) glowColor = 'rgba(29, 78, 216, 0.15)';

          return (
            <motion.div
              key={profile.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{
                y: -8,
                boxShadow: `0 20px 40px -15px ${glowColor}`,
                borderColor: 'rgba(255, 255, 255, 0.2)'
              }}
              className="relative flex flex-col justify-between p-8 rounded-2xl border border-neutral-800 bg-neutral-900/40 backdrop-blur-md transition-all duration-300"
            >
              {/* Card Header */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  {/* Brand Tag/Badge */}
                  <span className="text-[10px] font-mono font-bold tracking-wider uppercase px-2.5 py-1 rounded-full bg-neutral-800 text-neutral-400 border border-neutral-700">
                    {profile.platform}
                  </span>

                  {/* Icon */}
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${profile.accentColor} bg-opacity-10 text-white flex items-center justify-center shadow-lg shadow-black/40`}>
                    {renderIcon(profile.iconName, 'text-white')}
                  </div>
                </div>

                {/* Profile Name */}
                <h3 className="text-xl font-sans font-bold text-white tracking-tight mb-2 flex items-center gap-2">
                  {profile.name}
                  {profile.badgeText && (
                    <span className="text-[9px] font-mono font-extrabold tracking-widest text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 uppercase">
                      {profile.badgeText}
                    </span>
                  )}
                </h3>

                {/* Description */}
                <p className="text-sm text-neutral-400 leading-relaxed mb-6 font-sans">
                  {profile.description}
                </p>
              </div>

              {/* Visit Button */}
              <div className="mt-auto pt-4 border-t border-neutral-800/60 flex items-center justify-between">
                <span className="text-[11px] font-mono text-neutral-500">
                  Global Contributor
                </span>
                <a
                  href={profile.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-white bg-neutral-800 hover:bg-white hover:text-neutral-950 px-4 py-2.5 rounded-xl border border-neutral-700 hover:border-white transition-all duration-300 active:scale-95"
                >
                  Visit Profile
                  <LucideIcons.ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
