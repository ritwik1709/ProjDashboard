export default function AverageMonthly() {
  return (
    <div className="bg-[#de3255] rounded-2xl p-6 text-white h-full relative overflow-hidden flex flex-col justify-between">
       {/* Background decoration */}
       <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

       <div className="relative z-10 space-y-6">
          <div className="flex items-center gap-2 mb-2">
             <div className="p-1.5 bg-white/20 rounded-lg backdrop-blur-sm">
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
             </div>
             <span className="text-xs font-medium text-white/80 uppercase tracking-wide">Average monthly</span>
          </div>

          <div className="space-y-4">
             <div>
                <span className="text-xs text-white/60 block mb-1">Revenue</span>
                <span className="text-xl font-bold block">$18,552</span>
             </div>
             
             <div>
                <span className="bg-white/20 text-white text-xs font-bold px-2 py-0.5 rounded mr-2">$6,901</span>
                <span className="text-xs text-white/60">Leads</span>
                <div className="flex items-baseline gap-1 mt-1">
                   <span className="text-lg font-bold">373</span>
                   <span className="text-xs text-white/60">97/276</span>
                </div>
             </div>

             <div>
                <span className="text-xs text-white/60 block mb-1">Win/loss</span>
                <span className="text-lg font-bold block">16% <span className="text-xs font-normal text-white/60">51/318</span></span>
             </div>
          </div>
       </div>

       {/* Bar Charts at bottom */}
       <div className="mt-8 flex items-end justify-between gap-2 h-24">
          <Bar h="h-10" />
          <Bar h="h-14" label="$11,035" />
          <Bar h="h-8" />
          <Bar h="h-16" label="$9,288" highlight />
          <Bar h="h-12" />
          <Bar h="h-20" />
       </div>
    </div>
  );
}

function Bar({ h, label, highlight }) {
   return (
      <div className="flex flex-col items-center gap-1 group w-full">
         {label && (
            <span className="text-[10px] bg-white text-pink-600 font-bold px-1 rounded opacity-0 group-hover:opacity-100 transition-opacity mb-1 whitespace-nowrap">{label}</span>
         )}
         <div className={`w-full ${h} ${highlight ? 'bg-white/40' : 'bg-white/20'} rounded-t-sm hover:bg-white/60 transition-colors`}></div>
      </div>
   )
}
