import type { Author } from './index';

export interface FamousQuote {
  id: number;
  text: string;
  quotable: Author;
  quotable_type: 'Author';
  quotable_id: number;
  created_at: string;
  updated_at: string;
}
