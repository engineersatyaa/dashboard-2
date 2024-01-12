import React from "react";
import { IoNotificationsOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const MobileNotificationBar = ({ className }) => {
  return (
    <div
      className={`flex items-center justify-end h-[50px] px-4 sm:px-5 md:px-10 ${className}`}
    >
      <button className="border-none outline-none">
        <Link
          to={"#"}
          className="relative flex items-center justify-center p-[10px] text-gray-500"
        >
          <IoNotificationsOutline size={20} />
          {true && (
            <span className="bg-blue-500 w-[7px] h-[7px] rounded-full absolute top-[6px] right-[7px]"></span>
          )}
        </Link>
      </button>
    </div>
  );
};

export default MobileNotificationBar;
