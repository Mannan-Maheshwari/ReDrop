import React from "react";
import { TrendingUp, TrendingDown, Sparkles } from "lucide-react";

export default function StatCard({ 
  title, 
  value, 
  unit, 
  icon: Icon, 
  trend, 
  trendValue,
  color = "blue",
  delay = 0
}) {
  const colorConfig = {
    blue: {
      gradient: "from-cyan-500 via-blue-600 to-indigo-700",
      glow: "shadow-cyan-500/30",
      bg: "from-cyan-50/50 to-blue-50/50 dark:from-cyan-950/20 dark:to-blue-950/20",
      accent: "text-cyan-600 dark:text-cyan-400"
    },
    green: {
      gradient: "from-emerald-400 via-green-500 to-teal-600",
      glow: "shadow-emerald-500/30",
      bg: "from-emerald-50/50 to-green-50/50 dark:from-emerald-950/20 dark:to-green-950/20",
      accent: "text-emerald-600 dark:text-emerald-400"
    },
    purple: {
      gradient: "from-purple-400 via-pink-500 to-rose-600",
      glow: "shadow-purple-500/30",
      bg: "from-purple-50/50 to-pink-50/50 dark:from-purple-950/20 dark:to-pink-950/20",
      accent: "text-purple-600 dark:text-purple-400"
    },
    orange: {
      gradient: "from-amber-400 via-orange-500 to-red-600",
      glow: "shadow-orange-500/30",
      bg: "from-amber-50/50 to-orange-50/50 dark:from-amber-950/20 dark:to-orange-950/20",
      accent: "text-orange-600 dark:text-orange-400"
    },
  };

  const config = colorConfig[color];

  return (
    <div 
      className="relative group"
      style={{ animationDelay: `${delay}s` }}
    >
      {/* Animated background glow */}
      <div className={`absolute -inset-0.5 bg-gradient-to-br ${config.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 ${config.glow}`}></div>
      
      {/* Glassmorphic card */}
      <div className="relative bg-gradient-to-br from-white/60 to-white/40 dark:from-gray-800/60 dark:to-gray-900/40 backdrop-blur-2xl rounded-3xl border border-white/30 dark:border-gray-700/30 p-6 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] animate-fade-in">
        {/* Decorative corner accent */}
        <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${config.gradient} opacity-5 rounded-bl-full`}></div>
        
        <div className="relative">
          {/* Icon with floating effect */}
          <div className="flex items-start justify-between mb-6">
            <div className="relative">
              <div className={`absolute inset-0 bg-gradient-to-br ${config.gradient} rounded-2xl blur-lg opacity-40 animate-pulse-slow`}></div>
              <div className={`relative p-4 bg-gradient-to-br ${config.gradient} rounded-2xl shadow-lg transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                <Icon className="w-6 h-6 text-white relative z-10" />
              </div>
            </div>
            
            {/* Trend badge */}
            {trend && (
              <div className={`relative flex items-center gap-1.5 px-3 py-1.5 rounded-xl backdrop-blur-md border ${
                trend === "up" 
                  ? "bg-emerald-500/20 border-emerald-500/30 text-emerald-700 dark:text-emerald-400" 
                  : "bg-rose-500/20 border-rose-500/30 text-rose-700 dark:text-rose-400"
              }`}>
                {trend === "up" ? (
                  <TrendingUp className="w-3.5 h-3.5" />
                ) : (
                  <TrendingDown className="w-3.5 h-3.5" />
                )}
                <span className="text-xs font-bold">{trendValue}</span>
              </div>
            )}
          </div>

          {/* Content */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <p className="text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400 opacity-70">
                {title}
              </p>
              <Sparkles className={`w-3 h-3 ${config.accent} opacity-60`} />
            </div>
            
            <div className="flex items-baseline gap-2">
              <p className="text-4xl font-black bg-gradient-to-br from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                {value}
              </p>
              {unit && (
                <span className={`text-lg font-bold ${config.accent} opacity-80`}>{unit}</span>
              )}
            </div>
          </div>

          {/* Animated bottom border */}
          <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${config.gradient} rounded-b-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
        </div>
      </div>
    </div>
  );
}
