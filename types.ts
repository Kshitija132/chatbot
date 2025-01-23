export interface Message {
  id: string;
  content: string;
  type: MessageType;
  timestamp: string;  // Representing the timestamp as an ISO string
}

// Enum for message types (to improve type safety)
export enum MessageType {
  User = 'user',
  Bot = 'bot',
}

export interface CDP {
  id: string; // Unique identifier for each CDP
  name: string;
  docsUrl?: string; // Optional, in case there is no documentation URL available
  description: string;
}

export const CDPs: CDP[] = [
  {
    id: 'segment',
    name: 'Segment',
    docsUrl: 'https://segment.com/docs/?ref=nav',
    description: 'Customer Data Platform for collecting, cleaning, and controlling customer data',
  },
  {
    id: 'mparticle',
    name: 'mParticle',
    docsUrl: 'https://docs.mparticle.com/',
    description: 'Enterprise customer data infrastructure solution',
  },
  {
    id: 'lytics',
    name: 'Lytics',
    docsUrl: 'https://docs.lytics.com/',
    description: 'Customer Data Platform with ML-powered insights',
  },
  {
    id: 'zeotap',
    name: 'Zeotap',
    docsUrl: 'https://docs.zeotap.com/home/en-us/',
    description: 'Unified customer data and identity platform',
  },
];
