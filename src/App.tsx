import { FC } from "react";
import { Layout } from "./common/components";
import {
  ArrowDownTrayIcon,
  ArrowUpTrayIcon,
} from "@heroicons/react/24/outline";

const App: FC = () => {
  return (
    <Layout>
      <div className="h-52 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 p-4 text-white">
        hallo
      </div>

      <div className="px-4">
        <div className="-mt-14 flex justify-between rounded-xl bg-white p-4 py-8 shadow-xl">
          <div className="flex flex-col gap-y-1">
            <div className="flex items-center gap-3 text-gray-400">
              <ArrowDownTrayIcon className="h-5 w-5 text-green-600" />
              Pendapatan
            </div>
            <p className="text-xl font-semibold text-green-600">
              Rp. 1.000.000
            </p>
          </div>

          <div className="flex flex-col items-end gap-y-1">
            <div className="flex items-center gap-3 text-gray-400">
              <ArrowUpTrayIcon className="h-5 w-5 text-red-600" />
              Pengeluaran
            </div>
            <p className="text-xl font-semibold text-red-600">Rp. 500.000</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default App;
