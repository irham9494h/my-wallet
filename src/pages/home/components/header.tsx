import { UserIcon } from "@heroicons/react/24/outline";
import React from "react";

const Header: React.FC = () => {
  return (
    <div className="flex items-center justify-between p-4 pt-6">
      <h2 className="text-xl font-semibold tracking-wider">Dompet Anda</h2>
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
        <UserIcon className="h-6 w-6" />
      </div>
    </div>
  );
};

export default Header;
