import Image from "next/image";
import logo from "@/public/img/oct-logo.webp";
import sidebarImg from "@/public/img/oct-sidebar.svg";

const Sidebar = () => {
  return (
    <div className="p-4">
      <div className="flex justify-between items-center">
        <Image alt="logo" src={logo} height={50} width={100} />
        <Image alt="sidebar-img" src={sidebarImg} height={25} width={25} />
      </div>
    </div>
  );
};

export default Sidebar;
