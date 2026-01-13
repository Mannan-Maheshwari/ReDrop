import React from "react";
import { motion } from "framer-motion";
import { AlertTriangle, CheckCircle, Clock } from "lucide-react";
import { Progress } from "@/components/ui/progress";

export default function FilterCard({ filter, delay = 0 }) {
  const getStatusInfo = () => {
    if (filter.life_remaining >= 50) {
      return {
        color: "green",
        icon: CheckCircle,
        text: "Healthy",
        bgClass: "from-green-50 to-emerald-50",
        borderClass: "border-green-200",
        iconColor: "text-green-600"
      };
    } else if (filter.life_remaining >= 15) {
      return {
        color: "orange",
        icon: Clock,
        text: "Good",
        bgClass: "from-orange-50 to-amber-50",
        borderClass: "border-orange-200",
        iconColor: "text-orange-600"
      };
    } else {
      return {
        color: "red",
        icon: AlertTriangle,
        text: "Replace Soon",
        bgClass: "from-red-50 to-pink-50",
        borderClass: "border-red-200",
        iconColor: "text-red-600"
      };
    }
  };

  const statusInfo = getStatusInfo();
  const StatusIcon = statusInfo.icon;

  const filterNames = {
    sediment: "Sediment Filter",
    eco_carbon: "Eco-Carbon Filter",
    hybrid_ro: "Hybrid RO Membrane"
  };

  const filterDescriptions = {
    sediment: "Removes dirt, sand & large particles",
    eco_carbon: "Rice husk + Moringa + Bentonite",
    hybrid_ro: "TFC + Zeolite 13X + Graphene Oxide"
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      className={`bg-gradient-to-br ${statusInfo.bgClass} rounded-2xl shadow-lg border-2 ${statusInfo.borderClass} p-6 hover:shadow-xl transition-all duration-300`}
    >
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-lg font-bold text-gray-900 mb-1">
            {filterNames[filter.filter_type]}
          </h3>
          <p className="text-xs text-gray-600">{filterDescriptions[filter.filter_type]}</p>
        </div>
        <div className="p-2 rounded-xl bg-white shadow-sm">
          <StatusIcon className={`w-5 h-5 ${statusInfo.iconColor}`} />
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-700">Filter Life</span>
          <span className="text-lg font-bold text-gray-900">{filter.life_remaining}%</span>
        </div>
        <Progress value={filter.life_remaining} className="h-3" />
      </div>

      {/* Details */}
      <div className="space-y-2">
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-600">Last Replaced</span>
          <span className="font-medium text-gray-900">
            {new Date(filter.last_replaced).toLocaleDateString('en-US', { 
              month: 'short', 
              day: 'numeric', 
              year: 'numeric' 
            })}
          </span>
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-600">Water Processed</span>
          <span className="font-medium text-gray-900">{filter.total_water_processed} L</span>
        </div>
        {filter.estimated_replacement && (
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600">Next Replacement</span>
            <span className="font-medium text-gray-900">
              {new Date(filter.estimated_replacement).toLocaleDateString('en-US', { 
                month: 'short', 
                day: 'numeric' 
              })}
            </span>
          </div>
        )}
      </div>

      {/* Status Badge */}
      <div className="mt-4 pt-4 border-t border-gray-200">
        <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full ${
          statusInfo.color === 'green' 
            ? 'bg-green-100 text-green-700' 
            : statusInfo.color === 'orange'
              ? 'bg-orange-100 text-orange-700'
              : 'bg-red-100 text-red-700'
        }`}>
          <div className="w-2 h-2 rounded-full bg-current animate-pulse" />
          <span className="text-xs font-semibold">{statusInfo.text}</span>
        </div>
      </div>
    </motion.div>
  );
}