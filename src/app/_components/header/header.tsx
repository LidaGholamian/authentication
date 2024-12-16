import { ThemeSwitch } from "../themeSwitch";

export const Header: React.FC = () => {
  return (
    <div className="flex justify-between items-center">
      <h1>Authentication</h1>
      <ThemeSwitch />
    </div>
  );
};
