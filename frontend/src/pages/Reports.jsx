import React from "react";
import { Users, Trophy, TrendingUp, Leaf, Award } from "lucide-react";

export default function Reports() {
  const monthlyData = {
    waterSaved: 1240,
    costSaved: 850,
    co2Reduced: 12.5,
    recoveryRate: 65
  };

  const communityStats = {
    yourUsage: 1240,
    avgUsage: 380,
    topUser: 620
  };

  const achievements = [
    { title: "First 100L Saved", unlocked: true, progress: 100, emoji: "💧" },
    { title: "Eco Warrior", unlocked: false, progress: 65, emoji: "🌱" },
    { title: "Tree Equivalent", unlocked: false, progress: 68, emoji: "🌳" },
    { title: "Early Adopter", unlocked: true, progress: 100, emoji: "⭐" },
    { title: "Maintenance Pro", unlocked: false, progress: 33, emoji: "🔧" }
  ];

  const percentBetterThanAvg = Math.round(
    ((communityStats.yourUsage - communityStats.avgUsage) / communityStats.avgUsage) * 100
  );

  return (
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      {/* Hero Section */}
      <div className="mb-12 relative">
        <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-3xl blur-2xl"></div>
        <div className="relative">
          <h1 className="text-5xl md:text-6xl font-black mb-4 bg-gradient-to-r from-gray-900 via-purple-600 to-pink-600 dark:from-white dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
            Reports & Insights
          </h1>
          <p className="text-lg font-semibold text-gray-700 dark:text-gray-300">
            Track your sustainability journey and achievements
          </p>
        </div>
      </div>

      {/* Monthly Report */}
      <div className="mb-8 relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-indigo-600 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
        <div className="relative bg-gradient-to-br from-white/60 to-white/40 dark:from-gray-800/60 dark:to-gray-900/40 backdrop-blur-2xl rounded-3xl border border-white/30 dark:border-gray-700/30 p-8 shadow-xl">
          <h2 className="text-2xl font-black text-gray-900 dark:text-white mb-6">
            {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })} Report
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-4 bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-950/30 dark:to-blue-950/30 rounded-2xl border border-cyan-200/50 dark:border-cyan-800/30">
              <p className="text-sm font-bold text-gray-600 dark:text-gray-400 mb-2">Water Saved</p>
              <p className="text-3xl font-black text-cyan-600 dark:text-cyan-400">{monthlyData.waterSaved}L</p>
            </div>
            <div className="text-center p-4 bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-950/30 dark:to-green-950/30 rounded-2xl border border-emerald-200/50 dark:border-emerald-800/30">
              <p className="text-sm font-bold text-gray-600 dark:text-gray-400 mb-2">Cost Saved</p>
              <p className="text-3xl font-black text-emerald-600 dark:text-emerald-400">₹{monthlyData.costSaved}</p>
            </div>
            <div className="text-center p-4 bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950/30 dark:to-amber-950/30 rounded-2xl border border-orange-200/50 dark:border-orange-800/30">
              <p className="text-sm font-bold text-gray-600 dark:text-gray-400 mb-2">CO₂ Reduced</p>
              <p className="text-3xl font-black text-orange-600 dark:text-orange-400">{monthlyData.co2Reduced}kg</p>
            </div>
            <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 rounded-2xl border border-purple-200/50 dark:border-purple-800/30">
              <p className="text-sm font-bold text-gray-600 dark:text-gray-400 mb-2">Recovery Rate</p>
              <p className="text-3xl font-black text-purple-600 dark:text-purple-400">{monthlyData.recoveryRate}%</p>
            </div>
          </div>
        </div>
      </div>

      {/* Impact and Community Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Impact Comparison */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-3xl blur opacity-20"></div>
          <div className="relative bg-gradient-to-br from-white/60 to-white/40 dark:from-gray-800/60 dark:to-gray-900/40 backdrop-blur-2xl rounded-3xl border border-white/30 dark:border-gray-700/30 p-8 shadow-xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl">
                <Leaf className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-black text-gray-900 dark:text-white">Environmental Impact</h2>
            </div>
            <div className="space-y-4">
              <div className="p-4 bg-emerald-50 dark:bg-emerald-950/30 rounded-2xl border border-emerald-200/50 dark:border-emerald-800/30">
                <p className="text-sm font-bold text-gray-600 dark:text-gray-400 mb-2">CO₂ Emissions Reduced</p>
                <p className="text-4xl font-black text-emerald-600 dark:text-emerald-400">{monthlyData.co2Reduced}kg</p>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">Equivalent to planting {Math.round(monthlyData.co2Reduced / 2)} trees</p>
              </div>
            </div>
          </div>
        </div>

        {/* Community Leaderboard */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl blur opacity-20"></div>
          <div className="relative bg-gradient-to-br from-white/60 to-white/40 dark:from-gray-800/60 dark:to-gray-900/40 backdrop-blur-2xl rounded-3xl border border-white/30 dark:border-gray-700/30 p-8 shadow-xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-black text-gray-900 dark:text-white">Community Impact</h2>
            </div>
            <div className="space-y-4">
              <div className="p-4 bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-950/30 dark:to-blue-950/30 rounded-2xl border-2 border-cyan-300/50 dark:border-cyan-700/30">
                <p className="text-sm font-bold text-gray-600 dark:text-gray-400 mb-2">Your Water Saved</p>
                <div className="flex items-center justify-between">
                  <p className="text-3xl font-black text-cyan-600 dark:text-cyan-400">{communityStats.yourUsage}L</p>
                  <span className="px-3 py-1 bg-cyan-500/20 text-cyan-700 dark:text-cyan-400 rounded-full text-xs font-bold">You</span>
                </div>
              </div>
              <div className="p-4 bg-white/50 dark:bg-gray-800/50 rounded-2xl border border-gray-200/50 dark:border-gray-700/50">
                <p className="text-sm font-bold text-gray-600 dark:text-gray-400 mb-2">Community Average</p>
                <p className="text-3xl font-black text-gray-700 dark:text-gray-300">{communityStats.avgUsage}L</p>
              </div>
              <div className="p-4 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/30 dark:to-orange-950/30 rounded-2xl border-2 border-amber-300/50 dark:border-amber-700/30">
                <p className="text-sm font-bold text-gray-600 dark:text-gray-400 mb-2">Top Performer</p>
                <div className="flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                  <p className="text-3xl font-black text-amber-600 dark:text-amber-400">{communityStats.topUser}L</p>
                </div>
              </div>
            </div>
            <div className="mt-6 p-4 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl border border-cyan-500/20 dark:border-cyan-500/10">
              <p className="text-center text-sm font-bold">
                {percentBetterThanAvg > 0 ? (
                  <span className="text-emerald-600 dark:text-emerald-400">
                    You're {percentBetterThanAvg}% better than average! 🎉
                  </span>
                ) : (
                  <span className="text-gray-700 dark:text-gray-300">
                    Keep it up! You can save {Math.abs(percentBetterThanAvg)}% more
                  </span>
                )}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Achievements */}
      <div className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-3xl blur"></div>
        <div className="relative bg-gradient-to-br from-white/60 to-white/40 dark:from-gray-800/60 dark:to-gray-900/40 backdrop-blur-2xl rounded-3xl border border-white/30 dark:border-gray-700/30 p-8 shadow-xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl">
              <Award className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-black text-gray-900 dark:text-white">Your Achievements</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className={`relative p-6 rounded-2xl border-2 transition-all duration-300 ${
                  achievement.unlocked
                    ? "bg-gradient-to-br from-amber-50 to-yellow-50 dark:from-amber-950/30 dark:to-yellow-950/30 border-amber-300 dark:border-amber-700 shadow-lg"
                    : "bg-white/50 dark:bg-gray-800/50 border-gray-200 dark:border-gray-700"
                }`}
              >
                <div className="text-4xl mb-3 text-center">{achievement.emoji}</div>
                <p className="text-sm font-black text-center text-gray-900 dark:text-white mb-2">
                  {achievement.title}
                </p>
                {!achievement.unlocked && (
                  <div className="mt-2">
                    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-purple-500 to-pink-600 transition-all duration-500"
                        style={{ width: `${achievement.progress}%` }}
                      ></div>
                    </div>
                    <p className="text-xs text-center text-gray-600 dark:text-gray-400 mt-1">
                      {achievement.progress}%
                    </p>
                  </div>
                )}
                {achievement.unlocked && (
                  <div className="absolute -top-2 -right-2">
                    <div className="w-6 h-6 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-xs">✓</span>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
