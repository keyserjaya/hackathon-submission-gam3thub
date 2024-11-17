"use client";

const BottomBar = () => {
  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 backdrop-blur-md px-6 py-3 rounded-full flex justify-around items-center w-[90%] max-w-md shadow-lg border border-[rgba(255,255,255,0.3)] z-50">
      <a href="/" className="text-white hover:text-orange flex flex-col items-center">
        {/* Home Emoji */}
        <span className="text-2xl">🏠</span>
        <span className="text-xs">Home</span>
      </a>
      <a href="/quest" className="text-white hover:text-orange flex flex-col items-center">
        {/* Quest Emoji */}
        <span className="text-2xl">🗺️</span>
        <span className="text-xs">Quest</span>
      </a>
      <a href="/profile" className="text-white hover:text-orange flex flex-col items-center">
        {/* Profile Emoji */}
        <span className="text-2xl">👤</span>
        <span className="text-xs">Profile</span>
      </a>
    </div>
  );
};

export default BottomBar;
