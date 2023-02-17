import React from "react";
import dash from "../assets/Dasboard.svg";
import inbox from "../assets/Inbox.svg";
import notif from "../assets/Notifications.svg";
import settings from "../assets/Settings.svg";
import staff from "../assets/Staff.svg";

function Navbar() {
  return (
    <div className="w-1/6 h-full bg-gray-200 flex items-start  -md:w-full -md:h-auto -md:p-3">
      <div className="w-11/12 mx-auto mt-8">
        <nav className="flex flex-col justify-between gap-8 -md:flex-row">
          <li className="text-black p-1 font-semibold list-none flex items-center gap-1">
            <img className="w-5 h-5" src={dash} />
            <a className="-md:hidden" href="#">
              Dashboard
            </a>
          </li>
          <li className="text-black p-1 font-semibold list-none flex items-center gap-1">
            <img className="w-5 h-5" src={inbox} />
            <a className="-md:hidden" href="#">
              Inbox
            </a>
          </li>
          <li className="text-black p-1 font-semibold list-none flex items-center gap-1">
            <img className="w-5 h-5" src={notif} />
            <a className="-md:hidden" href="#">
              Notifications
            </a>
          </li>
          <li className="text-black p-1 font-semibold list-none flex items-center gap-1">
            <img className="w-5 h-6" src={staff} />
            <a className="-md:hidden" href="#">
              Staff
            </a>
          </li>
          <li className="text-black p-1 font-semibold list-none flex items-center gap-1">
            <img className="w-5 h-5" src={settings} />
            <a className="-md:hidden" href="#">
              Settings
            </a>
          </li>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
