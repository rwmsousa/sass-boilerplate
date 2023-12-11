interface Image {
  alt: string;
  src: string;
  width: number;
  height: number;
}

interface SocialMediaImages {
  stories: Image;
  feed: Image;
}

interface GoogleAdsDisplay {
  square: Image;
  rectangular: Image;
  leaderboard: Image;
  responsive: {
    image: Image;
    logo: Image;
  };
}

interface GoogleAdsApp {
  installation: {
    graphic: Image;
    responsive: Image;
  };
}

interface GoogleAdsEngagement {
  app: Image;
  video: Image;
}

interface GoogleAdsLocal {
  image: Image;
  logo: Image;
}

interface GoogleAdsDiscovery {
  image: Image;
  logo: Image;
}

interface GoogleAdsGmail {
  image: Image;
  logo: Image;
  header: Image;
  catalogImage: Image;
}

interface Category {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface Post {
  id: string;
  title: string;
  content: string;
  slug: string;
  images: {
    thumbnail: Image;
    small: Image;
    medium: Image;
    large: Image;
    instagram: SocialMediaImages;
    facebook: SocialMediaImages;
    tiktok: SocialMediaImages;
    twitter: SocialMediaImages;
    googleAds: {
      display: GoogleAdsDisplay;
      app: GoogleAdsApp;
      engagement: GoogleAdsEngagement;
      local: GoogleAdsLocal;
      discovery: GoogleAdsDiscovery;
      gmail: GoogleAdsGmail;
    };
  };
  categories: Category[];
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export type Posts = Post[];