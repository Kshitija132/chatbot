import { CDPs } from '../types';

const IRRELEVANT_RESPONSES = [
  "I can only help with questions related to Customer Data Platforms (CDPs). For other topics, please try a general search engine.",
  "I specialize in CDP-related questions. This question seems outside my scope.",
  "I'm focused on helping with CDP platforms like Segment, mParticle, Lytics, and Zeotap. Let me know if you have any questions about those!"
];

// Helper function to match terms
const containsKeyword = (str: string, keywords: string[]): boolean => {
  const lowerStr = str.toLowerCase();
  return keywords.some(keyword => lowerStr.includes(keyword));
};

// Helper function to generate documentation response
const generateDocumentationResponse = (cdpIndex: number, task: string): string => {
  return `To ${task} in ${CDPs[cdpIndex].name}:

1. Visit the ${CDPs[cdpIndex].name} dashboard
2. Follow the documentation for the specific task: ${CDPs[cdpIndex].docsUrl}

For further assistance, you can refer to the official documentation.`;
};

export function generateResponse(question: string): string {
  // Convert question to lowercase for easier matching
  const q = question.toLowerCase();

  // Check if question is related to any CDPs
  const isCDPRelated = CDPs.some(cdp => 
    containsKeyword(q, [
      cdp.name.toLowerCase(), 
      'cdp', 'customer data', 'segment', 'audience', 'integration'
    ])
  );

  // If the question is not CDP related, return irrelevant response
  if (!isCDPRelated) {
    return IRRELEVANT_RESPONSES[Math.floor(Math.random() * IRRELEVANT_RESPONSES.length)];
  }

  // Check specific CDP-related questions
  if (q.includes('segment')) {
    if (containsKeyword(q, ['source', 'set up'])) {
      return generateDocumentationResponse(0, 'set up a new source');
    }
  }

  if (q.includes('mparticle')) {
    if (containsKeyword(q, ['profile', 'user'])) {
      return generateDocumentationResponse(1, 'create a user profile');
    }
  }

  if (q.includes('lytics')) {
    if (containsKeyword(q, ['audience', 'segment'])) {
      return generateDocumentationResponse(2, 'build an audience segment');
    }
  }

  if (q.includes('zeotap')) {
    if (containsKeyword(q, ['integrate'])) {
      return generateDocumentationResponse(3, 'integrate your data');
    }
  }

  // Generic CDP response for unclear questions
  return `It looks like you're asking about CDPs. To better assist you, could you please:

1. Specify which CDP you're interested in (Segment, mParticle, Lytics, or Zeotap)
2. Clarify the task or feature you need help with

I'll then provide detailed steps from the official documentation.`;
}
