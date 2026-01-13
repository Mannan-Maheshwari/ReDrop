import React from "react";
import { ArrowRight, CheckCircle, Zap, Shield } from "lucide-react";

export default function TDSDisplay({ tdsInput = 500, tdsOutput = 25 }) {
  const reductionPercent = Math.round(((tdsInput - tdsOutput) / tdsInput) * 100);

  return (
    <div className="relative group">
      {/* Animated background */}
      <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-700 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500 animate-pulse-slow"></div>
      
      <div className="relative bg-gradient-to-br from-white/70 via-cyan-50/50 to-blue-50/50 dark:from-gray-800/70 dark:via-cyan-950/30 dark:to-blue-950/30 backdrop-blur-2xl rounded-3xl border border-white/40 dark:border-gray-700/40 p-8 shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 animate-fade-in">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h3 className="text-2xl font-black tracking-tight text-gray-900 dark:text-white mb-1">
              Purity Analysis
            </h3>
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
              Total Dissolved Solids
            </p>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-emerald-500/30 rounded-2xl blur-lg animate-pulse-slow"></div>
            <div className="relative flex items-center gap-2 px-4 py-2.5 bg-emerald-500/20 dark:bg-emerald-500/10 backdrop-blur-md rounded-2xl border border-emerald-500/30 shadow-lg">
              <CheckCircle className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
              <div>
                <p className="text-xs font-bold text-emerald-700 dark:text-emerald-400 uppercase tracking-wide">
                  {reductionPercent}% Cleaner
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* TDS Comparison */}
        <div className="grid grid-cols-[1fr,auto,1fr] gap-6 items-center mb-6">
          {/* Input - Contaminated */}
          <div className="relative group/input">
            <div className="absolute -inset-1 bg-gradient-to-br from-red-500 to-orange-600 rounded-2xl blur opacity-20 group-hover/input:opacity-30 transition-opacity"></div>
            <div className="relative text-center p-6 bg-gradient-to-br from-red-50/80 to-orange-50/80 dark:from-red-950/40 dark:to-orange-950/40 backdrop-blur-xl rounded-2xl border-2 border-red-200/50 dark:border-red-800/30 shadow-xl">
              <div className="flex items-center justify-center gap-2 mb-3">
                <Zap className="w-4 h-4 text-red-500" />
                <p className="text-[10px] font-black uppercase tracking-widest text-gray-600 dark:text-gray-400">
                  Input
                </p>
              </div>
              <p className="text-5xl font-black text-red-600 dark:text-red-400 mb-1">
                {tdsInput}
              </p>
              <p className="text-xs font-bold text-gray-500 dark:text-gray-400 mb-3">ppm</p>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-red-500/20 dark:bg-red-500/10 rounded-xl border border-red-500/30">
                <span className="text-[10px] font-bold text-red-700 dark:text-red-400 uppercase">
                  Not Safe
                </span>
              </div>
            </div>
          </div>

          {/* Filter Process */}
          <div className="flex flex-col items-center gap-3">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-500/30 rounded-full blur-xl animate-pulse-slow"></div>
              <div className="relative p-4 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl shadow-xl transform transition-transform duration-300 hover:scale-110 animate-slide-right">
                <ArrowRight className="w-6 h-6 text-white" />
              </div>
            </div>
            <div className="text-center">
              <Shield className="w-4 h-4 text-blue-500 mx-auto mb-1" />
              <p className="text-[10px] font-bold uppercase tracking-wider text-gray-600 dark:text-gray-400">
                RO Filter
              </p>
            </div>
          </div>

          {/* Output - Pure */}
          <div className="relative group/output">
            <div className="absolute -inset-1 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl blur opacity-20 group-hover/output:opacity-30 transition-opacity"></div>
            <div className="relative text-center p-6 bg-gradient-to-br from-cyan-50/80 to-blue-50/80 dark:from-cyan-950/40 dark:to-blue-950/40 backdrop-blur-xl rounded-2xl border-2 border-cyan-200/50 dark:border-cyan-800/30 shadow-xl">
              <div className="flex items-center justify-center gap-2 mb-3">
                <Shield className="w-4 h-4 text-cyan-500" />
                <p className="text-[10px] font-black uppercase tracking-widest text-gray-600 dark:text-gray-400">
                  Output
                </p>
              </div>
              <p className="text-5xl font-black text-cyan-600 dark:text-cyan-400 mb-1">
                {tdsOutput}
              </p>
              <p className="text-xs font-bold text-gray-500 dark:text-gray-400 mb-3">ppm</p>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-500/20 dark:bg-emerald-500/10 rounded-xl border border-emerald-500/30">
                <CheckCircle className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
                <span className="text-[10px] font-bold text-emerald-700 dark:text-emerald-400 uppercase">
                  Pure & Safe
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Summary */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl blur"></div>
          <div className="relative p-4 bg-white/50 dark:bg-gray-800/50 backdrop-blur-xl rounded-2xl border border-white/40 dark:border-gray-700/40">
            <p className="text-xs text-center font-semibold text-gray-700 dark:text-gray-300">
              <span className="font-black text-cyan-600 dark:text-cyan-400">TDS Reduction:</span>{" "}
              Optimal purification achieved • Safe for drinking
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
