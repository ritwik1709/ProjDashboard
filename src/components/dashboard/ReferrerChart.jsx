import { BarChart, Bar, ResponsiveContainer, Cell, XAxis } from 'recharts';
import { Filter } from 'lucide-react';
import { Card } from '../ui/Card';

const data = [
  { name: 'Be', value: 30, color: '#3b82f6' }, // Blue
  { name: 'Dr', value: 45, color: '#ec4899' }, // Pink
  { name: 'G', value: 15, color: '#22c55e' }, // Green
  { name: 'In', value: 25, color: '#f97316' }, // Orange
  { name: 'Tw', value: 20, color: '#64748b' }, // Gray
];

export default function ReferrerChart() {
  return (
    <Card className="p-5 h-full flex flex-col">
       <div className="flex justify-between items-center mb-6">
         <div className="flex items-center gap-2">
            <div className="p-1.5 bg-gray-100 rounded-md">
               <svg className="w-4 h-4 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 20V10M18 20V4M6 20v-6" /></svg>
            </div>
         </div>
         <button className="flex items-center gap-2 text-xs font-medium bg-gray-100 px-3 py-1.5 rounded-lg text-gray-600">
           Filters <Filter className="w-3 h-3" />
         </button>
      </div>

      <div className="flex-1 min-h-[150px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} barSize={36}>
             <XAxis dataKey="name" axisLine={false} tickLine={false} tick={false} height={0} />
             <Bar dataKey="value" radius={[8, 8, 8, 8]}>
               {data.map((entry, index) => (
                 <Cell key={`cell-${index}`} fill={entry.color} fillOpacity={0.2} stroke={entry.color} strokeWidth={2} />
               ))}
             </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-4">
         <h3 className="text-sm font-bold text-gray-700">Deals amount</h3>
         <p className="text-xs text-gray-400 flex items-center gap-1">
            by referrer category
            <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M6 9l6 6 6-6"/></svg>
         </p>
      </div>
    </Card>
  );
}
