import RandomFamousQuote from '@/components/feature/famous_quotes/RandomFamousQuote';
import type { FamousQuote } from '@/types';
import { render, screen } from '@testing-library/react';
import { mockSingleFamousQuote } from '../mockData/famousQuotesTestData';

describe('RandomFamousQuote', () => {
  // 正しく表示されること
  it('should render the famous quote text correctly', () => {
    const data: FamousQuote = mockSingleFamousQuote;

    render(<RandomFamousQuote data={data} />);

    expect(screen.getByText(/これは、テストです。/)).toBeInTheDocument();
    expect(screen.getByText(/テスト太郎/)).toBeInTheDocument();
    expect(screen.getByText(/作家/)).toBeInTheDocument();
    expect(screen.getByText(/1900/)).toBeInTheDocument();
    expect(screen.getByText(/1980/)).toBeInTheDocument();
  });
});
