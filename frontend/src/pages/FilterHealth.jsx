import React from "react";
import { AlertTriangle, Wrench, CheckCircle, Clock } from "lucide-react";

export default function FilterHealth() {
  const filters = [
    {
      type: "Sediment Filter",
      lifeRemaining: 78,
      status: "healthy",
      lastReplaced: "2 months ago",
      nextReplacement: "4 months",
      waterProcessed: "1,240L"
    },
    {
      type: "Eco Carbon Filter",
      lifeRemaining: 42,
      status: "good",
      lastReplaced: "4 months ago",
      nextReplacement: "3 months",
      waterProcessed: "2,180L"
    },
    {
      type: "Hybrid RO Membrane",
      lifeRemaining: 12,
      status: "critical",
      lastReplaced: "11 months ago",
      nextReplacement: "14 days",
      waterProcessed: "3,560L"
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "healthy":
        return "from-emerald-500 to-teal-600";
      case "good":
        return "from-cyan-500 to-blue-600";
      case "critical":
        return "from-red-500 to-orange-600";
      default:
        return "from-gray-500 to-gray-600";
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "healthy":
        return <CheckCircle className="w-5 h-5" />;
      case "good":
        return <Clock className="w-5 h-5" />;
      case "critical":
        return <AlertTriangle className="w-5 h-5" />;
      default:
        return <Wrench className="w-5 h-5" />;
    }
  };

  const criticalFilters = filters.filter(f => f.status === "critical");

  return (
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      {/* Hero Section */}
      <div className="mb-12 relative">
        <div className="absolute -inset-4 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-3xl blur-2xl"></div>
        <div className="relative">
          <h1 className="text-5xl md:text-6xl font-black mb-4 bg-gradient-to-r from-gray-900 via-orange-600 to-red-600 dark:from-white dark:via-orange-400 dark:to-red-400 bg-clip-text text-transparent">
            Filter Health
          </h1>
          <p className="text-lg font-semibold text-gray-700 dark:text-gray-300">
            Monitor and maintain your filtration system
          </p>
        </div>
      </div>

      {/* Critical Alert */}
      {criticalFilters.length > 0 && (
        <div className="mb-8 relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-red-500 to-orange-600 rounded-3xl blur opacity-30 group-hover:opacity-50 transition-opacity"></div>
          <div className="relative bg-gradient-to-br from-white/70 to-red-50/50 dark:from-gray-800/70 dark:to-red-950/30 backdrop-blur-xl rounded-3xl border border-red-200/50 dark:border-red-800/30 p-6 shadow-xl">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-red-500/20 dark:bg-red-500/10 rounded-2xl">
                <AlertTriangle className="w-6 h-6 text-red-600 dark:text-red-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-black text-gray-900 dark:text-white mb-2">
                  Immediate Action Required
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  {criticalFilters.length} filter{criticalFilters.length > 1 ? 's need' : ' needs'} immediate replacement. 
                  Schedule maintenance soon to ensure optimal water quality.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Filter Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {filters.map((filter, index) => (
          <div key={index} className="relative group">
            <div className={`absolute -inset-0.5 bg-gradient-to-br ${getStatusColor(filter.status)} rounded-3xl blur opacity-20 group-hover:opacity-30 transition-opacity`}></div>
            <div className="relative bg-gradient-to-br from-white/60 to-white/40 dark:from-gray-800/60 dark:to-gray-900/40 backdrop-blur-2xl rounded-3xl border border-white/30 dark:border-gray-700/30 p-6 shadow-xl hover:shadow-2xl transition-all duration-500">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-xl font-black text-gray-900 dark:text-white mb-1">
                    {filter.type}
                  </h3>
                  <p className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                    {filter.status}
                  </p>
                </div>
                <div className={`p-3 bg-gradient-to-br ${getStatusColor(filter.status)} rounded-2xl shadow-lg`}>
                  {getStatusIcon(filter.status)}
                </div>
              </div>

              {/* Life Remaining */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-bold text-gray-600 dark:text-gray-400">Life Remaining</span>
                  <span className="text-2xl font-black text-gray-900 dark:text-white">{filter.lifeRemaining}%</span>
                </div>
                <div className="relative h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div
                    className={`absolute inset-y-0 left-0 bg-gradient-to-r ${getStatusColor(filter.status)} transition-all duration-1000`}
                    style={{ width: `${filter.lifeRemaining}%` }}
                  ></div>
                </div>
              </div>

              {/* Details */}
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600 dark:text-gray-400 font-medium">Last Replaced</span>
                  <span className="text-gray-900 dark:text-white font-bold">{filter.lastReplaced}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600 dark:text-gray-400 font-medium">Next Replacement</span>
                  <span className="text-gray-900 dark:text-white font-bold">{filter.nextReplacement}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600 dark:text-gray-400 font-medium">Water Processed</span>
                  <span className="text-gray-900 dark:text-white font-bold">{filter.waterProcessed}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Maintenance History */}
      <div className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/10 to-indigo-500/10 rounded-3xl blur"></div>
        <div className="relative bg-gradient-to-br from-white/60 to-white/40 dark:from-gray-800/60 dark:to-gray-900/40 backdrop-blur-2xl rounded-3xl border border-white/30 dark:border-gray-700/30 p-8 shadow-xl">
          <h2 className="text-2xl font-black text-gray-900 dark:text-white mb-6">Maintenance History</h2>
          <div className="space-y-4">
            {[
              { date: "2026-01-05", type: "Sediment Filter", cost: "₹450", technician: "Ayush Bindal" },
              { date: "2025-12-20", type: "Eco Carbon Filter", cost: "₹850", technician: "Amit Sharma" },
              { date: "2025-11-10", type: "Hybrid RO Membrane", cost: "₹1,500", technician: "Tushar Goel" }
            ].map((record, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-white/50 dark:bg-gray-800/50 rounded-2xl border border-gray-200/50 dark:border-gray-700/50">
                <div>
                  <p className="font-black text-gray-900 dark:text-white">{record.type}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{record.date} • {record.technician}</p>
                </div>
                <div className="text-right">
                  <p className="font-black text-gray-900 dark:text-white">{record.cost}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
