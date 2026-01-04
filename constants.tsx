
import React from 'react';
import { Product, Category } from './types';

export const INITIAL_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'AeroStream AI',
    tagline: 'High-altitude automation for your stack.',
    description: 'AeroStream is a professional-grade AI orchestration tool designed for high-performance teams. It streamlines complex workflows with precision and reliability, much like modern aviation systems.',
    category: 'AI',
    logo: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=200&h=200',
    website: 'https://example.com',
    founder: {
      name: 'Arthur P.',
      avatar: 'https://picsum.photos/seed/pilot/100/100',
      social: '@aero_founder'
    },
    stats: {
      views: 2450,
      upvotes: 890,
      daysLeft: 22
    },
    isPremium: true,
    createdAt: '2024-05-01'
  },
  {
    id: '2',
    name: 'Horizon CRM',
    tagline: 'Clear skies for your customer data.',
    description: 'A CRM designed for transparency and velocity. Manage your entire pipeline with a 30,000-foot view of your customer journey.',
    category: 'SaaS',
    logo: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=200&h=200',
    website: 'https://example.com',
    founder: {
      name: 'Sarah K.',
      avatar: 'https://picsum.photos/seed/sarah/100/100',
      social: '@horizon_sarah'
    },
    stats: {
      views: 1200,
      upvotes: 450,
      daysLeft: 15
    },
    isPremium: false,
    createdAt: '2024-05-10'
  },
  {
    id: '3',
    name: 'FlightDeck Dev',
    tagline: 'Precision tools for deployment speed.',
    description: 'The ultimate cockpit for modern developers. Monitor every metric and toggle every feature with institutional-grade controls.',
    category: 'DevTools',
    logo: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&q=80&w=200&h=200',
    website: 'https://example.com',
    founder: {
      name: 'Viktor H.',
      avatar: 'https://picsum.photos/seed/viktor/100/100',
      social: '@flightdeck_v'
    },
    stats: {
      views: 5600,
      upvotes: 2100,
      daysLeft: 5
    },
    isPremium: true,
    createdAt: '2024-04-20'
  }
];

export const CATEGORIES: Category[] = ['SaaS', 'AI', 'Mobile', 'DevTools', 'Marketplace', 'Design'];

export const PlaneIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21 16V14.5L13 9.5V3.5C13 2.67 12.33 2 11.5 2C10.67 2 10 2.67 10 3.5V9.5L2 14.5V16L10 13.5V19L8 20.5V22L11.5 21L15 22V20.5L13 19V13.5L21 16Z" fill="currentColor"/>
  </svg>
);

export const PoliceStarIcon = ({ className = "w-6 h-6", filled = false }) => (
  <svg className={className} viewBox="0 0 24 24" fill={filled ? "currentColor" : "none"} xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
