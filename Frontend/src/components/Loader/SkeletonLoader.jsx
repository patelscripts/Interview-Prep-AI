import React from "react";

const SkeletonLoader = () => {
  return (
    <div className="animate-pulse space-y-6 max-w-3xl">
      {/* Header */}
      <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-1/3"></div>

      {/* Question block */}
      <div className="space-y-3">
        <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-full"></div>
        <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-11/12"></div>
        <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-10/12"></div>
        <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-9/12"></div>
      </div>

      {/* Answer card */}
      <div className="bg-gray-200 dark:bg-gray-800 p-4 rounded-lg space-y-3">
        <div className="h-3 bg-gray-300 dark:bg-gray-600 rounded w-3/4"></div>
        <div className="h-3 bg-gray-300 dark:bg-gray-600 rounded w-2/3"></div>
        <div className="h-3 bg-gray-300 dark:bg-gray-600 rounded w-1/2"></div>
      </div>

      {/* Second block */}
      <div className="space-y-3 mt-6">
        <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-full"></div>
        <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-11/12"></div>
        <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-10/12"></div>
      </div>
    </div>
  );
};

export default SkeletonLoader;
