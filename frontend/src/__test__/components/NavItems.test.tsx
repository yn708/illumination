import { NavigationSheet } from '@/components/sheet/NavigationSheet';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';

describe('NavItems', () => {
  // NavigationSheetをOpenしたときにナビゲーションメニューが正しく表示されるかを確認するテスト
  it('renders all navigation categories and items', async () => {
    render(<NavigationSheet />);
    const button = screen.getByRole('button', { name: /toggle navigation menu/i });
    fireEvent.click(button);
    await waitFor(() => {
      // カテゴリーが正しく表示されているか確認
      expect(screen.getByText('Illumination')).toBeInTheDocument();

      // サブアイテムが正しく表示されているか確認
      expect(screen.getByText('今日の名言')).toBeInTheDocument();
      expect(screen.getByText('名言一覧')).toBeInTheDocument();
    });
  });

  // Linkが正しくレンダリングされるかを確認するテスト
  it('renders correct number of links', async () => {
    render(<NavigationSheet />);
    const button = screen.getByRole('button', { name: /toggle navigation menu/i });
    fireEvent.click(button);
    await waitFor(() => {
      const links = screen.getAllByRole('link');
      expect(links).toHaveLength(2); // NAV_ITEMS の subitems の総数
    });
  });
});
