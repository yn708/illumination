import IlluminationCardList from '@/components/feature/famous_quotes/IlluminationCardList';
import type { FamousQuote } from '@/types';

export default function MockIlluminationsPage({ data }: { data: FamousQuote[] }) {
  return (
    <div className="container mx-auto py-12">
      <IlluminationCardList items={data} />
    </div>
  );
}
