export interface User {
  id: string;
  email: string;
  name: string;
  age?: number;
  county?: string;
  school?: string;
  created_at: string;
  updated_at: string;
}

export interface Quiz {
  id: string;
  title: string;
  description: string;
  category: 'constitution' | 'governance' | 'rights' | 'devolution' | 'elections';
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  questions: Question[];
  time_limit?: number;
  created_at: string;
}

export interface Question {
  id: string;
  quiz_id: string;
  question: string;
  options: string[];
  correct_answer: number;
  explanation?: string;
  points: number;
}

export interface QuizAttempt {
  id: string;
  user_id: string;
  quiz_id: string;
  score: number;
  total_questions: number;
  time_taken: number;
  answers: UserAnswer[];
  completed_at: string;
}

export interface UserAnswer {
  question_id: string;
  selected_answer: number;
  is_correct: boolean;
  points_earned: number;
}

export interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: string;
  category: string;
  points_required?: number;
  quizzes_required?: number;
  created_at: string;
}

export interface UserAchievement {
  id: string;
  user_id: string;
  achievement_id: string;
  earned_at: string;
}

export interface CountyNews {
  id: string;
  county: string;
  title: string;
  summary: string;
  content: string;
  source: string;
  published_at: string;
  category: 'budget' | 'development' | 'governance' | 'services' | 'other';
}

export interface BudgetAllocation {
  id: string;
  user_id: string;
  county: string;
  total_budget: number;
  allocations: {
    category: string;
    amount: number;
    percentage: number;
  }[];
  score: number;
  feedback: string;
  created_at: string;
}