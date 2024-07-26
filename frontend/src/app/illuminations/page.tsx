import IlluminationCardList from '@/components/feature/famous_quotes/IlluminationCardList';
import { fetchAllFamousQuoteAPI } from '@/services/FamousQuotesApi';

export default async function IlluminationsPage() {
  const data = await fetchAllFamousQuoteAPI();

  return (
    <div className="container mx-auto py-12">
      <IlluminationCardList items={data} />
    </div>
  );
}
