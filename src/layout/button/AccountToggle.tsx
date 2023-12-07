"use client";

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
      <img
        className="w-8 h-8 rounded-full"
        src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
        alt="user photo"
      />
    </button>
  );
}
