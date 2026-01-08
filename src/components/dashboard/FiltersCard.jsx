import { Filter } from 'lucide-react';
import { Card } from '../ui/Card';

export default function FiltersCard() {
  const platforms = [
    { name: 'Dribbble', value: '$227,459', percent: '43%', color: 'text-pink-500', bg: 'bg-pink-100' },
    { name: 'Instagram', value: '$142,823', percent: '27%', color: 'text-orange-500', bg: 'bg-orange-100' },
    { name: 'Behance', value: '$89,935', percent: '11%', color: 'text-blue-500', bg: 'bg-blue-100' },
    { name: 'Google', value: '$37,028', percent: '7%', color: 'text-green-500', bg: 'bg-green-100' },
  ];

  return (
    <Card className="p-5 h-full">
      <div className="flex justify-between items-center mb-6">
         <div className="p-2 bg-gray-100 rounded-lg">
           <Filter className="w-4 h-4 text-gray-600" />
         </div>
         <button className="flex items-center gap-2 text-xs font-medium bg-gray-100 px-3 py-1.5 rounded-lg text-gray-600">
           Filters <Filter className="w-3 h-3" />
         </button>
      </div>

      <div className="space-y-4">
         {platforms.map((p) => (
           <div key={p.name} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                 <div className={`w-8 h-8 rounded-full flex items-center justify-center ${p.bg} ${p.color} font-bold text-xs`}>
                    {p.name[0]}
                 </div>
                 <span className="text-sm font-medium text-gray-600">{p.name}</span>
              </div>
              <div className="flex items-center gap-3">
                 <span className="text-sm font-bold text-gray-900">{p.value}</span>
                 <span className="text-xs font-medium text-gray-500 bg-gray-100 px-1.5 py-0.5 rounded">{p.percent}</span>
              </div>
           </div>
         ))}
      </div>
    </Card>
  );
}
