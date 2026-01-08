import { Card } from '../ui/Card';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { cn } from '../../lib/utils';

export default function SalesSection() {
  return (
    <div className="space-y-6">
       {/* Sales Table */}
       <div className="space-y-4">
          <div className="flex items-center text-xs text-gray-400 px-2">
             <span className="w-1/4">Sales</span>
             <span className="w-1/6 text-right">Revenue</span>
             <span className="w-1/6 text-right">Leads</span>
             <span className="w-1/6 text-right">KPI</span>
             <span className="w-1/6 text-right">W/L</span>
          </div>
          
          <SalesRow 
             name="Armin A." 
             rev="$209,633" 
             leads="41" leadsTotal="118" 
             kpi="0.84" 
             wl="31%" wlTotal="12" 
             active 
          />
           <SalesRow 
             name="Mikasa A." 
             rev="$156,841" 
             leads="54" leadsTotal="103" 
             kpi="0.89" 
             wl="39%" wlTotal="21" 
          />
       </div>
       
       {/* Pills */}
       <div className="flex flex-wrap gap-2">
          <Pill icon="💪" label="Top sales" />
          <Pill icon="🔥" label="Sales streak" />
          <Pill icon="👍" label="Top review" />
          <div className="ml-auto flex gap-2">
             <span className="bg-pink-500 text-white text-xs px-2 py-1 rounded-full font-bold">3</span>
             <span className="bg-pink-500 text-white text-xs px-2 py-1 rounded-full font-bold">$156,841</span>
          </div>
       </div>

       {/* Work with platforms */}
       <div className="mt-6">
          <h3 className="text-sm font-bold text-gray-800 mb-3">Work with platforms</h3>
          <Card className="p-4 grid grid-cols-2 gap-4">
             {/* Big Dribbble Block */}
             <div className="col-span-1">
                <div className="flex items-center gap-2 mb-4">
                   <div className="w-5 h-5 rounded-full bg-pink-100 text-pink-500 flex items-center justify-center text-xs font-bold">D</div>
                   <span className="text-sm font-bold text-gray-800">Dribbble</span>
                </div>
                <div className="text-2xl font-bold text-gray-800 mb-1">45.3% <span className="text-gray-300 text-lg">$71,048</span></div>
             </div>

             {/* Right List */}
             <div className="col-span-1 space-y-3">
                <PlatformRow name="Instagram" color="text-orange-500" value="28.1%" sub="$44,072" />
                <PlatformRow name="Google" color="text-green-500" value="14.1%" sub="$22,114" />
                <PlatformRow name="Other" color="text-gray-500" value="5.4%" sub="$8,469" />
                <div className="flex justify-end text-xs text-gray-400 mt-1">7.1% $11,135</div>
             </div>
          </Card>
       </div>
    </div>
  );
}

function SalesRow({ name, rev, leads, leadsTotal, kpi, wl, wlTotal, active }) {
   return (
      <div className={cn("flex items-center px-4 py-3 rounded-xl", active ? "bg-white shadow-sm border border-gray-100" : "")}>
         <div className="w-1/4 flex items-center gap-2">
            <div className="w-6 h-6 bg-gray-800 rounded-full"></div>
            <span className="text-sm font-medium text-gray-700">{name}</span>
         </div>
         <div className="w-1/6 text-right text-sm font-bold text-gray-700">{rev}</div>
         <div className="w-1/6 text-right flex justify-end gap-1">
            <span className="bg-black text-white text-xs px-1.5 rounded-full">{leads}</span>
            <span className="text-xs text-gray-400">{leadsTotal}</span>
         </div>
         <div className="w-1/6 text-right text-sm text-gray-600">{kpi}</div>
         <div className="w-1/6 text-right flex justify-end gap-1">
            <span className="text-xs text-gray-700 font-bold">{wl}</span>
            <span className="bg-gray-800 text-white text-xs px-1.5 rounded-full">{wlTotal}</span>
            <span className="bg-gray-100 text-gray-500 text-xs px-1.5 rounded-full ml-1">29</span>
         </div>
      </div>
   )
}

function Pill({ icon, label }) {
   return (
      <span className="bg-white border border-gray-100 px-3 py-1.5 rounded-full text-xs font-bold text-gray-700 flex items-center gap-1 shadow-sm">
         {label} {icon}
      </span>
   )
}

function PlatformRow({ name, color, value, sub }) {
   return (
      <div className="flex items-center justify-between">
         <div className="flex items-center gap-2">
            <div className={`w-2 h-2 rounded-full bg-current ${color}`}></div>
            <span className="text-xs font-medium text-gray-700">{name}</span>
         </div>
         <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-gray-800">{value}</span>
            <span className="text-xs text-gray-300">{sub}</span>
         </div>
      </div>
   )
}
