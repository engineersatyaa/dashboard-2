import { FaRegListAlt, FaRegUser } from "react-icons/fa";
import { BsPostcard } from "react-icons/bs";
import { GrHomeRounded } from "react-icons/gr";
import { IoSearch } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const menuList = [
  {
    name: "Home",
    icon: <GrHomeRounded size={18} />,
    link: "/dashboard-2/",
  },
  {
    name: "Details",
    icon: <BsPostcard size={19} />,
    link: "/dashboard-2/details",
  },
  {
    name: "List",
    icon: <FaRegListAlt size={18} />,
    link: "/dashboard-2/list",
  },
  {
    name: "User",
    icon: <FaRegUser size={18} />,
    link: "/dashboard-2/user",
  },
  {
    name: "Search",
    icon: <IoSearch size={19} />,
    link: "/dashboard-2/search",
  },
];

const MobileMenu = ({ className }) => {
  return (
    <nav
      className={`h-[60px] flex items-center justify-center sm:px-5 md:px-10 ${className}`}
    >
      <ul className="flex items-center justify-between px-5 bg-white/90 w-full">
        {menuList.map((menu, index) => (
          <li key={index}>
            <NavLink
              to={menu?.link}
              className="flex items-center justify-center rounded-lg p-2 text-gray-500"
              style={({ isActive }) => ({
                color: isActive && "#fff",
                backgroundColor: isActive && "var(--mainColor)",
                boxShadow: isActive && "0 0 10px rgba(0, 0, 0, 0.3)",
              })}
            >
              {menu?.icon}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MobileMenu;
