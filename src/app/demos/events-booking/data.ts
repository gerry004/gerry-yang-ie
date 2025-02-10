export interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  capacity: number;
  booked: number;
  description: string;
  organizer: string;
  category: 'Tech' | 'Business' | 'Creative' | 'Workshop' | 'Conference';
  price: number;
}

// Generate 20 events across next 3 months
export const eventsData: Event[] = [
  {
    id: 1,
    title: 'Tech Conference 2024',
    date: '2025-02-13',
    time: '09:00',
    location: 'Dublin Convention Centre',
    capacity: 500,
    booked: 342,
    description: 'Annual tech conference featuring industry leaders and innovative workshops.',
    organizer: 'TechIreland',
    category: 'Conference',
    price: 299
  },
  {
    id: 2,
    title: 'Digital Marketing Workshop',
    date: '2025-02-13',
    time: '14:00',
    location: 'The Marker Hotel',
    capacity: 50,
    booked: 28,
    description: 'Intensive workshop on modern digital marketing strategies.',
    organizer: 'Marketing Pros',
    category: 'Workshop',
    price: 149
  },
  // Add more events...
  {
    id: 20,
    title: 'Startup Pitch Night',
    date: '2025-02-13',
    time: '18:00',
    location: 'Dogpatch Labs',
    capacity: 200,
    booked: 156,
    description: 'Watch Dublin\'s most promising startups pitch their ideas.',
    organizer: 'Startup Dublin',
    category: 'Business',
    price: 25
  },
  {
    id: 21,
    title: 'AI in Healthcare Symposium',
    date: '2025-02-13',
    time: '10:00',
    location: 'Trinity College Dublin',
    capacity: 150,
    booked: 98,
    description: 'Exploring the latest applications of AI in healthcare and medical research.',
    organizer: 'Health Tech Ireland',
    category: 'Tech',
    price: 199
  },
  {
    id: 22,
    title: 'Creative Writing Workshop',
    date: '2025-02-13',
    time: '18:30',
    location: 'Writers Museum',
    capacity: 30,
    booked: 12,
    description: 'An intimate workshop for aspiring writers to develop their craft.',
    organizer: 'Dublin Writers',
    category: 'Creative',
    price: 45
  },
  {
    id: 23,
    title: 'Sustainable Business Forum',
    date: '2025-02-13',
    time: '09:00',
    location: 'The Alex Hotel',
    capacity: 120,
    booked: 89,
    description: 'Leading discussions on sustainable business practices and green innovation.',
    organizer: 'Green Business Ireland',
    category: 'Business',
    price: 175
  },
  {
    id: 24,
    title: 'UX Design Masterclass',
    date: '2025-02-13',
    time: '13:00',
    location: 'Design Hub',
    capacity: 40,
    booked: 35,
    description: 'Advanced UX design principles and practical applications.',
    organizer: 'Design Ireland',
    category: 'Workshop',
    price: 299
  },
  {
    id: 25,
    title: 'FinTech Innovation Summit',
    date: '2025-02-14',
    time: '09:30',
    location: 'IFSC Conference Centre',
    capacity: 300,
    booked: 245,
    description: 'The largest gathering of FinTech innovators in Ireland.',
    organizer: 'FinTech Ireland',
    category: 'Conference',
    price: 399
  }
]; 