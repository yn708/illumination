// IlluminationsPage.test.tsx
import MockIlluminationsPage from '@/__mocks__/IlluminationsPage';
import { fetchAllFamousQuoteAPI } from '@/services/FamousQuotesApi';
import type { FamousQuote } from '@/types';
import { render, screen } from '@testing-library/react';
import { mockMultipleFamousQuotes } from '../mockData/famousQuotesTestData';

jest.mock('@/services/FamousQuotesApi');
jest.mock('@/components/feature/famous_quotes/IlluminationCardList', () => {
  return function MockIlluminationCardList({ items }: { items: FamousQuote[] }) {
    return (
      <div data-testid="illumination-card-list">
        {items.map((item, index) => (
          <div key={index} data-testid={`illumination-card-${index}`}>
            {item.text}
          </div>
        ))}
      </div>
    );
  };
});

describe('IlluminationsPage', () => {
  // 取得したデータでイルミネーションカードをレンダリングできること
  it('renders illumination cards with fetched data', async () => {
    (fetchAllFamousQuoteAPI as jest.Mock).mockResolvedValue(mockMultipleFamousQuotes);
    const data = await fetchAllFamousQuoteAPI();
    render(<MockIlluminationsPage data={data} />);

    expect(screen.getByTestId('illumination-card-list')).toBeInTheDocument();
    expect(screen.getByTestId('illumination-card-0')).toHaveTextContent('これは、テストです。');
    expect(screen.getByTestId('illumination-card-1')).toHaveTextContent('これは、テスト2です。');
    expect(screen.getByTestId('illumination-card-2')).toHaveTextContent('これは、テスト3です。');
  });

  // 空のデータの場合
  it('handles empty data', async () => {
    (fetchAllFamousQuoteAPI as jest.Mock).mockResolvedValue([]);

    const data = await fetchAllFamousQuoteAPI();
    render(<MockIlluminationsPage data={data} />);

    expect(screen.getByTestId('illumination-card-list')).toBeInTheDocument();
    expect(screen.queryByTestId('illumination-card-0')).not.toBeInTheDocument();
  });
});
