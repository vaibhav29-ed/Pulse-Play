"use client";
import React from "react";
import Navigation1 from "../components/navigation-1";

function MainComponent() {
  const [isSyncing, setIsSyncing] = useState(false);
  const [isHealthConnected, setIsHealthConnected] = useState(true);
  const handleSync = () => {
    setIsSyncing(true);
    setTimeout(() => setIsSyncing(false), 2000);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 font-inter pb-16">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between px-4 py-4 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center">
            <button
              onClick={() => (window.location.href = "/")}
              className="text-gray-600 dark:text-gray-300 hover:text-[#6366f1] mr-4"
            >
              <i className="fas fa-arrow-left text-xl"></i>
            </button>
            <h1 className="text-xl font-bold text-gray-900 dark:text-white">
              Settings
            </h1>
          </div>
        </div>

        <div className="px-4 py-6">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center">
              <div className="w-16 h-16 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center">
                <i className="fas fa-user text-3xl text-gray-400 dark:text-gray-500"></i>
              </div>
              <div className="ml-4">
                <div className="flex items-center">
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                    Vaibhav Singh
                  </h2>
                  <i className="fab fa-google ml-2 text-gray-500"></i>
                </div>
                <p className="text-sm text-gray-500">
                  Last synced: Today, 2:30 PM
                </p>
              </div>
            </div>
            <button
              onClick={handleSync}
              className="text-[#6366f1] p-2 rounded-full hover:bg-[#6366f1]/10"
            >
              <i
                className={`fas fa-sync-alt text-xl ${
                  isSyncing ? "animate-spin" : ""
                }`}
              ></i>
            </button>
          </div>
          <button className="w-full bg-[#6366f1] text-white py-4 rounded-xl mb-8 flex items-center justify-center hover:shadow-lg hover:shadow-[#6366f1]/20 transition-all">
            <i className="fas fa-crown mr-2"></i>
            GO PREMIUM
          </button>

          <div className="space-y-6">
            <div className="bg-orange-50 dark:bg-gray-800 p-4 rounded-xl flex items-center justify-between">
              <div className="flex items-center">
                <i className="fas fa-rocket text-orange-500 text-xl"></i>
                <span className="ml-4 text-gray-900 dark:text-white">
                  Update to New Version v2.1
                </span>
              </div>
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
            </div>

            {[
              {
                icon: "fas fa-droplet text-green-500",
                label: "Workout Settings",
              },
              { icon: "fas fa-gear text-blue-500", label: "General Settings" },
              {
                icon: "fas fa-microphone text-yellow-500",
                label: "Voice Options (TTS)",
              },
              {
                icon: "fas fa-comment text-blue-500",
                label: "Suggest Other Features",
                notification: true,
              },
              {
                icon: "fas fa-globe text-purple-500",
                label: "Language Options",
                subtitle: "Default",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl cursor-pointer"
              >
                <div className="flex items-center">
                  <i className={${item.icon} text-xl}></i>
                  <div className="ml-4">
                    <div className="text-gray-900 dark:text-white">
                      {item.label}
                    </div>
                    {item.subtitle && (
                      <div className="text-sm text-gray-500">
                        {item.subtitle}
                      </div>
                    )}
                  </div>
                </div>
                {item.notification && (
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                )}
              </div>
            ))}

            <div className="flex items-center justify-between p-4 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl cursor-pointer">
              <div className="flex items-center">
                <i className="fas fa-heart text-red-500 text-xl"></i>
                <span className="ml-4 text-gray-900 dark:text-white">
                  Sync to Health Connect
                </span>
              </div>
              <button
                onClick={() => setIsHealthConnected(!isHealthConnected)}
                className={`w-12 h-6 rounded-full transition-colors ${
                  isHealthConnected ? "bg-[#6366f1]" : "bg-gray-300"
                }`}
              >
                <div
                  className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform ${
                    isHealthConnected ? "translate-x-6" : "translate-x-1"
                  }`}
                ></div>
              </button>
            </div>

            <div className="mt-8 space-y-4">
              {[
                { icon: "fas fa-share-alt", label: "Share with Friends" },
                { icon: "fas fa-star", label: "Rate Us" },
                { icon: "fas fa-pencil-alt", label: "Feedback" },
                { icon: "fas fa-ban", label: "Remove Ads" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center p-4 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl cursor-pointer"
                >
                  <i className={${item.icon} text-gray-500 text-xl}></i>
                  <span className="ml-4 text-gray-900 dark:text-white">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <Navigation1 currentPage="settings" />
      </div>
    </div>
  );
}

export default MainComponent;
