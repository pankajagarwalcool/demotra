
export interface Post {
  id: string;
  title: string;
  author: string;
  date: string;
  category: string;
  content: string;
  excerpt: string;
  imageUrl: string;
}

export interface Service {
  icon: string;
  title: string;
  description: string;
}

export interface TeamMember {
  name: string;
  role: string;
  imageUrl: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  company: string;
}

export interface Destination {
  id: string;
  name: string;
  location: string;
  imageUrl: string;
  category: string;
}

export interface HomePageContent {
  hero: {
    title: string;
    subtitle: string;
    cta1: string;
    cta2: string;
  };
  services: {
    title: string;
    subtitle: string;
    items: Service[];
  };
  testimonials: {
    title: string;
    items: Testimonial[];
  };
  blog: {
    title: string;
  };
}

export interface AboutPageContent {
  intro: {
    title: string;
    content: string;
  };
  mission: {
    title: string;
    content: string;
  };
  team: {
    title: string;
    members: TeamMember[];
  };
}

export interface ServicesPageContent {
  title: string;
  subtitle: string;
  services: Service[];
}

export interface DestinationsPageContent {
  title: string;
  subtitle: string;
  destinations: Destination[];
}

export interface BlogPageContent {
  title: string;
  subtitle: string;
  posts: Post[];
}

export interface ContactPageContent {
    title: string;
    subtitle: string;
    address: string;
    phone: string;
    email: string;
}

export interface SiteContent {
  home: HomePageContent;
  about: AboutPageContent;
  services: ServicesPageContent;
  destinations: DestinationsPageContent;
  blog: BlogPageContent;
  contact: ContactPageContent;
}

export interface ThemeSettings {
    primaryColor: string;
    secondaryColor: string;
    fontSans: string;
    fontSerif: string;
}

export type PageName = keyof SiteContent;
