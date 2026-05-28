import Image from "next/image";
import logo from "@/public/img/oct-logo.webp";
import SidebarList from "./components/SidebarList";
import Link from "next/link";

interface SidebarProps {
  active: string;
  handleActivePage: (value: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ active, handleActivePage }) => {
  return (
    <div className="p-4">
      <div className="">
        <Link onClick={() => handleActivePage("Documentation")} href={"/"}>
          <Image alt="logo" src={logo} height={50} width={105} />
        </Link>
      </div>
      <SidebarList active={active} handleActivePage={handleActivePage} />
    </div>
  );
};

export default Sidebar;
