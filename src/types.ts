/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface ProfessionalProfile {
  id: string;
  platform: string;
  name: string;
  url: string;
  description: string;
  iconName: string; // Used to select icons from lucide-react dynamically
  accentColor: string; // Tailwind class like "from-purple-600 to-indigo-600"
  badgeText?: string;
}

export interface FiverrService {
  id: string;
  title: string;
  gigUrl: string;
  category: string;
  description: string;
  features: string[];
  imageUrl: string;
  galleryImages?: string[];
  startingPrice: string;
  deliveryTime: string;
}

export type PortfolioCategory =
  | 'Thumbnail Design'
  | 'Thumbnail Templates'
  | 'Before & After Thumbnail Comparisons'
  | 'Video Editing'
  | 'YouTube Automation'
  | 'Adobe Stock Images'
  | 'Shutterstock Portfolio'
  | 'Dreamstime Portfolio'
  | '123RF Portfolio'
  | 'AI Images'
  | 'SEO Projects'
  | 'Photo Restoration'
  | 'Photo Upscaling';

export interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  category: PortfolioCategory;
  imageUrl: string; // Main image or After image
  beforeImageUrl?: string; // Optional, for comparisons
  videoUrl?: string; // Optional, for Video Editing / YouTube Automation
  metrics?: {
    ctr?: string;
    views?: string;
    retention?: string;
    seoScore?: string;
    organicTraffic?: string;
  }; // Optional, for SEO and YouTube projects
  tags: string[];
  dateAdded: string;
}
