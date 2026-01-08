import { 
  BarChart2, 
  Home, 
  Mail, 
  Settings, 
  FileText, 
  Users, 
  Folder 
} from 'lucide-react';
import { cn } from '../../lib/utils';

import { X } from 'lucide-react';

export default function Sidebar({ isOpen, onClose }) {
  return (
    <>
      {/* Mobile Sidebar */}
      <aside 
        className={cn(
          "fixed inset-y-0 left-0 z-30 w-64 bg-white border-r border-gray-200 flex flex-col transition-transform duration-300 ease-in-out md:translate-x-0 md:static md:flex",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="p-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
             <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center text-white font-bold">C</div>
             <span className="font-semibold text-lg">Codename</span>
          </div>
          <button onClick={onClose} className="md:hidden p-1 text-gray-500 hover:bg-gray-100 rounded-lg">
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <nav className="flex-1 px-4 py-4 space-y-6 overflow-y-auto">
          <div>
            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 px-2">Main</h3>
            <div className="space-y-1">
               <NavItem icon={Home} label="Dashboard" active />
               <NavItem icon={BarChart2} label="Sales list" />
               <NavItem icon={FileText} label="Goals" />
            </div>
          </div>

          <div>
             <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 px-2">Folders</h3>
             <div className="space-y-1">
               <NavItem icon={Folder} label="Codename" />
               <NavItem icon={Folder} label="Shared with me" />
               <NavItem icon={Folder} label="My reports" />
             </div>
          </div>
        </nav>

        <div className="p-4 border-t border-gray-100">
          <NavItem icon={Settings} label="Settings" />
        </div>
      </aside>
    </>
  );
}

function NavItem({ icon: Icon, label, active, badge }) {
  return (
    <button
      className={cn(
        "w-full flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg transition-colors",
        active 
          ? "bg-gray-100 text-gray-900" 
          : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
      )}
    >
      <Icon className="w-4 h-4" />
      <span className="flex-1 text-left">{label}</span>
      {badge && (
        <span className="bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full">{badge}</span>
      )}
    </button>
  );
}
