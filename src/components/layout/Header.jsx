import { Search, Bell, Menu, Plus } from 'lucide-react';

export default function Header({ onMenuClick }) {
  return (
    <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6">
      <div className="flex items-center gap-4 flex-1">
        <button 
          className="md:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-lg"
          onClick={onMenuClick}
        >
          <Menu className="w-5 h-5" />
        </button>
        <div className="relative w-full max-w-md hidden md:block">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input 
            type="text" 
            placeholder="Try searching for insights" 
            className="w-full pl-10 pr-4 py-2 bg-gray-100 border-none rounded-full text-sm focus:ring-2 focus:ring-gray-200 outline-none transition-all"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-full">
           <Bell className="w-5 h-5" />
        </button>
        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-yellow-400 to-pink-500"></div>
        <button className="w-8 h-8 bg-pink-500 text-white rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors">
          <Plus className="w-5 h-5" />
        </button>
      </div>
    </header>
  );
}
