import { NavigationSheet } from '@/components/sheet/NavigationSheet';
import { NAV_ITEMS } from '@/constants/navItems';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';

describe('NavigationSheet', () => {
  // NavigationSheetコンポーネントがクラッシュせずにレンダリングされるかを確認するテスト
  it('renders without crashing', () => {
    render(<NavigationSheet />);
    const button = screen.getByRole('button', { name: /toggle navigation menu/i });
    expect(button).toBeInTheDocument();
  });

  // ボタンをクリックするとナビゲーションメニューが開くかを確認するテスト
  it('opens the navigation menu when the button is clicked', async () => {
    render(<NavigationSheet />);
    const button = screen.getByRole('button', { name: /toggle navigation menu/i });
    fireEvent.click(button);

    await waitFor(() => {
      const navigation = screen.getByRole('navigation');
      expect(navigation).toBeInTheDocument();
    });
  });

  // メニューが開いているときにNavItemsが正しくレンダリングされるかを確認するテスト
  it('renders NavItems correctly when the menu is open', async () => {
    render(<NavigationSheet />);
    const button = screen.getByRole('button', { name: /toggle navigation menu/i });

    fireEvent.click(button);

    await waitFor(() => {
      const navigation = screen.getByRole('navigation');
      expect(navigation).toBeInTheDocument();

      NAV_ITEMS.forEach((item) => {
        expect(screen.getByText(item.name)).toBeInTheDocument();
        item.subitems.forEach((subitem) => {
          expect(screen.getByText(subitem.name)).toBeInTheDocument();
        });
      });
    });
  });
});
