import { cn } from '../../lib/utils';

export function Card({ children, className }) {
  return (
    <div className={cn("bg-white p-4 rounded-2xl shadow-sm border border-gray-100", className)}>
      {children}
    </div>
  );
}
