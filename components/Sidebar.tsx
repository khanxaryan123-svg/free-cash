import React from 'react';
import { DollarSign, Gamepad2, Trophy, Gift, Users } from 'lucide-react';

export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-[72px] h-[calc(100vh-72px)] w-20 md:w-64 bg-[#1a1b1f] border-r border-[#2d2e33] flex flex-col z-40 overflow-y-auto custom-scrollbar">
      <nav className="flex-1 py-6 flex flex-col gap-1 px-2">
        <NavItem icon={<DollarSign size={20} />} label="Earn" active />
        <NavItem icon={<Gamepad2 size={20} />} label="Cashout" />
        <NavItem icon={<Trophy size={20} />} label="Leaderboard" />
        <NavItem icon={<Gift size={20} />} label="Rewards" />
        <NavItem icon={<Users size={20} />} label="Affiliates" />
      </nav>

      <div className="p-4 border-t border-[#2d2e33] hidden md:block">
        <div className="bg-[#26272c] p-3 rounded-lg">
          <p className="text-xs text-gray-400">Daily Bonus</p>
          <div className="w-full bg-gray-700 h-1 mt-2 rounded-full overflow-hidden">
            <div className="bg-green-500 h-full w-1/4"></div>
          </div>
        </div>
      </div>
    </aside>
  );
}

function NavItem({ icon, label, active = false }: { icon: React.ReactNode, label: string, active?: boolean }) {
  return (
    <a href="#" className={`flex items-center gap-3 p-3 rounded-lg transition-colors ${active ? 'bg-[#26272c] text-white' : 'text-gray-400 hover:bg-[#26272c] hover:text-white'}`}>
      <div className={`${active ? 'text-green-500' : ''}`}>
        {icon}
      </div>
      <span className="font-medium hidden md:block">{label}</span>
    </a>
  );
}