import React, { useState } from "react";
import { Save, User, Home, Bell, Palette, Settings as SettingsIcon } from "lucide-react";

export default function Settings() {
  const [formData, setFormData] = useState({
    household_size: 4,
    location: "Mumbai, Maharashtra",
    recovery_mode: "normal",
    theme: "light",
    reminder_enabled: true,
    reminder_days_before: 7,
    tank_capacity: 5
  });

  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    // Save logic here
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      {/* Hero Section */}
      <div className="mb-12 relative">
        <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-3xl blur-2xl"></div>
        <div className="relative">
          <h1 className="text-5xl md:text-6xl font-black mb-4 bg-gradient-to-r from-gray-900 via-indigo-600 to-purple-600 dark:from-white dark:via-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
            Settings
          </h1>
          <p className="text-lg font-semibold text-gray-700 dark:text-gray-300">
            Customize your ReDrop experience
          </p>
        </div>
      </div>

      <div className="space-y-6">
        {/* Profile Section */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-3xl blur"></div>
          <div className="relative bg-gradient-to-br from-white/60 to-white/40 dark:from-gray-800/60 dark:to-gray-900/40 backdrop-blur-2xl rounded-3xl border border-white/30 dark:border-gray-700/30 p-8 shadow-xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl">
                <User className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-black text-gray-900 dark:text-white">Profile Information</h2>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Name</label>
                <input
                  type="text"
                  value="User"
                  disabled
                  className="w-full px-4 py-3 bg-gray-100 dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  value="user@example.com"
                  disabled
                  className="w-full px-4 py-3 bg-gray-100 dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Household Section */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/10 to-green-500/10 rounded-3xl blur"></div>
          <div className="relative bg-gradient-to-br from-white/60 to-white/40 dark:from-gray-800/60 dark:to-gray-900/40 backdrop-blur-2xl rounded-3xl border border-white/30 dark:border-gray-700/30 p-8 shadow-xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl">
                <Home className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-black text-gray-900 dark:text-white">Household Settings</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Household Size</label>
                <input
                  type="number"
                  min="1"
                  value={formData.household_size}
                  onChange={(e) => setFormData({ ...formData, household_size: parseInt(e.target.value) })}
                  className="w-full px-4 py-3 bg-white/50 dark:bg-gray-800/50 rounded-2xl border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Location</label>
                <input
                  type="text"
                  placeholder="e.g., Mumbai, Maharashtra"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="w-full px-4 py-3 bg-white/50 dark:bg-gray-800/50 rounded-2xl border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Tank Capacity (Liters)</label>
              <input
                type="number"
                min="1"
                value={formData.tank_capacity}
                onChange={(e) => setFormData({ ...formData, tank_capacity: parseInt(e.target.value) })}
                className="w-full px-4 py-3 bg-white/50 dark:bg-gray-800/50 rounded-2xl border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>
          </div>
        </div>

        {/* System Settings */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-orange-500/10 to-amber-500/10 rounded-3xl blur"></div>
          <div className="relative bg-gradient-to-br from-white/60 to-white/40 dark:from-gray-800/60 dark:to-gray-900/40 backdrop-blur-2xl rounded-3xl border border-white/30 dark:border-gray-700/30 p-8 shadow-xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-br from-orange-500 to-amber-600 rounded-2xl">
                <Bell className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-black text-gray-900 dark:text-white">System Settings</h2>
            </div>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Water Recovery Mode</label>
                <select
                  value={formData.recovery_mode}
                  onChange={(e) => setFormData({ ...formData, recovery_mode: e.target.value })}
                  className="w-full px-4 py-3 bg-white/50 dark:bg-gray-800/50 rounded-2xl border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                >
                  <option value="normal">Normal Mode</option>
                  <option value="max_recovery">Max Recovery Mode</option>
                </select>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
                  {formData.recovery_mode === "max_recovery"
                    ? "Maximizes water reuse - best for sustainability"
                    : "Balanced mode - optimal for daily use"}
                </p>
              </div>

              <div className="flex items-center justify-between p-4 bg-white/50 dark:bg-gray-800/50 rounded-2xl border border-gray-200 dark:border-gray-700">
                <div>
                  <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-1">
                    Filter Replacement Reminders
                  </label>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    Get notified when filters need replacement
                  </p>
                </div>
                <button
                  onClick={() => setFormData({ ...formData, reminder_enabled: !formData.reminder_enabled })}
                  className={`relative w-14 h-8 rounded-full transition-colors ${
                    formData.reminder_enabled ? "bg-cyan-500" : "bg-gray-300 dark:bg-gray-700"
                  }`}
                >
                  <span
                    className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full transition-transform ${
                      formData.reminder_enabled ? "translate-x-6" : ""
                    }`}
                  ></span>
                </button>
              </div>

              {formData.reminder_enabled && (
                <div>
                  <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                    Remind Me (Days Before)
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="30"
                    value={formData.reminder_days_before}
                    onChange={(e) => setFormData({ ...formData, reminder_days_before: parseInt(e.target.value) })}
                    className="w-full px-4 py-3 bg-white/50 dark:bg-gray-800/50 rounded-2xl border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  />
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Appearance */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-3xl blur"></div>
          <div className="relative bg-gradient-to-br from-white/60 to-white/40 dark:from-gray-800/60 dark:to-gray-900/40 backdrop-blur-2xl rounded-3xl border border-white/30 dark:border-gray-700/30 p-8 shadow-xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl">
                <Palette className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-black text-gray-900 dark:text-white">Appearance</h2>
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Theme</label>
              <select
                value={formData.theme}
                onChange={(e) => setFormData({ ...formData, theme: e.target.value })}
                className="w-full px-4 py-3 bg-white/50 dark:bg-gray-800/50 rounded-2xl border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
              >
                <option value="light">Light</option>
                <option value="dark">Dark</option>
              </select>
            </div>
          </div>
        </div>

        {/* Save Button */}
        <div className="flex justify-end">
          <button
            onClick={handleSave}
            className={`relative group px-8 py-4 bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-black rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 ${
              saved ? "bg-gradient-to-r from-emerald-500 to-teal-600" : ""
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-indigo-600 rounded-2xl blur opacity-50 group-hover:opacity-75"></div>
            <div className="relative flex items-center gap-2">
              <Save className="w-5 h-5" />
              {saved ? "Saved!" : "Save Settings"}
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
