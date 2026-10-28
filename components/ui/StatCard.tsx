interface StatCardProps {
  value: number;
  label: string;
}

export default function StatCard({ value, label }: StatCardProps) {
  return (
    <div className="bg-container flex items-center gap-4 p-4 rounded-md">
      <p className="text-xl lg:text-2xl font-bold">{value}</p>
      <p>{label}</p>
    </div>
  );
}
