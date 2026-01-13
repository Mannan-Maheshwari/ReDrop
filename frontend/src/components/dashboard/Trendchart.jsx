import React from "react";
import { TrendingUp, Activity } from "lucide-react";

export default function TrendChart({ data = [], title = "Water Usage Trend" }) {
  const chartData = data.length > 0 ? data : [
    { day: "Mon", purified: 120, reused: 80 },
    { day: "Tue", purified: 150, reused: 90 },
    { day: "Wed", purified: 130, reused: 85 },
    { day: "Thu", purified: 140, reused: 95 },
    { day: "Fri", purified: 160, reused: 100 },
    { day: "Sat", purified: 145, reused: 88 },
    { day: "Sun", purified: 135, reused: 92 },
  ];

  const maxValue = Math.max(
    ...chartData.flatMap(d => [d.purified || 0, d.reused || 0])
  ) || 200;

  const chartHeight = 320;
  const chartWidth = 100;
  const padding = { top: 30, right: 20, bottom: 40, left: 50 };
  const graphHeight = chartHeight - padding.top - padding.bottom;
  const graphWidth = chartWidth - padding.left - padding.right;

  const getY = (value) => {
    return graphHeight - (value / maxValue) * graphHeight;
  };

  const getX = (index) => {
    return (index / (chartData.length - 1)) * graphWidth;
  };

  const generatePath = (dataKey) => {
    const points = chartData.map((d, i) => {
      const x = getX(i);
      const y = getY(d[dataKey] || 0);
      return `${i === 0 ? 'M' : 'L'} ${x} ${y}`;
    }).join(' ');

    const lastPoint = chartData.length - 1;
    const lastX = getX(lastPoint);
    const lastY = getY(chartData[lastPoint][dataKey] || 0);

    return `${points} L ${lastX} ${graphHeight} L 0 ${graphHeight} Z`;
  };

  return (
    <div className="relative group">
      {/* Animated background glow */}
      <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-700 rounded-3xl blur-2xl opacity-10 group-hover:opacity-20 transition-opacity duration-500"></div>
      
      <div className="relative bg-gradient-to-br from-white/60 to-white/40 dark:from-gray-800/60 dark:to-gray-900/40 backdrop-blur-2xl rounded-3xl border border-white/30 dark:border-gray-700/30 p-8 shadow-2xl hover:shadow-cyan-500/10 transition-all duration-500 animate-fade-in">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h3 className="text-2xl font-black tracking-tight text-gray-900 dark:text-white mb-1">
              {title}
            </h3>
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
              Weekly Analysis
            </p>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 dark:from-cyan-500/10 dark:to-blue-500/10 backdrop-blur-md rounded-2xl border border-cyan-500/30 dark:border-cyan-500/20">
            <Activity className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
            <span className="text-xs font-bold text-cyan-700 dark:text-cyan-400 uppercase">Live</span>
          </div>
        </div>

        {/* Chart Container */}
        <div className="relative w-full" style={{ height: `${chartHeight}px` }}>
          <svg
            viewBox={`0 0 ${chartWidth} ${chartHeight}`}
            className="w-full h-full"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="purifiedGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.4" />
                <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="reusedGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#10b981" stopOpacity="0.4" />
                <stop offset="50%" stopColor="#14b8a6" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>

            {/* Grid lines with glow */}
            {[0, 25, 50, 75, 100].map((percent) => {
              const y = (percent / 100) * graphHeight;
              return (
                <g key={percent}>
                  <line
                    x1={padding.left}
                    y1={padding.top + y}
                    x2={padding.left + graphWidth}
                    y2={padding.top + y}
                    stroke="currentColor"
                    strokeWidth="0.5"
                    strokeDasharray="3 3"
                    className="text-gray-200 dark:text-gray-700"
                  />
                </g>
              );
            })}

            {/* Area for reused water */}
            <path
              d={generatePath('reused')}
              fill="url(#reusedGradient)"
              transform={`translate(${padding.left}, ${padding.top})`}
              className="animate-fade-in"
              style={{ animationDelay: '0.2s' }}
            />

            {/* Area for purified water */}
            <path
              d={generatePath('purified')}
              fill="url(#purifiedGradient)"
              transform={`translate(${padding.left}, ${padding.top})`}
              className="animate-fade-in"
              style={{ animationDelay: '0.1s' }}
            />

            {/* Line for reused water with glow */}
            <path
              d={generatePath('reused').replace(/ L \d+ \d+ Z$/, '')}
              fill="none"
              stroke="#10b981"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              transform={`translate(${padding.left}, ${padding.top})`}
              className="animate-draw-line"
              filter="url(#glow)"
            />

            {/* Line for purified water with glow */}
            <path
              d={generatePath('purified').replace(/ L \d+ \d+ Z$/, '')}
              fill="none"
              stroke="#06b6d4"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              transform={`translate(${padding.left}, ${padding.top})`}
              className="animate-draw-line"
              filter="url(#glow)"
            />

            {/* Data points with animated appearance */}
            {chartData.map((d, i) => {
              const x = padding.left + getX(i);
              const yPurified = padding.top + getY(d.purified || 0);
              const yReused = padding.top + getY(d.reused || 0);
              return (
                <g key={i}>
                  <circle
                    cx={x}
                    cy={yPurified}
                    r="4"
                    fill="#06b6d4"
                    className="animate-scale-in"
                    style={{ animationDelay: `${0.3 + i * 0.1}s` }}
                  >
                    <animate attributeName="r" values="4;6;4" dur="2s" repeatCount="indefinite" />
                  </circle>
                  <circle
                    cx={x}
                    cy={yReused}
                    r="4"
                    fill="#10b981"
                    className="animate-scale-in"
                    style={{ animationDelay: `${0.35 + i * 0.1}s` }}
                  >
                    <animate attributeName="r" values="4;6;4" dur="2s" repeatCount="indefinite" begin={`${0.5 + i * 0.1}s`} />
                  </circle>
                </g>
              );
            })}

            {/* X-axis labels */}
            {chartData.map((d, i) => {
              const x = padding.left + getX(i);
              return (
                <g key={i}>
                  <line
                    x1={x}
                    y1={chartHeight - padding.bottom}
                    x2={x}
                    y2={chartHeight - padding.bottom + 5}
                    stroke="currentColor"
                    strokeWidth="1"
                    className="text-gray-400 dark:text-gray-600"
                  />
                  <text
                    x={x}
                    y={chartHeight - padding.bottom + 18}
                    textAnchor="middle"
                    className="text-xs font-bold fill-gray-600 dark:fill-gray-400"
                  >
                    {d.day}
                  </text>
                </g>
              );
            })}

            {/* Y-axis labels */}
            {[0, 25, 50, 75, 100].map((percent) => {
              const value = Math.round((percent / 100) * maxValue);
              const y = padding.top + (percent / 100) * graphHeight;
              return (
                <text
                  key={percent}
                  x={padding.left - 15}
                  y={y + 4}
                  textAnchor="end"
                  className="text-xs font-bold fill-gray-500 dark:fill-gray-500"
                >
                  {value}
                </text>
              );
            })}
          </svg>
        </div>

        {/* Legend */}
        <div className="flex items-center justify-center gap-8 mt-8">
          <div className="flex items-center gap-3 group/legend">
            <div className="relative">
              <div className="absolute inset-0 bg-cyan-500/30 rounded-full blur"></div>
              <div className="relative w-4 h-4 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-full"></div>
            </div>
            <span className="text-sm font-bold text-gray-700 dark:text-gray-300">Purified Water</span>
          </div>
          <div className="flex items-center gap-3 group/legend">
            <div className="relative">
              <div className="absolute inset-0 bg-emerald-500/30 rounded-full blur"></div>
              <div className="relative w-4 h-4 bg-gradient-to-br from-emerald-400 to-teal-600 rounded-full"></div>
            </div>
            <span className="text-sm font-bold text-gray-700 dark:text-gray-300">Reused Water</span>
          </div>
        </div>
      </div>
    </div>
  );
}
