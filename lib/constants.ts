export const SERVICES = {
  TOWELS: {
    id: 'towels',
    name: 'Towel Service',
    description: 'Fresh, clean towels delivered to your salon',
    tiers: {
      BASIC: {
        name: 'Basic',
        price: 99,
        features: ['48-hour delivery', 'Standard cotton towels', 'Weekly delivery']
      },
      STANDARD: {
        name: 'Standard',
        price: 149,
        features: ['24-hour delivery', 'Premium cotton towels', 'Twice-weekly delivery']
      },
      PREMIUM: {
        name: 'Premium',
        price: 199,
        features: ['Same-day delivery', 'Luxury bamboo towels', 'Daily delivery available']
      }
    }
  },
  APRONS: {
    id: 'aprons',
    name: 'Apron Service',
    description: 'Professional apron cleaning and maintenance',
    tiers: {
      BASIC: {
        name: 'Basic',
        price: 79,
        features: ['Weekly cleaning', 'Standard fabric care', 'Basic repairs']
      },
      STANDARD: {
        name: 'Standard',
        price: 129,
        features: ['Twice-weekly cleaning', 'Premium fabric care', 'Advanced repairs']
      },
      PREMIUM: {
        name: 'Premium',
        price: 179,
        features: ['Daily cleaning available', 'Luxury fabric care', 'Replacement service']
      }
    }
  },
  TOOLS: {
    id: 'tools',
    name: 'Tool Sanitization',
    description: 'Professional cleaning and sanitization of salon tools',
    tiers: {
      BASIC: {
        name: 'Basic',
        price: 89,
        features: ['Weekly sanitization', 'Standard cleaning', 'Basic maintenance']
      },
      STANDARD: {
        name: 'Standard',
        price: 139,
        features: ['Twice-weekly sanitization', 'Deep cleaning', 'Full maintenance']
      },
      PREMIUM: {
        name: 'Premium',
        price: 189,
        features: ['Daily sanitization', 'Ultra-sonic cleaning', 'Priority maintenance']
      }
    }
  }
} as const

export const MULTI_SERVICE_DISCOUNT = 0.1 // 10% discount