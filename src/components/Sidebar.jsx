import { IoNotificationsOutline, IoSearch } from "react-icons/io5";
import { FaRegUser, FaRegListAlt } from "react-icons/fa";
import { BsPostcard } from "react-icons/bs";
import { TbLogout } from "react-icons/tb";
import { GrHomeRounded } from "react-icons/gr";
import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/images/butterfly.png";

const navList = [
  {
    name: "Home",
    icon: <GrHomeRounded size={20} />,
    link: "/dashboard-2/",
  },
  {
    name: "Details",
    icon: <BsPostcard size={22} />,
    link: "/dashboard-2/details",
  },
  {
    name: "List",
    icon: <FaRegListAlt size={20} />,
    link: "/dashboard-2/list",
  },
  {
    name: "User",
    icon: <FaRegUser size={20} />,
    link: "/dashboard-2/user",
  },
];

const Sidebar = ({ className }) => {
  return (
    <aside
      className={`h-screen sticky top-0 left-0 lg:flex flex-col justify-between px-4 py-5 text-gray-500 ${className}`}
    >
      <div>
        {/* Icon and Search block start */}
        <div className="flex flex-col items-center justify-center gap-5 mb-14">
          <div className="w-6">
            <img src={Logo} alt="logo" />
          </div>

          <button className="border-none outline-none">
            <Link
              to={"#"}
              className="flex items-center justify-center border border-white md:hover:border-gray-400  rounded-md p-[10px] "
            >
              <IoSearch size={21} />
            </Link>
          </button>
        </div>
        {/* Icon and Search block end */}

        {/* Navbar block start */}
        <nav>
          <ul className="flex flex-col items-center justify-center gap-6">
            {navList.map((item, index) => (
              <li key={index}>
                <NavLink
                  to={item?.link}
                  className="flex items-center justify-center border border-white md:hover:border-gray-400  rounded-md p-[10px] "
                  style={({ isActive }) => ({
                    color: isActive && "#fff",
                    backgroundColor: isActive && "var(--mainColor)",
                  })}
                >
                  {item?.icon}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        {/* Navbar block end */}
      </div>

      {/* Notification and Logout block start */}
      <div className="flex flex-col items-center justify-center gap-6 ">
        <button className="border-none outline-none">
          <Link
            to={"#"}
            className="relative flex items-center justify-center border border-white md:hover:border-gray-400  rounded-md p-[10px] "
          >
            {true && (
              <span className="bg-mainColor w-2 h-2 rounded-full absolute top-[6px] right-[7px]"></span>
            )}
            <IoNotificationsOutline size={21} />
          </Link>
        </button>

        <button className="border-none outline-none">
          <Link
            to={"#"}
            className="relative flex items-center justify-center border border-white md:hover:border-gray-400  rounded-md p-[10px] "
          >
            <TbLogout size={21} />
          </Link>
        </button>
      </div>
      {/* Notification and Logout block end */}
    </aside>
  );
};

export default Sidebar;
