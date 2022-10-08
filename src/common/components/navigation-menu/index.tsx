import React from "react";
import classnames from "classnames";
import { PlusIcon, HomeIcon, Cog6ToothIcon } from "@heroicons/react/24/outline";

const index: React.FC = () => {
  return (
    <div
      className={classnames(
        "fixed bottom-0 w-screen",
        "rounded-t-3xl bg-gray-200 p-3"
      )}
    >
      <div className="flex h-10 justify-around">
        <div className="flex w-full items-center justify-center">
          <HomeIcon className="h-6 w-6" />
        </div>
        <div className="flex w-full items-center justify-center rounded-full bg-blue-700 text-white">
          <PlusIcon className="h-6 w-6" />
        </div>
        <div className="flex w-full items-center justify-center">
          <Cog6ToothIcon className="h-6 w-6" />
        </div>
      </div>
    </div>
  );
};

export default index;
