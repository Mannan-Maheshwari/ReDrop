import React from "react";
import { Droplet, Waves } from "lucide-react";

export default function WaterGauge({ currentLevel, maxLevel = 5 }) {
  const percentage = Math.min((currentLevel / maxLevel) * 100, 100);
  
  const getWaterColor = () => {
    if (percentage >= 70) return "from-cyan-400 via-blue-500 to-indigo-600";
    if (percentage >= 30) return "from-amber-400 via-orange-500 to-red-500";
    return "from-red-400 via-rose-500 to-pink-600";
  };

  const getStatusInfo = () => {
    if (percentage >= 70) return { 
      text: "Optimal", 
      emoji: "💧",
      glow: "shadow-cyan-500/50"
    };
    if (percentage >= 30) return { 
      text: "Refilling", 
      emoji: "⚡",
      glow: "shadow-orange-500/50"
    };
    return { 
      text: "Low", 
      emoji: "⚠️",
      glow: "shadow-red-500/50"
    };
  };

  const status = getStatusInfo();

  return (
    <div className="relative group">
      {/* Glassmorphic background with blur */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-white/10 dark:from-gray-900/40 dark:to-gray-800/10 backdrop-blur-2xl rounded-3xl border border-white/20 dark:border-gray-700/30 shadow-2xl"></div>
      
      <div className="relative p-8">
        {/* Header with floating badge */}
        <div className="flex items-start justify-between mb-8">
          <div className="relative">
            <h3 className="text-2xl font-black tracking-tight text-gray-900 dark:text-white mb-1">
              Tank Level
            </h3>
            <div className="absolute -top-2 -right-12 w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-full blur-xl opacity-30 animate-pulse"></div>
          </div>
          <div className="relative">
            <div className="flex items-center gap-2 px-4 py-2 bg-white/60 dark:bg-gray-800/60 backdrop-blur-md rounded-2xl border border-white/30 dark:border-gray-700/30 shadow-lg">
              <Droplet className="w-5 h-5 text-cyan-500" />
              <span className="text-sm font-bold text-gray-900 dark:text-white">
                {currentLevel.toFixed(1)}<span className="text-xs opacity-70">/{maxLevel}L</span>
              </span>
            </div>
          </div>
        </div>

        {/* Tank visualization with 3D effect */}
        <div className="relative">
          {/* Outer glow */}
          <div className={`absolute -inset-4 bg-gradient-to-br ${getWaterColor()} rounded-3xl blur-2xl opacity-20 ${status.glow} transition-all duration-1000`}></div>
          
          {/* Tank container with glass effect */}
          <div className="relative h-80 bg-gradient-to-b from-gray-100/50 to-gray-200/30 dark:from-gray-800/50 dark:to-gray-900/30 backdrop-blur-sm rounded-[2.5rem] border-4 border-white/40 dark:border-gray-700/40 overflow-hidden shadow-2xl">
            {/* Water level with animated gradient */}
            <div
              className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t ${getWaterColor()} transition-all duration-[2000ms] ease-out`}
              style={{ height: `${percentage}%` }}
            >
              {/* Animated waves */}
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-4 left-0 right-0 h-8 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-wave-slow"></div>
                <div className="absolute -top-8 left-0 right-0 h-12 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-wave-medium" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute -top-12 left-0 right-0 h-16 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-wave-fast" style={{ animationDelay: '1s' }}></div>
              </div>
              
              {/* Shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
            </div>

            {/* Center display with floating effect */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="text-center transform transition-all duration-500 hover:scale-110">
                <div className="relative">
                  <div className="absolute inset-0 bg-white/20 dark:bg-gray-900/20 backdrop-blur-xl rounded-3xl -inset-4"></div>
                  <div className="relative px-8 py-6">
                    <p className="text-7xl font-black bg-gradient-to-br from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-2">
                      {Math.round(percentage)}<span className="text-4xl">%</span>
                    </p>
                    <div className="flex items-center justify-center gap-2 mt-2">
                      <Waves className="w-5 h-5 text-cyan-500" />
                      <p className="text-xs font-bold uppercase tracking-wider text-gray-600 dark:text-gray-400">
                        Capacity
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Measurement markers with glow */}
            {[25, 50, 75].map((mark) => (
              <div
                key={mark}
                className="absolute left-0 right-0"
                style={{ bottom: `${mark}%` }}
              >
                <div className="relative">
                  <div className="absolute left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-gray-400/50 to-transparent"></div>
                  <div className="absolute -left-12 -top-2.5 w-8 h-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-full border border-gray-300/50 dark:border-gray-600/50 flex items-center justify-center shadow-lg">
                    <span className="text-[10px] font-bold text-gray-700 dark:text-gray-300">{mark}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Status badge with animated glow */}
        <div className="mt-8 flex justify-center">
          <div className={`relative inline-flex items-center gap-3 px-6 py-3 bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl rounded-2xl border border-white/40 dark:border-gray-700/40 shadow-xl ${status.glow}`}>
            <div className="text-2xl animate-bounce-slow">{status.emoji}</div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">Status</p>
              <p className="text-base font-black text-gray-900 dark:text-white">{status.text}</p>
            </div>
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
