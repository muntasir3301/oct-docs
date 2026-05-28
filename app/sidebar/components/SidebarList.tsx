"use client";

import Link from "next/link";
import {
  FaPalette,
  FaFont,
  FaRegSquare,
  FaCalendarAlt,
  FaChevronDown,
  FaSearch,
  FaPhoneAlt,
  FaTable,
} from "react-icons/fa";

const sidebarGroups = [
  {
    label: "Styles",
    items: [
      {
        key: "/global-colors",
        value: "Global colors",
        icon: <FaPalette />,
      },
      { key: "/global-fonts", value: "Global fonts", icon: <FaFont /> },
    ],
  },
  {
    label: "Components",
    items: [
      { key: "buttons", value: "Buttons", icon: <FaRegSquare /> },
      { key: "calendar", value: "Calendar", icon: <FaCalendarAlt /> },
      { key: "dropdown", value: "Dropdown", icon: <FaChevronDown /> },
      { key: "dropdown-search", value: "Dropdown search", icon: <FaSearch /> },
      {
        key: "phone-number-picker",
        value: "Phone number picker",
        icon: <FaPhoneAlt />,
      },
      { key: "table", value: "Table", icon: <FaTable /> },
    ],
  },
];

interface SidebarListProps {
  active: string;
  handleActivePage: (value: string) => void;
}

const SidebarList: React.FC<SidebarListProps> = ({
  active,
  handleActivePage,
}) => {
  return (
    <aside className="flex flex-col gap-0.5 bg-white text-xs mt-4">
      {sidebarGroups.map((group, gi) => (
        <div key={group.label}>
          {gi > 0 && <div className="h-px bg-gray-100 my-2" />}

          <p className="text-xs font-medium text-gray-500 uppercase tracking-widest px-2 mb-1.5 mt-4">
            {group.label}
          </p>

          {group.items.map((item) => (
            <Link
              key={item.key}
              href={`/pages/${item.key}`}
              onClick={() => handleActivePage(item.value)}
              className={`flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-xs transition-all duration-100 font-medium ${
                active === item.value
                  ? "bg-gray-200 text-gray-900 border border-gray-200"
                  : "text-gray-700 hover:bg-gray-50 hover:text-gray-800 border border-transparent"
              }`}
            >
              <span className="w-4.5 flex items-center justify-center text-xs shrink-0">
                {item.icon}
              </span>
              <span>{item.value}</span>
            </Link>
          ))}
        </div>
      ))}
    </aside>
  );
};

export default SidebarList;
