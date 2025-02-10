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
    date: '2024-04-15',
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
    date: '2024-04-20',
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
    date: '2024-06-30',
    time: '18:00',
    location: 'Dogpatch Labs',
    capacity: 200,
    booked: 156,
    description: 'Watch Dublin\'s most promising startups pitch their ideas.',
    organizer: 'Startup Dublin',
    category: 'Business',
    price: 25
  }
]; 