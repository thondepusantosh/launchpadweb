
export type Category = 'SaaS' | 'AI' | 'Mobile' | 'DevTools' | 'Marketplace' | 'Design';

export interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  category: Category;
  logo: string;
  website: string;
  founder: {
    name: string;
    avatar: string;
    social: string;
  };
  stats: {
    views: number;
    upvotes: number;
    daysLeft: number;
  };
  isPremium: boolean;
  createdAt: string;
}

export interface Comment {
  id: string;
  userId: string;
  userName: string;
  userAvatar: string;
  text: string;
  createdAt: string;
}

export interface Deal {
  id: string;
  title: string;
  discount: string;
  description: string;
  isFeatured: boolean;
}
