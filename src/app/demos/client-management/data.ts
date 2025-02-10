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

// Generate 75 leads with realistic data
export const leadsData: Lead[] = Array.from({ length: 75 }, (_, i) => ({
  id: i + 1,
  name: `Contact ${i + 1}`,
  company: `Company ${i + 1}`,
  email: `contact${i + 1}@company${i + 1}.com`,
  phone: `+353 ${Math.floor(Math.random() * 900000000 + 100000000)}`,
  status: ['New', 'Hot', 'Cold', 'Contacted'][Math.floor(Math.random() * 4)] as Lead['status'],
  source: ['Website', 'Referral', 'LinkedIn', 'Conference', 'Cold Call'][Math.floor(Math.random() * 5)],
  tags: Array.from(
    { length: Math.floor(Math.random() * 3) + 1 },
    () => ['Tech', 'Finance', 'Healthcare', 'Retail', 'Manufacturing'][Math.floor(Math.random() * 5)]
  ),
  lastContact: new Date(Date.now() - Math.random() * 7776000000).toISOString().split('T')[0], // Random date within last 90 days
}));

// Generate 20 deals with realistic data
export const dealsData: Deal[] = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  company: `Company ${i + 1}`,
  amount: Math.floor(Math.random() * 90000 + 10000), // Random amount between 10k and 100k
  stage: ['Discovery', 'Proposal', 'Negotiation', 'Closed Won', 'Closed Lost'][Math.floor(Math.random() * 5)] as Deal['stage'],
  owner: ['John Smith', 'Sarah Johnson', 'Mike Brown'][Math.floor(Math.random() * 3)],
  lastActivity: new Date(Date.now() - Math.random() * 2592000000).toISOString().split('T')[0], // Random date within last 30 days
})); 