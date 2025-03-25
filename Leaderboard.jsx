"use client";
import React from "react";
import Navigation1 from "../components/navigation-1";

function MainComponent() {
  const [timeFilter, setTimeFilter] = useState("weekly");
  const [selectedUser, setSelectedUser] = useState(null);
  const [category, setCategory] = useState("overall");

  const leaderboardData = [
    {
      id: 1,
      name: "Vaibhav Singh",
      rank: 1,
      points: 2430,
      avatar:
        "https://ucarecdn.com/60e7433d-3f88-41b0-ab0f-e7316c167d76/-/format/auto/",
      streak: 15,
      achievements: ["💪 Fitness Elite", "🏃 Marathon Pro"],
      progress: 92,
    },
    {
      id: 2,
      name: "Priya Sharma",
      rank: 2,
      points: 2280,
      avatar:
        "https://ucarecdn.com/ba9ba59f-1dd0-4b72-bf71-7ef7343a9760/-/format/auto/",
      streak: 12,
      achievements: ["🎯 Goal Crusher", "⚡ Power User"],
      progress: 88,
    },
    {
      id: 3,
      name: "Rahul Patel",
      rank: 3,
      points: 2150,
      avatar:
        "https://ucarecdn.com/d60e6145-6766-40e5-9fb1-856fc992e661/-/format/auto/",
      streak: 10,
      achievements: ["🌟 Rising Star"],
      progress: 85,
    },
    {
      id: 4,
      name: "Ananya Gupta",
      rank: 4,
      points: 1980,
      avatar:
        "https://ucarecdn.com/13e7b14f-633b-4705-9657-3a27b6df1658/-/format/auto/",
      streak: 8,
      achievements: ["🎽 Fitness Enthusiast"],
      progress: 79,
    },
    {
      id: 5,
      name: "Arjun Reddy",
      rank: 5,
      points: 1820,
      avatar:
        "https://ucarecdn.com/bd5efed3-9513-4fd0-91fd-1dc58f0722f4/-/format/auto/",
      streak: 7,
      achievements: ["🎯 Goal Setter"],
      progress: 75,
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 font-inter">
      <div className="flex">
        <Navigation1 currentPage="leaderboard" />

        <div className="flex-1 md:ml-[240px]">
          <div className="max-w-4xl mx-auto px-4 py-6">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                Leaderboard
              </h1>
              <div className="flex space-x-2">
                {["daily", "weekly", "monthly", "all-time"].map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setTimeFilter(filter)}
                    className={`px-3 py-1 rounded-lg text-sm ${
                      timeFilter === filter
                        ? "bg-[#6366f1] text-white"
                        : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400"
                    }`}
                  >
                    {filter.charAt(0).toUpperCase() + filter.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex space-x-4 mb-6 overflow-x-auto">
              {["overall", "strength", "cardio", "yoga"].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setCategory(cat)}
                  className={`px-4 py-2 rounded-lg whitespace-nowrap ${
                    category === cat
                      ? "bg-[#6366f1]/10 text-[#6366f1]"
                      : "text-gray-600 dark:text-gray-400"
                  }`}
                >
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </button>
              ))}
            </div>

            <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 mb-6">
              <div className="grid grid-cols-3 gap-6">
                {leaderboardData.slice(0, 3).map((user) => (
                  <div
                    key={user.id}
                    className={`relative bg-white dark:bg-gray-700 rounded-lg p-4 ${
                      user.rank === 1 ? "transform -translate-y-4" : ""
                    }`}
                  >
                    <div className="absolute -top-3 -right-3">
                      {user.rank === 1 && "👑"}
                      {user.rank === 2 && "🥈"}
                      {user.rank === 3 && "🥉"}
                    </div>
                    <div className="flex flex-col items-center">
                      <img
                        src={user.avatar}
                        alt={user.name}
                        className="w-16 h-16 rounded-full mb-2"
                      />
                      <h3 className="font-bold text-gray-900 dark:text-white">
                        {user.name}
                      </h3>
                      <p className="text-[#6366f1] font-medium">
                        {user.points} pts
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm">
              {leaderboardData.map((user) => (
                <div
                  key={user.id}
                  onClick={() => setSelectedUser(user)}
                  className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer"
                >
                  <div className="flex items-center space-x-4">
                    <span className="text-lg font-medium text-gray-600 dark:text-gray-400 w-8">
                      {user.rank}
                    </span>
                    <img
                      src={user.avatar}
                      alt={user.name}
                      className="w-10 h-10 rounded-full"
                    />
                    <div>
                      <h3 className="font-medium text-gray-900 dark:text-white">
                        {user.name}
                      </h3>
                      <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                        <span>🔥 {user.streak} days</span>
                        {user.achievements
                          .slice(0, 1)
                          .map((achievement, index) => (
                            <span key={index}>{achievement}</span>
                          ))}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-[#6366f1]">
                      {user.points}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      points
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {selectedUser && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 max-w-md w-full">
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center space-x-4">
                <img
                  src={selectedUser.avatar}
                  alt={selectedUser.name}
                  className="w-16 h-16 rounded-full"
                />
                <div>
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                    {selectedUser.name}
                  </h2>
                  <p className="text-[#6366f1]">Rank #{selectedUser.rank}</p>
                </div>
              </div>
              <button
                onClick={() => setSelectedUser(null)}
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
              >
                <i className="fas fa-times"></i>
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                  Progress
                </div>
                <div className="bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-[#6366f1] rounded-full h-2"
                    style={{ width: ${selectedUser.progress}% }}
                  ></div>
                </div>
              </div>
              <div>
                <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                  Achievements
                </div>
                <div className="flex flex-wrap gap-2">
                  {selectedUser.achievements.map((achievement, index) => (
                    <span
                      key={index}
                      className="bg-[#6366f1]/10 text-[#6366f1] px-3 py-1 rounded-full text-sm"
                    >
                      {achievement}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MainComponent;
