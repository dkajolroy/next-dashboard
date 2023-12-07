import { applist } from "@/layout/constant/app_dialog";
import Link from "next/link";

export default function AppsDialog() {
  return (
    <div
      className="z-20 hidden absolute right-2 top-11 max-w-sm my-4 overflow-hidden text-base list-none bg-white divide-y divide-gray-100 rounded shadow-lg dark:bg-gray-700 dark:divide-gray-600"
      id="apps-dropdown"
    >
      <div className="block px-4 py-2 text-base font-medium text-center text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        Apps
      </div>
      <div className="grid grid-cols-3 gap-4 p-4">
        {applist.map((app, index) => (
          <Link
            key={index}
            href={app.pathname}
            className="block p-4 text-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600"
          >
            {app.icon}
            <span className="text-sm font-medium text-gray-900 dark:text-white">
              {app.name}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
