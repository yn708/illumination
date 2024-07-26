// 必要なライブラリをインポート
import Header from '@/components/layout/Header';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

// Headerコンポーネントのテストスイート
describe('Header', () => {
  // Headerコンポーネントがクラッシュせずにレンダリングされるかを確認するテスト
  it('renders without crashing', () => {
    render(<Header />);
    expect(screen.getByRole('banner')).toBeInTheDocument();
  });

  // HeaderコンポーネントがNavigationSheetコンポーネントを含んでいるかを確認するテスト
  it('contains NavigationSheet component', async () => {
    render(<Header />);
    const toggleButton = screen.getByRole('button', { name: /toggle navigation menu/i });
    userEvent.click(toggleButton);
    await waitFor(() => {
      const navSheet = document.body.querySelector('[data-testid="navigation-sheet"]');
      expect(navSheet).toBeInTheDocument();
    });
  });

  // Headerコンポーネントが"illumination"というテキストを含んでいるかを確認するテスト
  it('contains "illumination" text', () => {
    render(<Header />);
    const text = screen.getByText(/illumination/i);
    expect(text).toBeInTheDocument();
  });
});
