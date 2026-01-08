import { ArrowUpRight, ArrowDownRight, User, Star, ChevronRight } from 'lucide-react';
import { Card } from '../ui/Card';
import { cn } from '../../lib/utils';

export default function TopStats() {
  return (
    <div className="space-y-6">
      {/* Header Row with Revenue big display and cards */}
      <div className="grid grid-cols-12 gap-6">
        
        {/* Revenue Section - Spans 4 cols */}
        <div className="col-span-12 lg:col-span-4 flex flex-col justify-between">
           <div>
             <h2 className="text-gray-500 font-medium mb-1">Revenue</h2>
             <div className="flex items-baseline gap-2">
               <span className="text-4xl font-bold text-gray-900">$528,976.82</span>
               <span className="flex items-center text-xs font-bold text-white bg-pink-500 px-2 py-0.5 rounded-full">
                 <ArrowUpRight className="w-3 h-3 mr-1" /> 7.9%
               </span>
               <span className="flex items-center text-xs font-bold text-white bg-pink-500 px-2 py-0.5 rounded-full">
                 $27,335.00
               </span>
             </div>
             <p className="text-xs text-gray-400 mt-2">vs prev. $501,641.73 Jun 1 - Aug 31, 2023</p>
           </div>
           
           {/* Mini progress bars or sub-stats could go here if needed, 
               but the design shows them below in a separate strip. 
               We'll stick to the main numbers here. */}
        </div>

        {/* Cards Section - Spans 8 cols */}
        <div className="col-span-12 lg:col-span-8 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
           {/* Top Sales */}
           <Card className="flex flex-col justify-between p-3">
              <span className="text-xs text-gray-500 font-medium">Top sales</span>
              <div className="mt-2">
                <span className="text-xl font-bold">72</span>
                <div className="flex items-center gap-2 mt-2">
                   <div className="w-5 h-5 rounded-full bg-blue-500"></div> {/* Avatar placeholder */}
                   <span className="text-xs font-medium text-gray-700">Mikasa</span>
                   <ChevronRight className="w-3 h-3 text-gray-400 ml-auto" />
                </div>
              </div>
           </Card>

           {/* Best Deal - Dark Card */}
           <Card className="bg-black text-white flex flex-col justify-between p-3 col-span-1 md:col-span-2 lg:col-span-1">
              <div className="flex justify-between items-start">
                <span className="text-xs text-gray-400 font-medium">Best deal</span>
                <Star className="w-3 h-3 text-gray-400" />
              </div>
              <div className="mt-2">
                <span className="text-lg font-bold">$42,300</span>
                <div className="flex items-center justify-between mt-2">
                   <span className="text-xs text-gray-400">Rolf Inc.</span>
                   <button className="bg-white/20 p-1 rounded-full"><ChevronRight className="w-3 h-3" /></button>
                </div>
              </div>
           </Card>

           {/* Deals */}
           <Card className="flex flex-col items-center justify-center p-3">
              <span className="text-xs text-gray-500 font-medium mb-2">Deals</span>
              <span className="text-xs bg-gray-100 px-2 py-1 rounded-full font-bold text-gray-700">256</span>
              <div className="flex items-center gap-1 mt-2 text-xs text-gray-500">
                <ArrowDownRight className="w-3 h-3" /> 5
              </div>
           </Card>

           {/* Value */}
           <Card className="flex flex-col items-center justify-center p-3 border-pink-200 ring-1 ring-pink-100">
              <span className="text-xs text-gray-800 font-medium mb-2">Value</span>
              <span className="text-xs bg-pink-500 text-white px-2 py-1 rounded-full font-bold">528k</span>
              <div className="flex items-center gap-1 mt-2 text-xs text-green-600 font-bold">
                <ArrowUpRight className="w-3 h-3" /> 7.9%
              </div>
           </Card>

           {/* Win rate */}
           <Card className="flex flex-col items-center justify-center p-3">
              <span className="text-xs text-gray-500 font-medium mb-2">Win rate</span>
              <span className="text-xs bg-gray-100 px-2 py-1 rounded-full font-bold text-gray-700">44%</span>
              <div className="flex items-center gap-1 mt-2 text-xs text-green-600">
                <ArrowUpRight className="w-3 h-3" /> 1.2%
              </div>
           </Card>

        </div>
      </div>
      
      {/* The Sub-stats row (avatars with progress) */}
      <div className="flex flex-wrap items-center gap-6 bg-white p-3 rounded-xl shadow-sm border border-gray-100">
         <SubStat avatar="bg-gray-800" label="$209,633" sub="39.63%" />
         <div className="h-6 w-px bg-gray-200"></div>
         <SubStat avatar="bg-blue-500" label="$156,841" sub="29.65%" />
         <div className="h-6 w-px bg-gray-200"></div>
         <SubStat avatar="bg-yellow-600" label="$117,115" sub="22.14%" />
         <div className="h-6 w-px bg-gray-200"></div>
         <SubStat avatar="bg-black" label="$45,386" sub="8.58%" />
         
         <button className="ml-auto bg-black text-white px-4 py-2 rounded-full text-xs font-bold hover:bg-gray-800">
           Details
         </button>
      </div>

    </div>
  );
}

function SubStat({ avatar, label, sub }) {
  return (
    <div className="flex items-center gap-3">
      <div className={cn("w-6 h-6 rounded-full", avatar)}></div>
      <div className="flex flex-col md:flex-row md:items-baseline gap-1 md:gap-4">
         <span className="text-sm font-bold text-gray-800">{label}</span>
         <span className="text-xs text-gray-400">{sub}</span>
      </div>
    </div>
  )
}
