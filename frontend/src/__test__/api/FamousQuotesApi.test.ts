import { fetchAllFamousQuoteAPI, fetchRandomFamousQuoteAPI } from '@/services/FamousQuotesApi';
import { USE_DOCKER_BASE_URL } from '@/utils/constants';
import { mockMultipleFamousQuotes, mockSingleFamousQuote } from '../mockData/famousQuotesTestData';

describe('API functions', () => {
  beforeEach(() => {
    global.fetch = jest.fn();
    jest.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  //  ランダムな名言を正常に取得できること
  it('fetchRandomFamousQuoteAPI fetches a random quote successfully', async () => {
    (global.fetch as jest.Mock).mockResolvedValue({
      ok: true,
      json: async () => mockSingleFamousQuote,
    });

    const result = await fetchRandomFamousQuoteAPI();
    expect(result).toEqual(mockSingleFamousQuote);
    expect(global.fetch).toHaveBeenCalledWith(`${USE_DOCKER_BASE_URL}/famous_quotes/random`, {
      cache: 'no-cache',
    });
  });

  //  エラーが発生した場合にエラーを処理すること
  it('fetchRandomFamousQuoteAPI handles errors', async () => {
    (global.fetch as jest.Mock).mockResolvedValue({
      ok: false,
    });

    const result = await fetchRandomFamousQuoteAPI();
    expect(result).toBeUndefined();
    expect(console.error).toHaveBeenCalled();
  });

  // すべての名言を正常に取得できること
  it('fetchAllFamousQuoteAPI fetches all quotes successfully', async () => {
    (global.fetch as jest.Mock).mockResolvedValue({
      ok: true,
      json: async () => mockMultipleFamousQuotes,
    });

    const result = await fetchAllFamousQuoteAPI();
    expect(result).toEqual(mockMultipleFamousQuotes);
    expect(global.fetch).toHaveBeenCalledWith(`${USE_DOCKER_BASE_URL}/famous_quotes`, {
      next: {
        revalidate: 604800,
      },
    });
  });

  // エラーが発生した場合にエラーを処理すること
  it('fetchAllFamousQuoteAPI handles errors', async () => {
    (global.fetch as jest.Mock).mockResolvedValue({
      ok: false,
    });

    const result = await fetchAllFamousQuoteAPI();
    expect(result).toBeUndefined();
    expect(console.error).toHaveBeenCalled();
  });
});
