import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link, useLocation, Navigate } from "react-router-dom";
import { Droplets, Activity, BarChart3, Settings, Waves, Moon, Sun } from "lucide-react";
import { gsap } from "gsap";
import PageTransition from "./components/PageTransition";
import Dashboard from "./pages/Dashboard";
import FilterHealth from "./pages/FilterHealth";
import Reports from "./pages/Reports";
import SettingsPage from "./pages/Settings";

function Layout({ children }) {
  const location = useLocation();
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme || "light";
  });

  useEffect(() => {
    localStorage.setItem("theme", theme);
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const isDark = theme === "dark";

  const navItems = [
    { name: "Dashboard", path: "/", icon: Droplets },
    { name: "FilterHealth", path: "/filter-health", icon: Activity },
    { name: "Reports", path: "/reports", icon: BarChart3 },
    { name: "Settings", path: "/settings", icon: Settings },
  ];

  const isActive = (path) => location.pathname === path;

  // Animate navigation on route change
  useEffect(() => {
    gsap.fromTo(
      ".nav-item",
      { opacity: 0, y: -10 },
      { opacity: 1, y: 0, duration: 0.3, stagger: 0.1, delay: 0.2 }
    );
  }, [location.pathname]);

  return (
    <div className={`min-h-screen relative overflow-hidden ${isDark ? 'bg-gray-950' : 'bg-gradient-to-br from-slate-50 via-cyan-50/30 to-indigo-50/50'}`}>
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 -left-20 w-96 h-96 bg-cyan-400/10 dark:bg-cyan-500/5 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-0 -right-20 w-96 h-96 bg-indigo-400/10 dark:bg-indigo-500/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Header with glassmorphism */}
      <header className={`sticky top-0 z-50 ${isDark ? 'bg-gray-900/80' : 'bg-white/60'} backdrop-blur-2xl border-b ${isDark ? 'border-gray-800/50' : 'border-white/20'} shadow-lg`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-4 group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-indigo-600 rounded-2xl blur-lg opacity-50 group-hover:opacity-70 transition-opacity"></div>
                <div className="relative w-12 h-12 bg-gradient-to-br from-cyan-500 via-blue-600 to-indigo-700 rounded-2xl flex items-center justify-center shadow-xl transform group-hover:scale-110 transition-transform">
                  <Waves className="w-7 h-7 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-400 rounded-full border-2 border-white dark:border-gray-900 shadow-lg animate-pulse"></div>
              </div>
              <div>
                <h1 className="text-2xl font-black bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 dark:from-cyan-400 dark:via-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
                  ReDrop
                </h1>
                <p className={`text-xs font-bold uppercase tracking-wider ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  Smart RO System
                </p>
              </div>
            </Link>
            
            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-3">
              {navItems.map((item) => {
                const Icon = item.icon;
                const active = isActive(item.path);
                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`nav-item relative group/nav flex items-center gap-2 px-5 py-2.5 rounded-2xl transition-all duration-300 ${
                      active
                        ? "bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-lg shadow-cyan-500/30"
                        : isDark
                          ? "text-gray-400 hover:text-white hover:bg-gray-800/50"
                          : "text-gray-700 hover:text-cyan-600 hover:bg-white/60"
                    }`}
                  >
                    {active && (
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-indigo-600 rounded-2xl blur opacity-50"></div>
                    )}
                    <Icon className={`w-4 h-4 relative z-10 ${active ? '' : 'group-hover/nav:scale-110 transition-transform'}`} />
                    <span className="text-sm font-bold relative z-10">{item.name}</span>
                  </Link>
                );
              })}
              <button
                onClick={toggleTheme}
                className={`nav-item ml-2 p-2.5 rounded-2xl transition-all duration-300 ${
                  isDark
                    ? "text-gray-400 hover:text-white hover:bg-gray-800/50"
                    : "text-gray-700 hover:text-cyan-600 hover:bg-white/60"
                }`}
                aria-label="Toggle theme"
              >
                {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content with Page Transitions */}
      <main className="pb-20 md:pb-8 relative">
        <PageTransition>
          {children}
        </PageTransition>
      </main>

      {/* Mobile Bottom Nav */}
      <nav className={`md:hidden fixed bottom-0 left-0 right-0 ${isDark ? 'bg-gray-900/95' : 'bg-white/80'} backdrop-blur-2xl ${isDark ? 'border-gray-800/50' : 'border-white/20'} border-t shadow-2xl z-50`}>
        <div className="grid grid-cols-4 gap-2 px-3 py-4">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.path);
            return (
              <Link
                key={item.name}
                to={item.path}
                className={`relative flex flex-col items-center gap-1.5 py-3 px-2 rounded-2xl transition-all duration-300 ${
                  active
                    ? "bg-gradient-to-br from-cyan-500 to-indigo-600 text-white shadow-lg shadow-cyan-500/30 scale-105"
                    : isDark
                      ? "text-gray-500 hover:text-white hover:bg-gray-800/50"
                      : "text-gray-600 hover:text-cyan-600 hover:bg-white/60"
                }`}
              >
                {active && (
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-indigo-600 rounded-2xl blur opacity-50"></div>
                )}
                <Icon className={`w-5 h-5 relative z-10 ${active ? '' : 'transition-transform hover:scale-110'}`} />
                <span className="text-[10px] font-bold truncate max-w-full relative z-10">
                  {item.name === "FilterHealth" ? "Filters" : item.name}
                </span>
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/filter-health" element={<FilterHealth />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
