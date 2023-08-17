"use client";

export default function LoadingSkeleton() {
  return (
    <div className="Experience___Item flex flex-col gap-1">
      <div className="loading-skeleton h-6 w-2/3 bg-gray-200 rounded animate-pulse my-1"></div>
      <div className="loading-skeleton h-4 w-1/2 bg-gray-200 rounded animate-pulse my-1"></div>
      <div className="loading-skeleton h-36 w-full bg-gray-200 rounded animate-pulse my-1"></div>
    </div>
  );
}
