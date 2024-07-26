import BackgroundAnimation from '@/components/animations/BackgroundAnimation';
import { act, render, screen, waitFor } from '@testing-library/react';

// @tsparticles/react モジュールのモック設定
jest.mock('@tsparticles/react', () => ({
  __esModule: true,
  // モックとして返すコンポーネントを定義
  default: jest.fn(() => <div data-testid="tsparticles" />),
  initParticlesEngine: jest // initParticlesEngine 関数のモック設定
    .fn()
    .mockImplementation(() => new Promise((resolve) => setTimeout(resolve, 100))),
}));

// @tsparticles/slim モジュールのモック設定
jest.mock('@tsparticles/slim', () => ({
  loadSlim: jest.fn().mockResolvedValue({}), // loadSlim 関数のモック設定
}));

describe('BackgroundAnimation', () => {
  // クラッシュせずにレンダリングされ、particlesが初期化されることを確認する
  it('Confirmation that it renders without crashing.', async () => {
    // 非同期操作を含むレンダリングや更新をシミュレートするためにactを使用
    await act(async () => {
      render(<BackgroundAnimation />);
    });
    // 初期化が完了するのを待ち、tsparticles がDOMに存在するか確認
    await waitFor(
      () => {
        expect(screen.getByTestId('tsparticles')).toBeInTheDocument();
      },
      { timeout: 3000 },
    );
  });
  // 初期化が完了する前にparticlesがレンダリングされないことを確認する
  it('Ensure that particles are not rendered before initialisation is complete', async () => {
    // Jestのフェイクタイマーを使用
    jest.useFakeTimers();
    render(<BackgroundAnimation />);

    // 初期化が完了する前の状態をチェック
    // data-testid="tsparticles" を持つ要素が存在しないことを確認
    expect(screen.queryByTestId('tsparticles')).not.toBeInTheDocument();

    await act(async () => {
      // フェイクタイマーを全て実行
      jest.runAllTimers();
    });
    // 実際のタイマーに戻す
    jest.useRealTimers();
  });
});
