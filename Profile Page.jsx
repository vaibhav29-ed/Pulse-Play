"use client";
import React from "react";
import Navigation1 from "../components/navigation-1";

function MainComponent() {
  const [userStats, setUserStats] = useState({
    name: "Vaibhav Singh",
    level: 12,
    xp: 750,
    totalWorkouts: 48,
    streak: 7,
    joined: "January 2025",
    achievements: [
      {
        id: 1,
        name: "Early Bird",
        description: "Complete 5 morning workouts",
        icon: "fas fa-sun",
        progress: 100,
      },
      {
        id: 2,
        name: "Consistency King",
        description: "Maintain a 7-day streak",
        icon: "fas fa-fire",
        progress: 100,
      },
      {
        id: 3,
        name: "Strength Master",
        description: "Complete 20 strength workouts",
        icon: "fas fa-dumbbell",
        progress: 75,
      },
      {
        id: 4,
        name: "Social Butterfly",
        description: "Join 5 group challenges",
        icon: "fas fa-users",
        progress: 40,
      },
    ],
    recentActivities: [
      {
        id: 1,
        type: "workout",
        name: "Full Body HIIT",
        date: "Today",
        xp: 100,
        duration: "45 min",
      },
      {
        id: 2,
        type: "achievement",
        name: "Early Bird Badge",
        date: "Yesterday",
        xp: 50,
      },
      {
        id: 3,
        type: "workout",
        name: "Upper Body Strength",
        date: "2 days ago",
        xp: 80,
        duration: "30 min",
      },
    ],
  });

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 font-inter md:pl-[240px]">
      <Navigation1 currentPage="profile" />

      <div className="max-w-4xl mx-auto px-4 py-6 pb-20">
        <div className="flex flex-col items-center mb-8">
          <div className="relative">
            <div className="w-24 h-24 bg-[#6366f1] rounded-full flex items-center justify-center text-white text-3xl">
              {userStats.name.charAt(0)}
            </div>
            <div className="absolute -bottom-2 -right-2 bg-green-500 rounded-full w-6 h-6 flex items-center justify-center">
              <i className="fas fa-check text-white text-sm"></i>
            </div>
          </div>

          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mt-4">
            {userStats.name}
          </h1>
          <div className="flex items-center space-x-2 mt-2">
            <span className="bg-[#6366f1]/10 text-[#6366f1] px-3 py-1 rounded-full text-sm">
              Level {userStats.level}
            </span>
            <span className="text-gray-500 dark:text-gray-400 text-sm">
              Joined {userStats.joined}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-4 text-center">
            <div className="text-[#6366f1] text-xl mb-1">
              <i className="fas fa-dumbbell"></i>
            </div>
            <div className="text-2xl font-bold text-gray-900 dark:text-white">
              {userStats.totalWorkouts}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Workouts
            </div>
          </div>
          <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-4 text-center">
            <div className="text-[#6366f1] text-xl mb-1">
              <i className="fas fa-fire"></i>
            </div>
            <div className="text-2xl font-bold text-gray-900 dark:text-white">
              {userStats.streak}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Day Streak
            </div>
          </div>
          <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-4 text-center">
            <div className="text-[#6366f1] text-xl mb-1">
              <i className="fas fa-star"></i>
            </div>
            <div className="text-2xl font-bold text-gray-900 dark:text-white">
              {userStats.xp}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Total XP
            </div>
          </div>
          <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-4 text-center">
            <div className="text-[#6366f1] text-xl mb-1">
              <i className="fas fa-trophy"></i>
            </div>
            <div className="text-2xl font-bold text-gray-900 dark:text-white">
              {userStats.achievements.length}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Achievements
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
            Achievements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {userStats.achievements.map((achievement) => (
              <div
                key={achievement.id}
                className="bg-gray-100 dark:bg-gray-800 rounded-xl p-4"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[#6366f1]/10 rounded-xl flex items-center justify-center text-[#6366f1]">
                    <i className={${achievement.icon} text-xl}></i>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-gray-900 dark:text-white font-medium">
                      {achievement.name}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {achievement.description}
                    </p>
                  </div>
                </div>
                <div className="mt-3 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-[#6366f1] rounded-full h-2 transition-all duration-300"
                    style={{ width: ${achievement.progress}% }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
            Recent Activity
          </h2>
          <div className="space-y-4">
            {userStats.recentActivities.map((activity) => (
              <div
                key={activity.id}
                className="bg-gray-100 dark:bg-gray-800 rounded-xl p-4"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-[#6366f1]/10 rounded-xl flex items-center justify-center text-[#6366f1]">
                      <i
                        className={`fas ${
                          activity.type === "workout"
                            ? "fa-dumbbell"
                            : "fa-medal"
                        }`}
                      ></i>
                    </div>
                    <div>
                      <h3 className="text-gray-900 dark:text-white font-medium">
                        {activity.name}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {activity.date} •{" "}
                        {activity.duration ? `${activity.duration} • ` : ""}
                        {activity.xp} XP
                      </p>
                    </div>
                  </div>
                  <button className="text-[#6366f1]">
                    <i className="fas fa-chevron-right"></i>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainComponent;
