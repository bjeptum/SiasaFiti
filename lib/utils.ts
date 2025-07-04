import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: string | Date): string {
  return new Intl.DateTimeFormat('en-KE', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(date));
}

export function formatTime(seconds: number): string {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
}

export function calculatePercentage(score: number, total: number): number {
  return Math.round((score / total) * 100);
}

export function getUserLevel(points: number): { level: number; name: string; progress: number } {
  const levels = [
    { level: 1, name: 'Civic Beginner', minPoints: 0, maxPoints: 199 },
    { level: 2, name: 'Informed Citizen', minPoints: 200, maxPoints: 499 },
    { level: 3, name: 'Civic Scholar', minPoints: 500, maxPoints: 999 },
    { level: 4, name: 'Democracy Champion', minPoints: 1000, maxPoints: 1999 },
    { level: 5, name: 'Civic Master', minPoints: 2000, maxPoints: Infinity }
  ];

  const currentLevel = levels.find(level => points >= level.minPoints && points <= level.maxPoints) || levels[0];
  const progress = currentLevel.maxPoints === Infinity 
    ? 100 
    : Math.round(((points - currentLevel.minPoints) / (currentLevel.maxPoints - currentLevel.minPoints)) * 100);

  return {
    level: currentLevel.level,
    name: currentLevel.name,
    progress
  };
}

export function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export function debounce<T extends (...args: unknown[]) => unknown>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}