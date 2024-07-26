import RandomFamousQuote from '@/components/feature/famous_quotes/RandomFamousQuote';
import type { FamousQuote } from '@/types';

export default function MockRandomFamousQuotePage({ quote }: { quote: FamousQuote }) {
  return <RandomFamousQuote data={quote} />;
}
