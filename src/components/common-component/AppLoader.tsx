"use client";

import React from "react";

interface AppLoaderProps {
  isLoading?: boolean;
  size?: "sm" | "md" | "lg";
  text?: string;
}

const AppLoader: React.FC<AppLoaderProps> = ({
  isLoading = true,
  size = "md",
  text = "Loading...",
}) => {
  if (!isLoading) {
    return null;
  }

  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-16 h-16",
  };

  const textClasses = {
    sm: "text-xs mt-3",
    md: "text-sm mt-4",
    lg: "text-base mt-6",
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-sm">
      <div className="bg-white rounded-2xl p-8 sm:p-12 shadow-2xl flex flex-col items-center">
        {/* Animated loader */}
        <div className="relative">
          {/* Outer rotating circle */}
          <div
            className={`${sizeClasses[size]} rounded-full border-4 border-slate-200 absolute inset-0 animate-spin`}
            style={{
              borderTopColor: "rgb(34, 197, 94)",
              borderRightColor: "rgb(59, 130, 246)",
              borderBottomColor: "rgb(168, 85, 247)",
              borderLeftColor: "rgb(34, 197, 94)",
              animationDuration: "2s",
            }}
          ></div>

          {/* Inner pulsing circle */}
          <div
            className={`${sizeClasses[size]} rounded-full border-4 border-transparent absolute inset-0 animate-pulse`}
            style={{
              borderTopColor: "rgba(34, 197, 94, 0.3)",
            }}
          ></div>

          {/* Center dot */}
          <div className={`${sizeClasses[size]} flex items-center justify-center`}>
            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-gradient-to-r from-cyan-400 to-purple-400"></div>
          </div>
        </div>

        {/* Loading text */}
        <p className={`${textClasses[size]} text-gray-700 font-medium text-center`}>
          {text}
        </p>

        {/* Loading dots animation */}
        <div className="flex gap-1 mt-4">
          <span
            className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce"
            style={{ animationDelay: "0s" }}
          ></span>
          <span
            className="w-1.5 h-1.5 bg-purple-400 rounded-full animate-bounce"
            style={{ animationDelay: "0.2s" }}
          ></span>
          <span
            className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce"
            style={{ animationDelay: "0.4s" }}
          ></span>
        </div>
      </div>
    </div>
  );
};

export default AppLoader;
