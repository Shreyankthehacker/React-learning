 import react from "react";
 
 const Shimmer = () => {
  return (
    <div className="flex flex-wrap justify-center gap-6 p-6">
      {[...Array(10)].map((_, i) => (
        <div
          key={i}
          className="w-72 animate-pulse rounded-lg border border-gray-300 bg-white p-4 shadow"
        >
          <div className="h-6 w-1/2 rounded bg-gray-300 mb-4"></div>
          <div className="h-4 w-full rounded bg-gray-300 mb-2"></div>
          <div className="h-4 w-5/6 rounded bg-gray-300 mb-2"></div>
          <div className="h-32 w-full rounded bg-gray-300 mb-4"></div>
          <div className="flex space-x-3">
            <div className="h-10 w-24 rounded bg-gray-300"></div>
            <div className="h-10 w-24 rounded bg-gray-300"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Shimmer;