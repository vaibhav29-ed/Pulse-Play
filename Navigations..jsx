"use client";
import React from "react";

function MainComponent({ currentPage = "home" }) {
  const navItems = [
    { id: "home", label: "Home", icon: "fas fa-home", path: "/" },
    { id: "shop", label: "Shop", icon: "fas fa-shopping-bag", path: "/shop" },
    { id: "premium", label: "Premium", icon: "fas fa-crown", path: "/premium" },
    {
      id: "leaderboard",
      label: "Leaderboard",
      icon: "fas fa-trophy",
      path: "/leaderboard",
    },
    { id: "profile", label: "Profile", icon: "fas fa-user", path: "/profile" },
    {
      id: "settings",
      label: "Settings",
      icon: "fas fa-cog",
      path: "/settings",
    },
  ];

  const handleNavigation = (path) => {
    window.location.href = path;
  };

  return (
    <nav className="md:fixed md:left-0 md:top-0 md:h-screen md:w-[240px] fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-800 border-t md:border-r border-gray-200 dark:border-gray-700">
      <div className="hidden md:flex md:items-center md:justify-center md:h-20 md:border-b md:border-gray-200 dark:md:border-gray-700">
        <img
          src="https://ucarecdn.com/9258f7a2-de9b-4e78-a379-17e44af23449/-/format/auto/"
          alt="Pulse Play Logo"
          className="h-12"
        />
      </div>

      <div className="flex md:flex-col md:mt-6 md:space-y-2 md:p-4 justify-around items-center p-3">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => handleNavigation(item.path)}
            className={`flex md:w-full md:p-3 flex-col md:flex-row md:space-x-3 items-center 
              ${
                currentPage === item.id
                  ? "text-[#6366f1]"
                  : "text-gray-500 dark:text-gray-400 hover:text-[#6366f1] dark:hover:text-[#6366f1]"
              }`}
          >
            <i className={${item.icon} text-xl md:text-lg}></i>
            <span className="text-xs md:text-sm mt-1 md:mt-0">
              {item.label}
            </span>
          </button>
        ))}
      </div>
    </nav>
  );
}

function StoryComponent() {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Navigation Component Stories</h2>

      <div className="mb-8">
        <h3 className="text-lg font-medium mb-2">Default (Home Active)</h3>
        <MainComponent currentPage="home" />
      </div>

      <div className="mb-8">
        <h3 className="text-lg font-medium mb-2">Shop Active</h3>
        <MainComponent currentPage="shop" />
      </div>

      <div className="mb-8">
        <h3 className="text-lg font-medium mb-2">Premium Active</h3>
        <MainComponent currentPage="premium" />
      </div>

      <div className="mb-8">
        <h3 className="text-lg font-medium mb-2">Leaderboard Active</h3>
        <MainComponent currentPage="leaderboard" />
      </div>

      <div className="mb-8">
        <h3 className="text-lg font-medium mb-2">Profile Active</h3>
        <MainComponent currentPage="profile" />
      </div>

      <div className="mb-8">
        <h3 className="text-lg font-medium mb-2">Settings Active</h3>
        <MainComponent currentPage="settings" />
      </div>
    </div>
  );
}

export default MainComponent;
