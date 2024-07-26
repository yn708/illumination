import type { FamousQuote } from '@/types';

export const mockSingleFamousQuote: FamousQuote = {
  id: 1,
  text: 'これは、テストです。',
  quotable: {
    id: 1,
    name: 'テスト太郎',
    profession: '作家',
    birth_year: '1900',
    death_year: '1980',
    created_at: '2020-01-01T00:00:00Z',
    updated_at: '2020-01-01T00:00:00Z',
  },
  quotable_type: 'Author',
  quotable_id: 1,
  created_at: '2020-01-01T00:00:00Z',
  updated_at: '2020-01-01T00:00:00Z',
};

export const mockMultipleFamousQuotes: FamousQuote[] = [
  mockSingleFamousQuote,
  {
    id: 2,
    text: 'これは、テスト2です。',
    quotable: {
      id: 2,
      name: 'テスト次郎',
      profession: '農家',
      birth_year: '1910',
      death_year: '1990',
      created_at: '2020-01-01T00:00:00Z',
      updated_at: '2020-01-01T00:00:00Z',
    },
    quotable_type: 'Author',
    quotable_id: 1,
    created_at: '2020-01-01T00:00:00Z',
    updated_at: '2020-01-01T00:00:00Z',
  },
  {
    id: 3,
    text: 'これは、テスト3です。',
    quotable: {
      id: 3,
      name: 'テスト三郎',
      profession: '医者',
      birth_year: '1920',
      death_year: '2000',
      created_at: '2020-01-01T00:00:00Z',
      updated_at: '2020-01-01T00:00:00Z',
    },
    quotable_type: 'Author',
    quotable_id: 2,
    created_at: '2020-01-01T00:00:00Z',
    updated_at: '2020-01-01T00:00:00Z',
  },
];
