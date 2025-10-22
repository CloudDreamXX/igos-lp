import { useState } from 'react';
import AcceptanceRateCard from '../../widgets/AcceptanceRateCard';
import TransactionStatusCard from '../../widgets/TransactionStatusCard';
import TopCountriesCard from '../../widgets/TopCountriesCard';

export const Dashboard = () => {
  const [transactions] = useState([
    {
      time: '2025-10-09 14:59:05',
      country: '🇩🇪 Germany',
      type: 'CC',
      psp: 'Stripe',
      mid: 'Stripe Sandbox GRO',
      status: { success: true, scoring: true, failed: false, pending: true },
      transactionId: '021445...',
      requestRef: '4519151865',
      card: '145145',
      amount: '101.94 EUR',
    },
    {
      time: '2025-10-09 14:59:05',
      country: '🇦🇹 Austria',
      type: 'CC',
      psp: 'Stripe',
      mid: 'Stripe Sandbox PRS',
      status: { success: true, scoring: false, failed: false, pending: true },
      transactionId: '021445...',
      requestRef: '4519151865',
      card: '145145',
      amount: '101.94 EUR',
    },
  ]);

  return (
    <div className="min-h-screen bg-white text-black font-sans p-16">
      <header className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img src="/assets/icons/logo.svg" alt="IGOS Logo" className="w-40" />
        </div>

        <div className="flex items-start gap-10">
          <nav className="hidden md:flex items-center gap-10 text-sm font-normal text-[16px]">
            <a href="#" className="hover:underline">
              Transactions
            </a>
            <a href="#" className="hover:underline">
              Payment Methods
            </a>
            <a href="#" className="hover:underline">
              Users
            </a>
            <a href="#" className="hover:underline">
              Security
            </a>
          </nav>

          <div className="flex gap-2">
            <button className=" bg-[#E7E7E7]  w-6 h-6  rounded-full flex flex-col items-center justify-center gap-[2px] hover:cursor-pointer hover:shadow-">
              <span className="block w-3 h-[2px] bg-black"></span>
              <span className="block w-3 h-[2px] bg-black"></span>
              <span className="block w-3 h-[2px] bg-black"></span>
            </button>
            <button className="flex items-center justify-center w-6 h-6 rounded-full bg-[#DDCCFF] text-sm font-semibold text-gray-700">
              E
            </button>
          </div>
        </div>
      </header>

      <main className="py-16 space-y-10">
        <div className="flex gap-6 items-center">
          <h2 className="text-[21px] font-bold mb-2">Overview</h2>
          <input
            type="text"
            placeholder="Search customer, email or card"
            className="w-full md:w-80 border border-[#D9D9D9] rounded-full p-1.5 text-smtext-gray-700 px-4"
          />
        </div>

        <div className="flex gap-6 justify-between">
          <AcceptanceRateCard />

          <div className="max-w-[207px]">
            <TransactionStatusCard />
          </div>

          <div className="max-w-[320px]">
            <TransactionStatusCard />
          </div>

          <TopCountriesCard />
        </div>

        {/* Table Section */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-x-auto">
          <div className="flex justify-between items-center p-4 border-b border-gray-200">
            <h3 className="font-medium text-gray-700">Transactions</h3>
            <a href="#" className="text-xs text-gray-500 hover:underline">
              See all
            </a>
          </div>
          <table className="min-w-full text-sm text-left">
            <thead className="bg-gray-50 text-gray-500 border-b">
              <tr>
                <th className="px-4 py-2">Time</th>
                <th className="px-4 py-2">Country</th>
                <th className="px-4 py-2">Type</th>
                <th className="px-4 py-2">PSP</th>
                <th className="px-4 py-2">MID</th>
                <th className="px-4 py-2">Status</th>
                <th className="px-4 py-2">Transaction ID</th>
                <th className="px-4 py-2">Request Ref</th>
                <th className="px-4 py-2">Card</th>
                <th className="px-4 py-2">Amount</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((tx, i) => (
                <tr key={i} className="border-b hover:bg-gray-50">
                  <td className="px-4 py-2">{tx.time}</td>
                  <td className="px-4 py-2">{tx.country}</td>
                  <td className="px-4 py-2">{tx.type}</td>
                  <td className="px-4 py-2">{tx.psp}</td>
                  <td className="px-4 py-2">{tx.mid}</td>
                  <td className="px-4 py-2">
                    <div className="flex gap-1">
                      <span className="w-3 h-3 bg-green-500 rounded-sm"></span>
                      <span className="w-3 h-3 bg-yellow-400 rounded-sm"></span>
                      <span className="w-3 h-3 bg-orange-400 rounded-sm"></span>
                      <span className="w-3 h-3 bg-red-500 rounded-sm"></span>
                    </div>
                  </td>
                  <td className="px-4 py-2">{tx.transactionId}</td>
                  <td className="px-4 py-2">{tx.requestRef}</td>
                  <td className="px-4 py-2">{tx.card}</td>
                  <td className="px-4 py-2">{tx.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};
