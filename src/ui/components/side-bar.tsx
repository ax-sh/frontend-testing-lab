import React, { ReactNode } from "react";
import { NavLink } from "react-router-dom";

import clsx from "clsx";

import { FaBeer, FaHome } from "react-icons/fa";

type LinkType = {
  icon?: ReactNode;
  link: string;
  label: ReactNode;
};

const SIDE_BAR_LINKS: LinkType[] = [
  {
    link: "/users/42",
    icon: <FaHome />,
    label: "Home",
  },
  {
    link: "",
    icon: <FaBeer />,
    label: "Beer",
  },
];
export default function SideBar() {
  return (
    <aside className={"shadow-xl rounded-md m-4 p-3 prose lg:prose-xl w-64"}>
      <h6>Private</h6>
      <ul className={"not-prose"}>
        {SIDE_BAR_LINKS.map(({ link, icon, label }, key) => (
          <li key={key}>
            <NavLink
              className={({ isActive }) =>
                clsx(
                  isActive
                    ? "active border-l-4 border-red-700 pl-4"
                    : "inactive",
                  "box-border flex items-center gap-2",
                )
              }
              to={link}
            >
              {icon} <span>{label}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </aside>
  );
}
