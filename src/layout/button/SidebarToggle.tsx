"use client";
import { closeIcon, menuIcon } from "@/layout/constant/icons";
import { useState } from "react";

export default function SidebarToggle() {
  const [active, setActive] = useState(false);

  function toggleSidebar() {
    setActive((s) => !s);
    var sidebar = document.getElementById("sidebar");
    sidebar?.classList.toggle("hidden");
  }
  return (
    <>
      <button
        onClick={toggleSidebar}
        aria-expanded="true"
        aria-controls="sidebar"
        className="p-2 text-gray-600 rounded cursor-pointer lg:hidden hover:text-gray-900 hover:bg-gray-100 focus:bg-gray-100 dark:focus:bg-gray-700 focus:ring-2 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
      >
        {active ? closeIcon() : menuIcon()}
      </button>
    </>
  );
}
