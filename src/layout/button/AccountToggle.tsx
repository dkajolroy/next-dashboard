"use client";

import Image from "next/image";

export default function AccountToggle() {
  function toogleUser() {
    var account_dialog = document.getElementById("dropdown-account-dialog");
    account_dialog?.classList.toggle("hidden");
  }
  return (
    <button
      type="button"
      id="dropdownDefaultButton"
      className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
      onClick={toogleUser}
      aria-expanded="false"
      data-dropdown-toggle="dropdown-account-dialog"
    >
      <span className="sr-only">Open user menu</span>
      <Image
        className="w-8 object-cover h-8 rounded-full"
        src="/man.jpg"
        alt="user photo"
        width={100}
        height={100}
      />
    </button>
  );
}
