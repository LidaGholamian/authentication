import { FaBookOpenReader } from "react-icons/fa6";
import { ThemeSwitch } from "../themeSwitch";
import { TopNavigation } from "./topNavigation";

export const Header: React.FC = () => {
  return (
    <header className="flex items-center border-b dark:border-base-content dark:border-opacity-5">
      <div className="flex justify-between items-center container">
        <FaBookOpenReader className="text-blue text-3xl" />
        <TopNavigation />
        <div className="flex justify-between items-center gap-4 mr-auto">
          <ThemeSwitch />
          <span className="dark:border-white dark:border-opacity-5 dark:border-2 p-2">
            User Authentication
          </span>
        </div>
      </div>
    </header>
  );
};
