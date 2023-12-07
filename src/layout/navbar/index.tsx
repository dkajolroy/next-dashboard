import AccountToggle from "../button/AccountToggle";
import AppDialogToogle from "../button/AppDialogToogle";
import ColorModeSwitcher from "../button/ColorModeSwitcher";
import NotificationToggle from "../button/NotificationToggle";
import SearchButton from "../button/SearchButton";
import SidebarToggle from "../button/SidebarToggle";
import SearchInput from "../input/SearchInput";
import AccountDialog from "./AccountDialog";
import AppsDialog from "./AppsDialog";
import NotificationDialog from "./NotificationDialog";

export default function Navbar() {
  return (
    <nav className="fixed z-30 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
      <div className="px-3 py-3 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start">
            <SidebarToggle />
            <a href="/" className="flex ml-2 md:mr-24">
              {/* <img
                src={"images/logo.svg"}
                className="h-8 mr-3"
                alt="FlowBite Logo"
              /> */}
              <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">
                Admin
              </span>
            </a>

            <SearchInput />
          </div>

          <div className="flex items-center">
            <SearchButton />

            {/* <!-- Dropdown menu --> */}

            {/* <!-- Notifications --> */}
            <NotificationToggle />
            {/* <!-- Dropdown menu --> */}
            <NotificationDialog />
            {/* <!-- Apps --> */}
            <AppDialogToogle />
            {/* <!-- Dropdown menu --> */}
            <AppsDialog />

            <ColorModeSwitcher />

            {/* <!-- Profile --> */}
            <div className="flex items-center ml-3">
              <div>
                <AccountToggle />
              </div>
              {/* <!-- Dropdown menu --> */}
              <AccountDialog />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
