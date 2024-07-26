import Footer from '@/components/layout/Footer';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

describe('Footer', () => {
  // フッターコンポーネントがクラッシュせずにレンダリングされるか
  it('renders without crashing', () => {
    render(<Footer />);
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
  });

  // copyrightテキストが含まれているか
  it('contains the copyright text', () => {
    render(<Footer />);
    const copyright = screen.getByText(/© 2024 illumination. All rights reserved./i);
    expect(copyright).toBeInTheDocument();
  });

  // リンクが表示されているか
  // it('contains the "About" link', () => {
  //   render(<Footer />);
  //   const aboutLink = screen.getByRole('link', { name: /このサイトについて/i });
  //   expect(aboutLink).toBeInTheDocument();
  //   expect(aboutLink).toHaveAttribute('href', '/about');
  // });

  // it('contains the "利用規約" link', () => {
  // render(<Footer />);
  // const termsLink = screen.getByRole('link', { name: /利用規約/i });
  // expect(termsLink).toBeInTheDocument();
  // expect(termsLink).toHaveAttribute('href', '#');
  // });

  // it('contains the "プライバシーポリシー" link', () => {
  // render(<Footer />);
  // const privacyLink = screen.getByRole('link', { name: /プライバシーポリシー/i });
  // expect(privacyLink).toBeInTheDocument();
  // expect(privacyLink).toHaveAttribute('href', '#');
  // });

  // it('contains the "contact" link', () => {
  // render(<Footer />);
  // const contactLink = screen.getByRole('link', { name: /お問い合わせ/i });
  // expect(contactLink).toBeInTheDocument();
  // expect(contactLink).toHaveAttribute('href', '/contact');
  // });
});
