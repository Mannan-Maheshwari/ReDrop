import React from "react";
import { motion } from "framer-motion";
import { Award, Lock } from "lucide-react";

export default function AchievementBadge({ achievement, index }) {
  const badgeColors = {
    water_saver: "from-blue-500 to-cyan-500",
    eco_warrior: "from-green-500 to-emerald-500",
    early_adopter: "from-purple-500 to-pink-500",
    maintenance_pro: "from-orange-500 to-amber-500",
    tree_equivalent: "from-green-600 to-lime-500"
  };

  const color = badgeColors[achievement.badge_type] || "from-gray-400 to-gray-500";

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.1 }}
      className={`relative ${
        achievement.unlocked
          ? "bg-white border-2 shadow-lg"
          : "bg-gray-50 border border-gray-300 opacity-60"
      } rounded-xl p-4 hover:shadow-xl transition-all duration-300`}
    >
      {!achievement.unlocked && (
        <div className="absolute top-2 right-2">
          <Lock className="w-4 h-4 text-gray-400" />
        </div>
      )}

      <div
        className={`w-16 h-16 mx-auto mb-3 rounded-full bg-gradient-to-br ${
          achievement.unlocked ? color : "from-gray-300 to-gray-400"
        } flex items-center justify-center shadow-lg`}
      >
        <Award className="w-8 h-8 text-white" />
      </div>

      <h3 className="text-sm font-bold text-gray-900 text-center mb-1">
        {achievement.title}
      </h3>
      <p className="text-xs text-gray-600 text-center mb-3">
        {achievement.description}
      </p>

      {achievement.unlocked ? (
        <div className="text-xs text-center font-medium text-green-600">
          Unlocked! 🎉
        </div>
      ) : (
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className={`h-2 rounded-full bg-gradient-to-r ${color}`}
            style={{
              width: `${Math.min(
                (achievement.progress / achievement.requirement) * 100,
                100
              )}%`
            }}
          />
        </div>
      )}
    </motion.div>
  );
}