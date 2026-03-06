export interface Property {
  id: number;
  title: string;
  location: string;
  price: string;
  beds: number;
  baths: number;
  area: string;
  image: string;
  tag: string;
  description: string;
  amenities: string[];
  agent: {
    name: string;
    phone: string;
    email: string;
  };
}

export const properties: Property[] = [
  { 
    id: 1, 
    title: 'Skyline Luxury Apartments', 
    location: 'Manhattan, NY', 
    price: '$1,250,000', 
    beds: 3, 
    baths: 2, 
    area: '2,100 sq ft', 
    image: '/images/property1.png', 
    tag: 'Featured',
    description: 'Experience unparalleled luxury in this stunning skyline apartment. Features include floor-to-ceiling windows, a modern kitchen with high-end appliances, and breathtaking city views.',
    amenities: ['24/7 Concierge', 'Fitness Center', 'Rooftop Lounge', 'Private Parking', 'Smart Home System'],
    agent: { name: 'Michael Scott', phone: '+1 (555) 001-2345', email: 'michael@elitehomes.com' }
  },
  { 
    id: 2, 
    title: 'Mediterranean Villa Estate', 
    location: 'Beverly Hills, CA', 
    price: '$3,500,000', 
    beds: 5, 
    baths: 4, 
    area: '4,500 sq ft', 
    image: '/images/property2.png', 
    tag: 'Luxury',
    description: 'This magnificent Mediterranean estate offers ultimate privacy and luxury. Boasting grand living spaces, a gourmet kitchen, and a resort-style backyard with infinity pool.',
    amenities: ['Swimming Pool', 'Wine Cellar', 'Movie Theater', 'Guest House', 'Expansive Garden'],
    agent: { name: 'Donna Paulsen', phone: '+1 (555) 002-3456', email: 'donna@elitehomes.com' }
  },
  { 
    id: 3, 
    title: 'Penthouse City Suite', 
    location: 'Chicago Loop, IL', 
    price: '$2,800,000', 
    beds: 4, 
    baths: 3, 
    area: '3,200 sq ft', 
    image: '/images/property3.png', 
    tag: 'Exclusive',
    description: 'Live above it all in this premier penthouse suite. Featuring an open-concept design, premium finishes, and a private terrace overlooking the downtown skyline.',
    amenities: ['Private Elevator', 'Heated Floors', 'Outdoor Terrace', 'Spa Bathroom', 'Chef\'s Kitchen'],
    agent: { name: 'Harvey Specter', phone: '+1 (555) 003-4567', email: 'harvey@elitehomes.com' }
  },
  { 
    id: 4, 
    title: 'Modern Townhouse', 
    location: 'Georgetown, DC', 
    price: '$890,000', 
    beds: 3, 
    baths: 2, 
    area: '1,800 sq ft', 
    image: '/images/property4.png', 
    tag: 'New',
    description: 'A perfect blend of classic charm and modern style. This recently renovated townhouse features hardwood floors, abundant natural light, and a cozy private garden.',
    amenities: ['Hardwood Floors', 'Walk-in Closets', 'Private Garden', 'Gas Fireplace', 'New HVAC System'],
    agent: { name: 'Mike Ross', phone: '+1 (555) 004-5678', email: 'mike@elitehomes.com' }
  },
  { 
    id: 5, 
    title: 'Beachfront Paradise', 
    location: 'Miami Beach, FL', 
    price: '$4,200,000', 
    beds: 6, 
    baths: 5, 
    area: '5,800 sq ft', 
    image: '/images/property5.png', 
    tag: 'Hot',
    description: 'Step directly onto the sand from this exquisite beachfront villa. Designed for tropical living with large open spaces, ocean breezes, and panoramic water views.',
    amenities: ['Direct Beach Access', 'Oceanfront Pool', 'Outdoor Kitchen', 'Jet Ski Dock', 'Palm Garden'],
    agent: { name: 'Rachel Zane', phone: '+1 (555) 005-6789', email: 'rachel@elitehomes.com' }
  },
  { 
    id: 6, 
    title: 'Commercial Urban Tower', 
    location: 'Midtown Atlanta, GA', 
    price: '$5,800,000', 
    beds: 0, 
    baths: 8, 
    area: '12k sq ft', 
    image: '/images/property6.png', 
    tag: 'Business',
    description: 'A prime commercial investment opportunity in the heart of Midtown. This high-rise tower features modern office spaces, retail potential, and superior accessibility.',
    amenities: ['Secure Lobby', 'Underground Parking', 'Fiber Internet', 'EV Charging Stations', '24/7 Security'],
    agent: { name: 'Louis Litt', phone: '+1 (555) 006-7890', email: 'louis@elitehomes.com' }
  },
];
