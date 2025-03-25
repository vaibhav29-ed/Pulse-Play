"use client";
import React from "react";
import Navigation1 from "../components/navigation-1";

function MainComponent() {
  const [userStats, setUserStats] = useState({
    streak: 7,
    level: 12,
    xp: 750,
    xpNeeded: 1000,
    aiScore: 92,
    calories: 450,
    coins: 230,
  });
  const [loading, setLoading] = useState(false);
  const calculateXPPercentage = () => {
    return (userStats.xp / userStats.xpNeeded) * 100;
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 font-inter pb-16 md:pl-[240px]">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between px-4 py-4 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center space-x-6">
            <img
              src="https://ucarecdn.com/9258f7a2-de9b-4e78-a379-17e44af23449/-/format/auto/"
              alt="Pulse Play Logo"
              className="h-12"
            />
            <button className="text-[#6366f1] hover:text-[#4f46e5] transition-colors">
              <i className="fas fa-user-circle text-3xl"></i>
            </button>
          </div>
          <div className="flex items-center space-x-4">
            <button className="text-gray-600 dark:text-gray-300 hover:text-[#6366f1] transition-colors">
              <i className="fas fa-search text-xl"></i>
            </button>
            <button className="text-gray-600 dark:text-gray-300 hover:text-[#6366f1] transition-colors">
              <i className="fas fa-bell text-xl"></i>
            </button>
          </div>
        </div>
        <div className="px-4 py-6">
          <div className="flex justify-between items-center mb-3">
            <span className="text-gray-700 dark:text-gray-300 text-lg font-medium">
              XP Progress
            </span>
            <span className="text-gray-900 dark:text-white text-lg font-medium">
              {userStats.xp}/{userStats.xpNeeded}
            </span>
          </div>
          <div className="bg-gray-200 dark:bg-gray-700 rounded-full h-6">
            <div
              className="bg-[#6366f1] rounded-full h-6 transition-all duration-300 relative"
              style={{ width: ${calculateXPPercentage()}% }}
            >
              <div className="absolute inset-0 flex items-center justify-center text-white text-sm">
                {Math.round(calculateXPPercentage())}%
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 px-4 mb-6">
          <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 text-center">
            <div className="text-[#6366f1] text-2xl mb-2">🔥</div>
            <div className="text-xl font-medium text-gray-900 dark:text-white">
              {userStats.streak}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Streak
            </div>
          </div>
          <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 text-center">
            <i className="fas fa-fire-alt text-[#6366f1] text-2xl mb-2"></i>
            <div className="text-xl font-medium text-gray-900 dark:text-white">
              {userStats.calories}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Calories
            </div>
          </div>
          <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 text-center">
            <i className="fas fa-coins text-[#6366f1] text-2xl mb-2"></i>
            <div className="text-xl font-medium text-gray-900 dark:text-white">
              {userStats.coins}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Coins
            </div>
          </div>
          <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 text-center">
            <i className="fas fa-robot text-[#6366f1] text-2xl mb-2"></i>
            <div className="text-xl font-medium text-gray-900 dark:text-white">
              {userStats.aiScore}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              AI Score
            </div>
          </div>
        </div>

        <div className="px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <button
              className="bg-gray-900 hover:bg-gray-800 text-white rounded-lg p-6 flex flex-col items-center justify-center transition-all duration-300"
              onClick={() => setLoading(true)}
            >
              <i className="fas fa-dumbbell text-3xl mb-3"></i>
              <span className="text-lg">Start Workout</span>
              <span className="text-sm text-gray-300 mt-2">
                Earn up to 100 XP
              </span>
            </button>

            <button
              className="bg-gray-900 hover:bg-gray-800 text-white rounded-lg p-6 flex flex-col items-center justify-center transition-all duration-300"
              onClick={() => setLoading(true)}
            >
              <i className="fas fa-trophy text-3xl mb-3"></i>
              <span className="text-lg">Join Competition</span>
              <span className="text-sm text-gray-300 mt-2">
                Compete for 500 XP
              </span>
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 text-center">
              <i className="fas fa-ranking-star text-[#6366f1] text-xl mb-2"></i>
              <div className="text-gray-900 dark:text-white text-lg">
                Leaderboard
              </div>
              <div className="text-gray-700 dark:text-gray-300">Rankings</div>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 text-center">
              <i className="fas fa-running text-[#6366f1] text-xl mb-2"></i>
              <div className="text-gray-900 dark:text-white text-lg">
                Movement
              </div>
              <div className="text-gray-700 dark:text-gray-300">Analysis</div>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 text-center">
              <i className="fas fa-chart-line text-[#6366f1] text-xl mb-2"></i>
              <div className="text-gray-900 dark:text-white text-lg">
                Progress
              </div>
              <div className="text-gray-700 dark:text-gray-300">Tracking</div>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 text-center">
              <i className="fas fa-brain text-[#6366f1] text-xl mb-2"></i>
              <div className="text-gray-900 dark:text-white text-lg">
                AI Coach
              </div>
              <div className="text-gray-700 dark:text-gray-300">Active</div>
            </div>
          </div>
        </div>

        {loading && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-4 border-[#6366f1] border-t-transparent mx-auto"></div>
              <p className="mt-4 text-gray-900 dark:text-white">
                Loading your fitness experience...
              </p>
            </div>
          </div>
        )}

        <Navigation1 currentPage="home" />
      </div>
    </div>
  );
}

export default MainComponent;
