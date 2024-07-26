import { BASE_URL } from '@/utils/constants';

// ランダムな名言を取得する関数（CSR）
export const fetchRandomFamousQuoteAPI = async () => {
  try {
    const response = await fetch(`${BASE_URL}/famous_quotes/random`, {
      cache: 'no-cache',
    });
    if (!response.ok) {
      throw new Error('名言を取得できませんでした。');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

// すべての名言を取得する関数（ISR）
export const fetchAllFamousQuoteAPI = async () => {
  try {
    const response = await fetch(`${BASE_URL}/famous_quotes`, {
      next: {
        revalidate: 604800, // 1週間
      },
    });
    if (!response.ok) {
      throw new Error('名言を取得できませんでした。');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
