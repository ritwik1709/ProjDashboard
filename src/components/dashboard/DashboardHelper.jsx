import TopStats from './TopStats';
import FiltersCard from './FiltersCard';
import ReferrerChart from './ReferrerChart';
import SalesSection from './SalesSection';
import SalesDynamicChart from './SalesDynamicChart';
import AverageMonthly from './AverageMonthly';
import { Search, ChevronDown } from 'lucide-react';

export default function DashboardHelper() {
  return (
     <div className="space-y-6 max-w-[1400px] mx-auto pb-10">
        {/* Header Actions */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
           <div className="flex items-center gap-4">
              {/* Optional extra header content */}
           </div>
           
           <div className="flex flex-wrap items-center gap-2">
              <label className="flex items-center gap-2 cursor-pointer bg-white px-3 py-1.5 rounded-full border border-gray-100 shadow-sm">
                 <div className="w-8 h-5 bg-gray-800 rounded-full relative transition-colors">
                    <div className="absolute left-1 top-1 w-3 h-3 bg-white rounded-full"></div>
                 </div>
                 <span className="text-xs font-bold text-gray-600">Timeframe</span>
              </label>
              <button className="bg-white border border-gray-100 px-3 py-1.5 rounded-full text-xs font-bold text-gray-700 flex items-center gap-2 shadow-sm">
                 Sep 1 – Nov 30, 2023 <ChevronDown className="w-3 h-3" />
              </button>
           </div>
        </div>

        <TopStats />
        
        {/* Middle Section: Filters, Charts, Sales Layout */}
        <div className="grid grid-cols-12 gap-6">
           {/* Left Column: Filters (2 cols normally, but let's say 3 in 12 grid) */}
           <div className="col-span-12 md:col-span-4 lg:col-span-3 h-full">
              <FiltersCard />
           </div>

           {/* Middle Column: Referrer Chart */}
           <div className="col-span-12 md:col-span-8 lg:col-span-4 h-full">
              <ReferrerChart />
           </div>

           {/* Right Column: Sales Section (Wide) */}
           <div className="col-span-12 lg:col-span-5 h-full">
              <SalesSection />
           </div>
        </div>

        {/* Bottom Section: Average Monthly & Dynamic Chart */}
        <div className="grid grid-cols-12 gap-6">
           {/* Average Monthly (Red Card) */}
           <div className="col-span-12 md:col-span-4 lg:col-span-3">
              <AverageMonthly />
           </div>

           {/* Sales Dynamic Chart */}
           <div className="col-span-12 md:col-span-8 lg:col-span-9">
              <SalesDynamicChart />
           </div>
        </div>
     </div>
  );
}
