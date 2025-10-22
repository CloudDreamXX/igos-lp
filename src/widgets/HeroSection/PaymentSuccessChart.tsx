import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { name: 'Jan', purple: 1500000, yellow: 800000 },
  { name: 'Feb', purple: 2800000, yellow: 1200000 },
  { name: 'Mar', purple: 3400000, yellow: 1600000 },
  { name: 'Apr', purple: 2200000, yellow: 1400000 },
  { name: 'May', purple: 2600000, yellow: 1500000 },
];

export const PaymentSuccessChart = () => {
  return (
    <div className="bg-[#1F1F1F] rounded-xl p-6 w-full max-w-[324px] h-[224px]">
      <h3 className="text-[#E3E3E3] text-[9px] font-normal mb-4">Payment success rate</h3>

      <ResponsiveContainer width="100%" height="85%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#2C2C2C" />
          <XAxis
            dataKey="name"
            stroke="#888888"
            tick={{ fill: '#A3A3A3', fontSize: 14 }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            tickFormatter={(value) => `${value / 1000000}m`}
            stroke="#888888"
            tick={{ fill: '#A3A3A3', fontSize: 14 }}
            axisLine={false}
            tickLine={false}
            domain={[0, 4000000]}
          />

          <Line
            type="monotone"
            dataKey="purple"
            stroke="#B9A3FF"
            strokeWidth={2}
            dot={{ fill: '#B9A3FF', r: 5, strokeWidth: 0 }}
            activeDot={{ r: 6 }}
          />
          <Line
            type="monotone"
            dataKey="yellow"
            stroke="#F5E48B"
            strokeWidth={2}
            dot={{ fill: '#F5E48B', r: 5, strokeWidth: 0 }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
