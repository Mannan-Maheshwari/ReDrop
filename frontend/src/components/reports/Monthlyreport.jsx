import React from "react";
import { motion } from "framer-motion";
import { Droplets, DollarSign, Leaf, TrendingUp } from "lucide-react";

export default function MonthlyReport({ data }) {
  const stats = [
    {
      icon: Droplets,
      label: "Water Saved",
      value: `${data.waterSaved} L`,
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50"
    },
    {
      icon: DollarSign,
      label: "Cost Saved",
      value: `₹${data.costSaved}`,
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50"
    },
    {
      icon: Leaf,
      label: "CO₂ Reduced",
      value: `${data.co2Reduced} kg`,
      color: "from-orange-500 to-amber-500",
      bgColor: "bg-orange-50"
    },
    {
      icon: TrendingUp,
      label: "Recovery Rate",
      value: `${data.recoveryRate}%`,
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50"
    }
  ];

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Monthly Report</h2>
        <span className="text-sm font-medium text-gray-500">{data.month}</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`${stat.bgColor} rounded-xl p-4 border border-gray-200`}
          >
            <div className={`p-2 rounded-lg bg-gradient-to-br ${stat.color} w-fit mb-3`}>
              <stat.icon className="w-5 h-5 text-white" />
            </div>
            <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
            <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
          </motion.div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-green-50 rounded-xl border border-blue-200">
        <p className="text-sm text-gray-700">
          <span className="font-semibold">Great progress!</span> You've saved the equivalent of{" "}
          <span className="font-bold text-green-600">{Math.round(data.waterSaved / 150)} days</span> of drinking water for one person.
        </p>
      </div>
    </div>
  );
}