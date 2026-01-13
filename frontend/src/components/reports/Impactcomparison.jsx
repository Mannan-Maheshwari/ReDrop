import React from "react";
import { motion } from "framer-motion";
import { TreePine, Zap, Car } from "lucide-react";

export default function ImpactComparison({ co2Saved }) {
  const comparisons = [
    {
      icon: TreePine,
      value: Math.round(co2Saved / 20),
      unit: "trees",
      label: "Trees Planted Equivalent",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Zap,
      value: Math.round(co2Saved * 120),
      unit: "kWh",
      label: "Energy Saved Equivalent",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Car,
      value: Math.round(co2Saved * 4.5),
      unit: "km",
      label: "Car Travel Offset",
      color: "from-blue-500 to-cyan-500"
    }
  ];

  return (
    <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl shadow-lg border-2 border-green-200 p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-2">Environmental Impact</h2>
      <p className="text-sm text-gray-600 mb-6">Your contribution to sustainability</p>

      <div className="space-y-4">
        {comparisons.map((item, index) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.15 }}
            className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm"
          >
            <div className={`p-3 rounded-xl bg-gradient-to-br ${item.color}`}>
              <item.icon className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <p className="text-sm text-gray-600">{item.label}</p>
              <p className="text-2xl font-bold text-gray-900">
                {item.value} <span className="text-lg font-medium text-gray-600">{item.unit}</span>
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}