import { render, screen } from '@testing-library/react';

import MockRandomFamousQuotePage from '@/__mocks__/RandomFamousQuotePage';
import { fetchRandomFamousQuoteAPI } from '@/services/FamousQuotesApi';
import { mockSingleFamousQuote } from '../mockData/famousQuotesTestData';

jest.mock('@/services/FamousQuotesApi');

describe('RandomFamousQuotePage', () => {
  it('should fetch and display the random famous quote', async () => {
    (fetchRandomFamousQuoteAPI as jest.Mock).mockResolvedValue(mockSingleFamousQuote);

    const quote = await fetchRandomFamousQuoteAPI();
    render(<MockRandomFamousQuotePage quote={quote} />);

    expect(screen.getByText(/これは、テストです。/)).toBeInTheDocument();
    expect(screen.getByText(/テスト太郎/)).toBeInTheDocument();
    expect(screen.getByText(/作家/)).toBeInTheDocument();
    expect(screen.getByText(/1900/)).toBeInTheDocument();
    expect(screen.getByText(/1980/)).toBeInTheDocument();
  });
});
