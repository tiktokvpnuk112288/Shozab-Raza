/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ProfessionalProfile, FiverrService, PortfolioItem } from './types';
import shozabPortrait from './assets/images/shozab_portrait_1783063350884.jpg';
import videoEditorBanner from './assets/images/video_editor_banner_1783063383470.jpg';
import fiverrGigHouseBeforeAfter from './assets/images/fiverr_gig_house_before_after_1783063942993.jpg';
import fiverrGigCarBeforeAfter from './assets/images/fiverr_gig_car_before_after_1783063963776.jpg';

export const initialProfiles: ProfessionalProfile[] = [
  {
    id: 'fiverr-profile',
    platform: 'Fiverr',
    name: 'shozabraza2',
    url: 'https://www.fiverr.com/shozabraza2/',
    description: 'Top-rated services for YouTube thumbnail design, professional video editing, and advanced photo restoration. Building high-CTR designs and engaging visual stories.',
    iconName: 'ShoppingBag',
    accentColor: 'from-emerald-500 to-teal-600',
    badgeText: 'Hire Me'
  },
  {
    id: 'adobe-stock-1',
    platform: 'Adobe Stock (Asset Arc)',
    name: 'Asset Arc',
    url: 'https://stock.adobe.com/contributor/212965971/Asset%20Arc',
    description: 'Premium collection of highly-curated stock photos, editorial graphics, and modern commercial illustrations for brands and agencies.',
    iconName: 'Image',
    accentColor: 'from-red-500 to-rose-600',
    badgeText: 'Contributor'
  },
  {
    id: 'adobe-stock-2',
    platform: 'Adobe Stock (Pro Stock Photos)',
    name: 'Pro Stock Photos',
    url: 'https://stock.adobe.com/contributor/213009634/pro%20stock%20photos',
    description: 'High-definition, professional stock imagery specializing in commercial environments, corporate events, and lifestyle photography.',
    iconName: 'Camera',
    accentColor: 'from-rose-500 to-orange-500',
    badgeText: 'Contributor'
  },
  {
    id: 'shutterstock',
    platform: 'Shutterstock',
    name: 'Asset Arc',
    url: 'https://www.shutterstock.com/g/Asset+Arc',
    description: 'Diverse digital asset portfolio featuring ultra-high resolution photography, stock illustrations, and premium vector graphics.',
    iconName: 'Grid',
    accentColor: 'from-orange-500 to-amber-600',
    badgeText: 'Contributor'
  },
  {
    id: '123rf',
    platform: '123RF',
    name: 'Pro Stock Images',
    url: 'https://www.123rf.com/profile_prostockimages',
    description: 'Vast creative collection of stock photography, creative vectors, and premium imagery tailored for web, print, and digital marketing.',
    iconName: 'Layers',
    accentColor: 'from-yellow-500 to-amber-500',
    badgeText: 'Contributor'
  },
  {
    id: 'dreamstime',
    platform: 'Dreamstime',
    name: 'Shozab Raza',
    url: 'https://www.dreamstime.com/shozabrazahussaini12_info',
    description: 'High-quality microstock images, illustrations, and digital art optimized for media publications, web development, and blogging.',
    iconName: 'Sparkles',
    accentColor: 'from-blue-500 to-indigo-600',
    badgeText: 'Contributor'
  },
  {
    id: 'pixabay',
    platform: 'Pixabay',
    name: 'Premium Pixel Collection',
    url: 'https://pixabay.com/users/premiumpixelcollection-55526451/',
    description: 'Stunning free-to-use premium pixel collections, royalty-free stock imagery, and vectors shared with the global creative community.',
    iconName: 'Globe',
    accentColor: 'from-emerald-400 to-green-600',
    badgeText: 'Free Assets'
  },
  {
    id: 'linkedin',
    platform: 'LinkedIn',
    name: 'Shozab Raza',
    url: 'https://pk.linkedin.com/in/shozab-raza-674698226',
    description: 'Connect with me professionally. Sharing industry insights, viral YouTube strategies, SEO case studies, and corporate design portfolios.',
    iconName: 'Linkedin',
    accentColor: 'from-blue-600 to-sky-600',
    badgeText: 'Network'
  },
  {
    id: 'instagram',
    platform: 'Instagram',
    name: '@learnwithshozab',
    url: 'https://www.instagram.com/learnwithshozab/',
    description: 'Daily visual design tutorials, portfolio showcases, thumbnail breakdown videos, and client success stories.',
    iconName: 'Instagram',
    accentColor: 'from-pink-500 via-red-500 to-yellow-500',
    badgeText: 'Follow'
  },
  {
    id: 'facebook',
    platform: 'Facebook',
    name: 'Shozab Raza',
    url: 'https://web.facebook.com/profile.php?id=61564359150661',
    description: 'Official Facebook portal for tutorials, community discussions, and creative design services announcements.',
    iconName: 'Facebook',
    accentColor: 'from-blue-700 to-indigo-800',
    badgeText: 'Community'
  }
];

