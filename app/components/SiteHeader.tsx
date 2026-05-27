const SiteHeader = () => {
  return (
    <nav
      className={`py-2 sticky top-0 border-b border-white z-50
      bg-white/90 text-base-content flex h-14 w-full [transform:translate3d(0,0,0)] justify-center backdrop-blur transition-shadow duration-100 print:hidden
      shadow-xs`}
    >
      <div className="container flex justify-between items-center">
        {/* Logo & Nav Links  */}
        <div className="flex items-center gap-6">
          <div className="hidden md:block">{/* <SiteNavMenuLinks /> */}</div>
        </div>
        Hello World This is mutasirs World!
        {/* Search & Github & Theme Switch */}
        {/* <div className="hidden md:flex items-center gap-2">
          <SearchComponents />
          <hr className="border-[1px] border-gray-200 h-4 " />
          <GithubStars />
          <hr className="border-[1px] border-gray-200 h-4 " />
          <ThemeSwitch />
        </div> */}
      </div>

      {/* <MobileMenu /> */}
    </nav>
  );
};

export default SiteHeader;
