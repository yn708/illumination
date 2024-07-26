const Footer = () => {
  return (
    <>
      <footer
        role="contentinfo"
        className="bg-gray-100 dark:bg-gray-900 px-4 py-6 md:px-6 md:py-8 border-t border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400"
      >
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between p-4">
          <p className="text-sm lg:m-0 mb-10">© 2024 illumination. All rights reserved.</p>
          <nav className="flex sm:flex-row flex-col items-center gap-7 text-sm">
            {/* <Link className="hover:text-primary transition-colors" href="#">
              利用規約
            </Link>
            <Link className="hover:text-primary transition-colors" href="#">
              プライバシーポリシー
            </Link> */}
            {/* <Link className="hover:font-bold" href="/about">
              このサイトについて
            </Link> */}
            {/* <Link className="hover:font-bold" href="/contact">
              お問い合わせ
            </Link> */}
          </nav>
        </div>
      </footer>
    </>
  );
};

export default Footer;