export const initialGigs: FiverrService[] = [
  {
    id: 'gig-1',
    title: 'I Will Design Eye-Catching YouTube Thumbnails That Boost CTR',
    gigUrl: 'https://www.fiverr.com/s/e6gE4N3',
    category: 'Thumbnail Design',
    description: 'Transform your channel CTR (Click-Through Rate) with high-converting, custom-designed thumbnails. Combining visual psychology, vibrant color palettes, and bold typography that commands attention in feeds.',
    features: [
      'High-CTR focus with visual flow optimization',
      'Ultra HD resolution (1920x1080, 300 DPI)',
      'Custom graphics, high-contrast text, and source files',
      'Unlimited revisions for maximum satisfaction',
      'Fast delivery option (under 24 hours)'
    ],
    imageUrl: fiverrGigCarBeforeAfter,
    galleryImages: [fiverrGigCarBeforeAfter, fiverrGigHouseBeforeAfter],
    startingPrice: '$10',
    deliveryTime: '1 Day'
  },
  {
    id: 'gig-2',
    title: 'I Will Upscale, Enhance and Restore Photos and Images',
    gigUrl: 'https://www.fiverr.com/s/99K0ewj',
    category: 'Photo Upscaling',
    description: 'Using professional AI upscaling tools and high-fidelity manual correction to upscale, enhance, sharpen, and recover textures in blurry, compressed, or low-quality digital images.',
    features: [
      'De-noising, sharpening, and contrast tuning',
      'Fidelity restoration for faces and landscapes',
      'Upscaling up to 8x resolution without loss of detail',
      'DPI increase for crystal clear printing',
      'Professional color-grading and balance adjustment'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&q=80&w=600',
    startingPrice: '$5',
    deliveryTime: '1 Day'
  },
  {
    id: 'gig-3',
    title: 'I Will Restore Old Damaged Photos and Upscale Them to High Resolution',
    gigUrl: 'https://www.fiverr.com/s/99K0e7x',
    category: 'Photo Restoration',
    description: 'Breathe new life into precious family memories. I reconstruct cracked, faded, torn, water-damaged, or stained historical photographs into beautiful, modern, high-definition digital heirlooms.',
    features: [
      'Scratch, crack, and tear removal',
      'Reconstruction of missing parts and shapes',
      'Expert realistic colorization of black & white photos',
      'Fading correction and deep contrast balancing',
      'High-resolution export optimized for printing and sharing'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1461360370896-922624d12aa1?auto=format&fit=crop&q=80&w=600',
    startingPrice: '$15',
    deliveryTime: '2 Days'
  },
  {
    id: 'gig-4',
    title: 'I Will Upscale, Sharpen and Fix Blurry Pixelated Images to 300 DPI',
    gigUrl: 'https://www.fiverr.com/s/R7Ll80R',
    category: 'Image Enhancement',
    description: 'Professional high-fidelity repair for low-quality, heavily compressed, or pixelated web graphics. Get premium high-resolution 300 DPI assets suitable for large-scale marketing materials.',
    features: [
      'Convert 72 DPI images to print-ready 300 DPI assets',
      'Deep learning-guided artifact removal (JPEG artifacts)',
      'Intelligent edge sharpening and texture synthesis',
      'Color space conversion (RGB to CMYK optimization)',
      'Perfect for logos, product photos, and vector-style graphics'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=600',
    startingPrice: '$10',
    deliveryTime: '1 Day'
  }
];

export const initialPortfolio: PortfolioItem[] = [
  // 1. Thumbnail Design
  {
    id: 'port-thumb-real-2',
    title: 'Professional YouTube Thumbnail Design - House Renovation',
    description: 'Premium transformation commercial thumbnail designed to maximize Click-Through Rate. Displays a stark before-and-after house renovation comparison with vivid neon guidelines and modern badges.',
    category: 'Thumbnail Design',
    imageUrl: fiverrGigHouseBeforeAfter,
    tags: ['House Renovation', 'Commercial', 'Before & After', 'Fiverr Exclusive'],
    dateAdded: '2026-07-01',
    metrics: { ctr: '12.8%', views: '840K+' }
  },
  {
    id: 'port-thumb-1',
    title: 'Gaming Championship Thumbnail',
    description: 'High-contrast battle royale gaming thumbnail featuring 3D text overlays, energetic sparks, and professional lighting adjustments to maximize feed visibility.',
    category: 'Thumbnail Design',
    imageUrl: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=800',
    tags: ['Gaming', '3D Text', 'High CTR', 'Photoshop'],
    dateAdded: '2026-05-15',
    metrics: { ctr: '14.2%', views: '450K+', retention: '72%' }
  },
  {
    id: 'port-thumb-2',
    title: 'Tech Review - Future Smartphone',
    description: 'Clean, minimalist tech review layout. Employs crisp studio product lighting, shallow depth-of-field, and bright yellow accent typography to draw the eye.',
    category: 'Thumbnail Design',
    imageUrl: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80&w=800',
    tags: ['Technology', 'Minimalist', 'Review', 'Product Showcase'],
    dateAdded: '2026-06-01',
    metrics: { ctr: '11.8%', views: '280K+' }
  },

  // 2. Thumbnail Templates
  {
    id: 'port-temp-1',
    title: 'Ultimate Finance & Crypto Template Bundle',
    description: 'A fully editable Photoshop thumbnail template pack featuring adjustable stock market charts, glowing cryptocurrency tokens, and stylized emotion-triggering facial expressions.',
    category: 'Thumbnail Templates',
    imageUrl: 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?auto=format&fit=crop&q=80&w=800',
    tags: ['Finance', 'Crypto', 'PSD Template', 'Editable'],
    dateAdded: '2026-04-20'
  },
  {
    id: 'port-temp-2',
    title: 'Vlog & Lifestyle Bright Preset Pack',
    description: 'Soft pastels, clean border accents, and high-readability sans-serif font setups. Perfect for travel vloggers and storytellers seeking channel aesthetic consistency.',
    category: 'Thumbnail Templates',
    imageUrl: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&q=80&w=800',
    tags: ['Vlog', 'Lifestyle', 'Canva', 'Travel'],
    dateAdded: '2026-05-28'
  },

  // 3. Before & After Thumbnail Comparisons
  {
    id: 'port-thumb-real-1',
    title: 'Professional YouTube Thumbnail Design - Car Restoration',
    description: 'High-impact emotional reaction video thumbnail featuring a classic car restoration before-and-after comparison. Engineered with sharp typography, cinematic color lookup tables, and custom click-optimized CTR formatting.',
    category: 'Before & After Thumbnail Comparisons',
    imageUrl: fiverrGigCarBeforeAfter,
    tags: ['Car Restoration', 'Before & After', 'High CTR', 'Fiverr Exclusive'],
    dateAdded: '2026-07-02',
    metrics: { ctr: '+11.6% (from 1.2% to 12.8%)', views: '1.2M+' }
  },
  {
    id: 'port-comp-1',
    title: 'Viral Mystery Video Thumbnail Optimization',
    description: 'Redesigned a boring, low-contrast mystery documentary thumbnail. Added dramatic backlighting, optimized the facial expression brightness, and refined typography resulting in massive CTR growth.',
    category: 'Before & After Thumbnail Comparisons',
    imageUrl: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&q=80&w=800', // After
    beforeImageUrl: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&q=80&w=800', // Before (abstract representation)
    tags: ['Redesign', 'Optimization', 'Mystery', 'A/B Testing'],
    dateAdded: '2026-06-12',
    metrics: { ctr: '+8.4% (from 4.2% to 12.6%)', views: '1.2M (Original: 100K)' }
  },

  // 4. Video Editing
  {
    id: 'port-video-1',
    title: 'Professional Video Editor Workspace & Production Studio',
    description: 'Cinematic narrative editing, multi-cam synchronization, premium color grading, sound design, and motion graphics flow. Engineered to handle high-resolution raw footage and complex multi-layered timelines.',
    category: 'Video Editing',
    imageUrl: videoEditorBanner,
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Placeholder embedded video
    tags: ['Workspace', 'Premiere Pro', 'Video Editing', 'Color Grading'],
    dateAdded: '2026-06-30',
    metrics: { views: '14.5M+ (Channel Total)', retention: '86%' }
  },
  {
    id: 'port-video-2',
    title: 'High-Impact Brand Promotion Reel',
    description: 'A dynamic visual sequence designed to maximize viewer retention and prompt action. Includes keyframe-guided speed ramping, bespoke LUT coloring, and high-frequency sound-effects placement.',
    category: 'Video Editing',
    imageUrl: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&q=80&w=800',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    tags: ['Commercial', 'Shorts', 'Premiere Pro', 'Sound Design'],
    dateAdded: '2026-06-22'
  },

  // 5. YouTube Automation
  {
    id: 'port-auto-1',
    title: 'Luxury Lifestyle Channel - Auto Content System',
    description: 'Engineered a highly profitable YouTube automation workflow: managed scriptwriting briefs, automated voiceover integration, custom stock footage assembly, and SEO publishing schemas.',
    category: 'YouTube Automation',
    imageUrl: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=800',
    tags: ['Automation', 'CashCow', 'Workflow', 'Passive Income'],
    dateAdded: '2026-03-10',
    metrics: { views: '8.4M Total', organicTraffic: '+120K Subs' }
  },

  // 6. Adobe Stock Images
  {
    id: 'port-adobe-1',
    title: 'Isometric Virtual Reality Data Server',
    description: 'Sleek 3D vector illustration showcasing futuristic server rooms with glowing node connections and cybersecurity grids. Over 500+ commercial licenses sold on Adobe Stock.',
    category: 'Adobe Stock Images',
    imageUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800',
    tags: ['3D Vector', 'Cybersecurity', 'Server', 'Commercial'],
    dateAdded: '2026-02-18'
  },

  // 7. Shutterstock Portfolio
  {
    id: 'port-shutter-1',
    title: 'Abstract Fluid Holographic Background',
    description: 'High-definition colorful liquid dynamic abstract texture design. Ideal for futuristic corporate branding, website hero covers, and marketing backdrops.',
    category: 'Shutterstock Portfolio',
    imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800',
    tags: ['Abstract', 'Holographic', 'Gradient', 'Shutterstock'],
    dateAdded: '2026-01-05'
  },

  // 8. Dreamstime Portfolio
  {
    id: 'port-dreams-1',
    title: 'Cozy Workspace with Mechanical Keyboard',
    description: 'Warm, cozy evening lighting corporate workspace photography highlighting a glowing RGB custom mechanical keyboard, coffee mug, and coding terminal setup.',
    category: 'Dreamstime Portfolio',
    imageUrl: 'https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?auto=format&fit=crop&q=80&w=800',
    tags: ['Workspace', 'Keyboard', 'RGB', 'Dreamstime'],
    dateAdded: '2025-11-20'
  },

  // 9. 123RF Portfolio
  {
    id: 'port-rf-1',
    title: 'Team Collaboration in Modern Glass Office',
    description: 'Commercial candid photography showcasing diverse corporate professionals collaborating around a futuristic interactive digital dashboard. Perfect for corporate flyers.',
    category: '123RF Portfolio',
    imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800',
    tags: ['Business', 'Teamwork', 'Modern Office', '123RF'],
    dateAdded: '2025-12-14'
  },

  // 10. AI Images
  {
    id: 'port-ai-1',
    title: 'Futuristic Cyberpunk Library of Knowledge',
    description: 'Complex prompt engineering utilizing Stable Diffusion to render an expansive cyberpunk archival chamber illuminated by blue holographic terminal screens and infinite library shelves.',
    category: 'AI Images',
    imageUrl: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&q=80&w=800',
    tags: ['Cyberpunk', 'Holographic', 'Midjourney', 'Prompt Engineering'],
    dateAdded: '2026-05-02'
  },
  {
    id: 'port-ai-2',
    title: 'Hyperrealistic Personal Branding Portrait',
    description: 'High-fidelity studio headshot featuring ultra-realistic skin textures, natural lighting, and professional grading against a solid ocher mustard-yellow background.',
    category: 'AI Images',
    imageUrl: shozabPortrait,
    tags: ['Personal Branding', 'Portrait', 'Headshot', 'Color Grading'],
    dateAdded: '2026-06-28',
    metrics: { ctr: '15.4%', views: 'Branding Project' }
  },

  // 11. SEO Projects
  {
    id: 'port-seo-1',
    title: 'Tech Blog Organic Search Scaling',
    description: 'Designed an advanced, high-efficiency programmatic SEO and keyword mapping strategy that boosted a tech-review blog organic traffic by over 450% in three months.',
    category: 'SEO Projects',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    tags: ['SEO', 'Keyword Research', 'Organic Growth', 'Google Search Console'],
    dateAdded: '2026-04-11',
    metrics: { seoScore: '98/100', organicTraffic: '+450K monthly users', views: '1.8M impressions' }
  },

  // 12. Photo Restoration
  {
    id: 'port-restore-1',
    title: '1940s Vintage Family Portrait Restoration',
    description: 'Fully restored a severely damaged vintage black and white portrait from 1944. Removed dense yellow stains, repaired large edge cracks, and applied realistic historical skin colorization.',
    category: 'Photo Restoration',
    imageUrl: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=800', // After
    beforeImageUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=800', // Before
    tags: ['Vintage Restore', 'Colorization', 'Crack Removal', 'Heirloom'],
    dateAdded: '2026-06-18'
  },

  // 13. Photo Upscaling
  {
    id: 'port-upscale-1',
    title: 'Low-Resolution Web Graphic to 300 DPI Print Asset',
    description: 'Upscaled a heavily artifacted, 400px wide pixelated logo graphic to a massive 4000px wide print-ready vector-style rendering with zero edge-blur or compression noise.',
    category: 'Photo Upscaling',
    imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800', // After
    beforeImageUrl: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80&w=800', // Before
    tags: ['Super Resolution', 'Sharpening', 'Print-Ready', 'Artifact Repair'],
    dateAdded: '2026-06-25'
  }
];
