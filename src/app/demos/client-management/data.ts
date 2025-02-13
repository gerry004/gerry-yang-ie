export interface Lead {
  id: number;
  name: string;
  company: string;
  email: string;
  phone: string;
  status: 'New' | 'Hot' | 'Cold' | 'Contacted';
  source: string;
  tags: string[];
  lastContact: string;
}

export interface Deal {
  id: number;
  company: string;
  amount: number;
  stage: 'Discovery' | 'Proposal' | 'Negotiation' | 'Closed Won' | 'Closed Lost';
  owner: string;
  lastActivity: string;
}

// Add a seed function for deterministic random numbers
function seededRandom(seed: number) {
  return function() {
    seed = (seed * 9301 + 49297) % 233280;
    return seed / 233280;
  };
}

// Use a fixed seed for consistent data generation
const random = seededRandom(123456);

// Update the data generation to use seeded random
export const leadsData: Lead[] = Array.from({ length: 75 }, (_, i) => ({
  id: i + 1,
  name: `Contact ${i + 1}`,
  company: `Company ${i + 1}`,
  email: `contact${i + 1}@company${i + 1}.com`,
  phone: `+353 ${Math.floor(random() * 900000000 + 100000000)}`,
  status: ['New', 'Hot', 'Cold', 'Contacted'][Math.floor(random() * 4)] as Lead['status'],
  source: ['Website', 'Referral', 'LinkedIn', 'Conference', 'Cold Call'][Math.floor(random() * 5)],
  tags: Array.from(
    { length: Math.floor(random() * 3) + 1 },
    () => {
      const availableTags = ['Tech', 'Finance', 'Healthcare', 'Retail', 'Manufacturing'];
      const randomIndex = Math.floor(random() * availableTags.length);
      // Add unique identifier to prevent duplicate keys
      return `${availableTags[randomIndex]}-${Math.random().toString(36).substr(2, 9)}`;
    }
  ),
  lastContact: new Date(Date.now() - random() * 7776000000).toISOString().split('T')[0],
}));

export const dealsData: Deal[] = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  company: `Company ${i + 1}`,
  amount: Math.floor(random() * 90000 + 10000),
  stage: ['Discovery', 'Proposal', 'Negotiation', 'Closed Won', 'Closed Lost'][Math.floor(random() * 5)] as Deal['stage'],
  owner: ['John Smith', 'Sarah Johnson', 'Mike Brown'][Math.floor(random() * 3)],
  lastActivity: new Date(Date.now() - random() * 2592000000).toISOString().split('T')[0],
})); 