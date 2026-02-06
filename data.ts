
import { SiteContent, ThemeSettings } from './types';

export const initialContent: SiteContent = {
  home: {
    hero: {
      title: 'Discover Your Next Adventure',
      subtitle: 'We curate unforgettable travel experiences tailored to your dreams. Explore the world with us.',
      cta1: 'Explore Destinations',
      cta2: 'Our Services',
    },
    services: {
      title: 'What We Offer',
      subtitle: 'From personalized itineraries to luxury accommodations, we handle every detail.',
      items: [
        { icon: '🗺️', title: 'Personalized Itineraries', description: 'Custom-built travel plans that match your interests and budget.' },
        { icon: '🏨', title: 'Luxury Stays', description: 'Handpicked hotels and resorts for ultimate comfort and style.' },
        { icon: '✈️', title: 'Seamless Travel', description: 'We take care of all bookings, transfers, and logistics so you can relax.' },
      ],
    },
    testimonials: {
      title: 'What Our Clients Say',
      items: [
        { quote: 'The trip of a lifetime! Every detail was perfectly planned. We couldn\'t have asked for a better experience.', author: 'Alex Johnson', company: 'Tech Innovators' },
        { quote: 'A truly professional and personal service. They understood exactly what we wanted and delivered beyond our expectations.', author: 'Samantha Lee', company: 'Creative Solutions' },
      ],
    },
    blog: {
      title: 'From Our Blog',
    },
  },
  about: {
    intro: {
      title: 'About Us',
      content: 'Founded in 2010, our mission has always been to make extraordinary travel accessible. We believe that travel is more than just seeing new places; it\'s about creating lasting memories, fostering connections, and enriching your life. Our team of passionate travel experts works tirelessly to design unique journeys that go beyond the ordinary.',
    },
    mission: {
      title: 'Our Mission & Vision',
      content: 'Our mission is to provide exceptional, personalized travel services that inspire a passion for exploration. We envision a world where travel is a seamless and enriching experience for everyone, breaking down barriers and opening up new perspectives.',
    },
    team: {
      title: 'Meet Our Team',
      members: [
        { name: 'Jane Doe', role: 'Founder & CEO', imageUrl: 'https://picsum.photos/400/400?random=1' },
        { name: 'John Smith', role: 'Head of Operations', imageUrl: 'https://picsum.photos/400/400?random=2' },
        { name: 'Emily White', role: 'Lead Travel Consultant', imageUrl: 'https://picsum.photos/400/400?random=3' },
      ],
    },
  },
  services: {
    title: 'Our Services',
    subtitle: 'Comprehensive solutions for the modern traveler.',
    services: [
        { icon: '🗺️', title: 'Personalized Itineraries', description: 'Custom-built travel plans that match your interests and budget.' },
        { icon: '🏨', title: 'Luxury Stays', description: 'Handpicked hotels and resorts for ultimate comfort and style.' },
        { icon: '✈️', title: 'Seamless Travel', description: 'We take care of all bookings, transfers, and logistics so you can relax.' },
        { icon: '🥂', title: 'Exclusive Experiences', description: 'Gain access to private tours, exclusive events, and unique cultural immersions.' },
        { icon: '🌍', title: 'Group & Corporate Travel', description: 'Expertly organized travel for groups of any size, from family reunions to corporate retreats.' },
        { icon: '⛑️', title: '24/7 Support', description: 'Our team is available around the clock to assist you during your travels.' },
    ],
  },
  destinations: {
    title: 'Explore Our Destinations',
    subtitle: 'From tropical paradises to ancient cities, your next adventure awaits.',
    destinations: [
      { id: '1', name: 'Kyoto, Japan', location: 'Asia', imageUrl: 'https://picsum.photos/600/400?random=11', category: 'Cultural' },
      { id: '2', name: 'Santorini, Greece', location: 'Europe', imageUrl: 'https://picsum.photos/600/400?random=12', category: 'Beach' },
      { id: '3', name: 'Machu Picchu, Peru', location: 'South America', imageUrl: 'https://picsum.photos/600/400?random=13', category: 'Adventure' },
      { id: '4', name: 'Bora Bora', location: 'Oceania', imageUrl: 'https://picsum.photos/600/400?random=14', category: 'Beach' },
      { id: '5', name: 'Rome, Italy', location: 'Europe', imageUrl: 'https://picsum.photos/600/400?random=15', category: 'Cultural' },
      { id: '6', name: 'Serengeti, Tanzania', location: 'Africa', imageUrl: 'https://picsum.photos/600/400?random=16', category: 'Adventure' },
    ],
  },
  blog: {
    title: 'Travel Insights',
    subtitle: 'Tips, stories, and inspiration from our travel experts.',
    posts: [
      { id: '1', title: '10 Must-See Places in Kyoto', author: 'Jane Doe', date: '2023-10-26', category: 'Travel Tips', excerpt: 'Discover the ancient temples, beautiful gardens, and hidden gems of Japan\'s cultural capital.', content: 'Full blog post content goes here...', imageUrl: 'https://picsum.photos/800/600?random=21' },
      { id: '2', title: 'A Culinary Journey Through Italy', author: 'John Smith', date: '2023-10-22', category: 'Food & Drink', excerpt: 'From fresh pasta in Rome to pizza in Naples, explore the delicious flavors of Italy.', content: 'Full blog post content goes here...', imageUrl: 'https://picsum.photos/800/600?random=22' },
      { id: '3', title: 'Packing Smart: The Ultimate Guide', author: 'Emily White', date: '2023-10-18', category: 'Travel Tips', excerpt: 'Learn how to pack efficiently for any trip, saving space and stress.', content: 'Full blog post content goes here...', imageUrl: 'https://picsum.photos/800/600?random=23' },
    ],
  },
  contact: {
      title: 'Get In Touch',
      subtitle: 'We\'d love to hear from you. Reach out to start planning your next adventure.',
      address: '123 Adventure Lane, Travel City, 12345',
      phone: '(123) 456-7890',
      email: 'contact@protravel.com'
  }
};

export const initialThemeSettings: ThemeSettings = {
    primaryColor: '#3b82f6', // blue-500
    secondaryColor: '#10b981', // emerald-500
    fontSans: 'Inter',
    fontSerif: 'Lora',
};
