import React from "react";
import { Droplets, Activity, BarChart3, Settings } from "lucide-react";
import StatCard from "../components/dashboard/Statcard";
import WaterGauge from "../components/dashboard/Watergauge";
import TDSDisplay from "../components/dashboard/Tdsdisplay";
import TrendChart from "../components/dashboard/Trendchart";

export default function Dashboard() {
  const trendData = [
    { day: "Mon", purified: 120, reused: 80 },
    { day: "Tue", purified: 150, reused: 90 },
    { day: "Wed", purified: 130, reused: 85 },
    { day: "Thu", purified: 140, reused: 95 },
    { day: "Fri", purified: 160, reused: 100 },
    { day: "Sat", purified: 145, reused: 88 },
    { day: "Sun", purified: 135, reused: 92 },
  ];

  return (
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      {/* Hero Section */}
      <div className="mb-12 relative">
        <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/10 to-indigo-500/10 rounded-3xl blur-2xl"></div>
        <div className="relative">
          <h1 className="text-5xl md:text-6xl font-black mb-4 bg-gradient-to-r from-gray-900 via-cyan-600 to-indigo-600 dark:from-white dark:via-cyan-400 dark:to-indigo-400 bg-clip-text text-transparent">
            Dashboard
          </h1>
          <p className="text-lg font-semibold text-gray-700 dark:text-gray-300">
            Real-time monitoring of your ReDrop RO system
          </p>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard
          title="Daily Purified"
          value="145"
          unit="L"
          icon={Droplets}
          trend="up"
          trendValue="+12%"
          color="blue"
          delay={0.1}
        />
        <StatCard
          title="Water Reused"
          value="92"
          unit="L"
          icon={Activity}
          trend="up"
          trendValue="+8%"
          color="green"
          delay={0.2}
        />
        <StatCard
          title="Filter Life"
          value="78"
          unit="%"
          icon={BarChart3}
          trend="down"
          trendValue="-2%"
          color="orange"
          delay={0.3}
        />
        <StatCard
          title="Energy Saved"
          value="24"
          unit="kWh"
          icon={Settings}
          trend="up"
          trendValue="+5%"
          color="purple"
          delay={0.4}
        />
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <WaterGauge currentLevel={3.5} maxLevel={5} />
        <TDSDisplay tdsInput={500} tdsOutput={25} />
      </div>

    </div>
  );
}
