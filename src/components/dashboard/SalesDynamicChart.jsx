import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Card } from '../ui/Card';
import { ArrowUpRight } from 'lucide-react';

const data = [
  { name: 'W1', value: 4000 },
  { name: 'W2', value: 3000 },
  { name: 'W3', value: 5000 },
  { name: 'W4', value: 2780 },
  { name: 'W5', value: 1890 },
  { name: 'W6', value: 2390 },
  { name: 'W7', value: 3490 },
  { name: 'W8', value: 4000 },
  { name: 'W9', value: 3000 },
  { name: 'W10', value: 2000 },
  { name: 'W11', value: 2780 },
];

export default function SalesDynamicChart() {
  return (
    <Card className="p-6 h-full flex flex-col">
       <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-sm font-bold text-gray-800">Sales dynamic</h3>
            <p className="text-xs text-gray-400 mt-1">
               <span className="w-2 h-2 rounded-full bg-pink-500 inline-block mr-1"></span> Sales trends
            </p>
          </div>
          <ArrowUpRight className="w-4 h-4 text-gray-400" />
       </div>

       <div className="flex-1 min-h-[200px]">
         <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
               <defs>
                  <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                     <stop offset="5%" stopColor="#ec4899" stopOpacity={0.1}/>
                     <stop offset="95%" stopColor="#ec4899" stopOpacity={0}/>
                  </linearGradient>
               </defs>
               <CartesianGrid vertical={false} stroke="#f3f4f6" />
               <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 10, fill: '#9ca3af'}} />
               <Tooltip />
               <Area 
                  type="monotone" 
                  dataKey="value" 
                  stroke="#ec4899" 
                  strokeWidth={2}
                  fillOpacity={1} 
                  fill="url(#colorSales)" 
               />
            </AreaChart>
         </ResponsiveContainer>
       </div>
       
       <div className="flex flex-wrap items-center gap-4 mt-4 border-t border-gray-100 pt-4">
           <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center">
                 <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Eren" alt="Eren" className="w-4 h-4 rounded-full"/>
              </div>
              <span className="text-xs font-bold text-gray-700">Eren Y.</span>
           </div>
           <div className="text-sm font-bold text-gray-800">$117,115</div>
           <div className="flex gap-2">
              <Badge val="22" bg="bg-black" text="text-white" />
              <Badge val="84" bg="bg-gray-100" text="text-gray-600" />
           </div>
           <div className="text-xs text-gray-500 font-medium">0.79</div>
           <div className="text-xs text-gray-500 font-medium">32%</div>
           <div className="flex gap-2">
              <Badge val="7" bg="bg-black" text="text-white" />
              <Badge val="15" bg="bg-white border" text="text-gray-600" />
           </div>
       </div>
    </Card>
  );
}

function Badge({ val, bg, text }) {
   return (
      <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${bg} ${text}`}>{val}</span>
   )
}
