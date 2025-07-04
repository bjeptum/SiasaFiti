export const KENYAN_COUNTIES = [
  'Baringo', 'Bomet', 'Bungoma', 'Busia', 'Elgeyo-Marakwet', 'Embu',
  'Garissa', 'Homa Bay', 'Isiolo', 'Kajiado', 'Kakamega', 'Kericho',
  'Kiambu', 'Kilifi', 'Kirinyaga', 'Kisii', 'Kisumu', 'Kitui',
  'Kwale', 'Laikipia', 'Lamu', 'Machakos', 'Makueni', 'Mandera',
  'Marsabit', 'Meru', 'Migori', 'Mombasa', 'Murang\'a', 'Nairobi',
  'Nakuru', 'Nandi', 'Narok', 'Nyamira', 'Nyandarua', 'Nyeri',
  'Samburu', 'Siaya', 'Taita-Taveta', 'Tana River', 'Tharaka-Nithi',
  'Trans Nzoia', 'Turkana', 'Uasin Gishu', 'Vihiga', 'Wajir', 'West Pokot'
];

export const QUIZ_CATEGORIES = {
  constitution: {
    name: 'Constitution',
    description: 'Learn about Kenya\'s Constitution and its provisions',
    color: 'green'
  },
  governance: {
    name: 'Governance',
    description: 'Understand how Kenya is governed at different levels',
    color: 'blue'
  },
  rights: {
    name: 'Rights & Freedoms',
    description: 'Know your fundamental rights and freedoms',
    color: 'purple'
  },
  devolution: {
    name: 'Devolution',
    description: 'Learn about county governments and devolved functions',
    color: 'orange'
  },
  elections: {
    name: 'Elections',
    description: 'Understand Kenya\'s electoral system and processes',
    color: 'red'
  }
};

export const ACHIEVEMENT_CATEGORIES = {
  quiz_master: 'Quiz Master',
  knowledge_seeker: 'Knowledge Seeker',
  civic_champion: 'Civic Champion',
  budget_expert: 'Budget Expert',
  news_reader: 'News Reader'
};

export const BUDGET_CATEGORIES = [
  { name: 'Health Services', percentage: 25, description: 'Hospitals, clinics, and health programs' },
  { name: 'Education', percentage: 20, description: 'Schools, libraries, and educational programs' },
  { name: 'Infrastructure', percentage: 20, description: 'Roads, bridges, and public works' },
  { name: 'Agriculture', percentage: 15, description: 'Farming support and food security' },
  { name: 'Water & Sanitation', percentage: 10, description: 'Clean water and waste management' },
  { name: 'Social Services', percentage: 5, description: 'Youth, women, and disability programs' },
  { name: 'Administration', percentage: 5, description: 'Government operations and staff' }
];

export const USER_LEVELS = [
  { level: 1, name: 'Civic Beginner', minPoints: 0, maxPoints: 199 },
  { level: 2, name: 'Informed Citizen', minPoints: 200, maxPoints: 499 },
  { level: 3, name: 'Civic Scholar', minPoints: 500, maxPoints: 999 },
  { level: 4, name: 'Democracy Champion', minPoints: 1000, maxPoints: 1999 },
  { level: 5, name: 'Civic Master', minPoints: 2000, maxPoints: Infinity }
];