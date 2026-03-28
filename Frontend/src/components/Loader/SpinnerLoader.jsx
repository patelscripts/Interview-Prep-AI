import React from 'react'

const SpinnerLoader = () => {
  return (
    <div role = "status" className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin">
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default SpinnerLoader;
