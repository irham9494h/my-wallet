import React from "react";

const Wallets: React.FC = () => {
  return (
    <div className="p-4">
      <div className="mx-auto flex h-48 w-full max-w-sm flex-col justify-between rounded-xl bg-gradient-to-tl from-blue-500 via-blue-600 to-blue-700 px-4 py-7 text-white shadow-lg shadow-blue-300">
        <div className="space-y-1 tracking-wide">
          <h6 className="text-xs font-extralight">Saldo</h6>
          <h2 className="text-xl font-semibold">Rp. 90.000.000</h2>
        </div>
        <div className="space-y-1 tracking-wide">
          <h6 className="text-xs font-extralight">Nama Rekening</h6>
          <h2 className="text-lg font-semibold">Rekening 1</h2>
        </div>
      </div>
    </div>
  );
};

export default Wallets;
