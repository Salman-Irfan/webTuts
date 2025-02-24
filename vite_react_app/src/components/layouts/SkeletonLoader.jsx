import React from 'react';

const SkeletonLoader = () => {
    return (
        <div className="space-y-4 p-4">
            {/* Title Skeleton */}
            <div className="h-6 w-3/4 bg-gray-300 rounded-md animate-pulse"></div>

            {/* Content Skeleton */}
            <div className="space-y-2">
                <div className="h-4 w-full bg-gray-300 rounded-md animate-pulse"></div>
                <div className="h-4 w-5/6 bg-gray-300 rounded-md animate-pulse"></div>
                <div className="h-4 w-4/6 bg-gray-300 rounded-md animate-pulse"></div>
            </div>

            {/* Avatar with Text */}
            <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gray-300 rounded-full animate-pulse"></div>
                <div className="h-4 w-1/3 bg-gray-300 rounded-md animate-pulse"></div>
            </div>
        </div>
    );
};

export default SkeletonLoader;
