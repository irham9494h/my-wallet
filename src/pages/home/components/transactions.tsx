import { ArrowRightIcon, GiftIcon } from "@heroicons/react/24/outline";
import React from "react";

const Transactions: React.FC = () => {
  return (
    <>
      <div className="flex justify-between border-b p-4">
        <h4>Transaksi Terakhir</h4>
        <ArrowRightIcon className="h-6 w-6" />
      </div>
      <div className="divide-y">
        <div className="flex items-center gap-x-2 px-4 py-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-green-300 bg-green-100">
            <GiftIcon className="h-6 w-6 text-green-600" />
          </div>
          <div className="flex grow flex-col gap-y-1 overflow-hidden">
            <h4 className="text-sm font-medium tracking-wide">
              Bayar Sewa Lapangan
            </h4>
            {/* <p className="text-xs text-gray-500">REKENING 1</p> */}
            <p className="truncate text-xs text-gray-500">
              REKENING 1 - askjd akdhakdh ASHDASKH kasd asdhkadhk
            </p>
          </div>
          <div className="flex flex-col items-end gap-y-1">
            <h4 className="shrink-0 text-red-500">-100.000,00</h4>
            <p className="text-xs text-gray-500">23:00</p>
          </div>
        </div>

        <div className="flex items-center gap-x-2 px-4 py-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-green-300 bg-green-100">
            <GiftIcon className="h-6 w-6 text-green-600" />
          </div>
          <div className="flex grow flex-col gap-y-1 overflow-hidden">
            <h4 className="text-sm font-medium tracking-wide">Iuran KAS</h4>
            {/* <p className="text-xs text-gray-500">REKENING 1</p> */}
            <p className="truncate text-xs text-gray-500">
              REKENING 1 - askjd akdhakdh ASHDASKH kasd asdhkadhk
            </p>
          </div>
          <div className="flex flex-col items-end gap-y-1">
            <h4 className="shrink-0 text-green-500">100.000,00</h4>
            <p className="text-xs text-gray-500">23:00</p>
          </div>
        </div>

        <div className="flex items-center gap-x-2 px-4 py-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-green-300 bg-green-100">
            <GiftIcon className="h-6 w-6 text-green-600" />
          </div>
          <div className="flex grow flex-col gap-y-1 overflow-hidden">
            <h4 className="text-sm font-medium tracking-wide">Iuran KAS</h4>
            {/* <p className="text-xs text-gray-500">REKENING 1</p> */}
            <p className="truncate text-xs text-gray-500">
              REKENING 1 - askjd akdhakdh ASHDASKH kasd asdhkadhk
            </p>
          </div>
          <div className="flex flex-col items-end gap-y-1">
            <h4 className="shrink-0 text-green-500">100.000,00</h4>
            <p className="text-xs text-gray-500">23:00</p>
          </div>
        </div>

        <div className="flex items-center gap-x-2 px-4 py-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-green-300 bg-green-100">
            <GiftIcon className="h-6 w-6 text-green-600" />
          </div>
          <div className="flex grow flex-col gap-y-1 overflow-hidden">
            <h4 className="text-sm font-medium tracking-wide">Iuran KAS</h4>
            {/* <p className="text-xs text-gray-500">REKENING 1</p> */}
            <p className="truncate text-xs text-gray-500">
              REKENING 1 - askjd akdhakdh ASHDASKH kasd asdhkadhk
            </p>
          </div>
          <div className="flex flex-col items-end gap-y-1">
            <h4 className="shrink-0 text-green-500">100.000,00</h4>
            <p className="text-xs text-gray-500">23:00</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Transactions;
