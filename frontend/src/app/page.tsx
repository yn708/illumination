import RandomFamousQuote from '@/components/feature/famous_quotes/RandomFamousQuote';
import { fetchRandomFamousQuoteAPI } from '@/services/FamousQuotesApi';

export default async function RandomFamousQuotePage() {
  const data = await fetchRandomFamousQuoteAPI();

  return (
    <>
      <RandomFamousQuote data={data} />
    </>
  );
}
