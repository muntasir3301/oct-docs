import { SearchBar } from "./SearchBar";
import { PiBookOpen } from "react-icons/pi";

interface SiteHeaderProps {
  active: string;
}

const SiteHeader: React.FC<SiteHeaderProps> = ({ active }) => {
  return (
    <nav
      className={`py-2 px-4 sticky top-0 border-b border-white z-50
      bg-white/70 text-base-content flex h-14 w-full transform-[translate3d(0,0,0)] justify-center backdrop-blur transition-shadow duration-100 print:hidden
      shadow-xs`}
    >
      <div className="container flex justify-between items-center">
        <div className="flex gap-2 items-center bg-gray-100 hover:bg-gray-200 cursor-pointer px-2 py-0.5 rounded-sm text-sm">
          <PiBookOpen />
          <p className="font-medium">{active}</p>
        </div>

        <SearchBar />
      </div>
    </nav>
  );
};

export default SiteHeader;
