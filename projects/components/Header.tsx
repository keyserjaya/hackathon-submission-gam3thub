"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useDynamicContext } from "../app/lib/dynamic";
import { GetUserDataByUsername, UpdateDoc } from '@/utils/firestore';

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Login state
  const { setShowAuthFlow, user } = useDynamicContext();

  const handleLogin = () => {
    // Simulate login logic
    console.log("Login button clicked");
    //setIsLoggedIn(true); // Update state to logged in
  };

  const handleLogout = () => {
    // Simulate logout logic
    console.log("Logout button clicked");
    //setIsLoggedIn(false); // Update state to logged out
  };

  useEffect(() => {
    const fetchData = async () => {
      await GetUserDataByUsername(user && user.userId ? user.userId : '');
    }
    fetchData();

    if (user)
    {
      const userId = user && user.userId ? user.userId : '';
      const username = user && user.username ? user.username : '';
      UpdateDoc({
        "userId": userId,
        "username": username
      });

      console.log("user: ", user);
    }
  }, [user != null]);

  return (
    <header className="bg-black/50 backdrop-blur-md max-w-4xl mx-auto flex justify-between items-center p-4 sticky top-0 z-50">
      {/* Left: Logo */}
      <div>
        <img
          src="/images/Gam3THub.png"
          alt="Gam3THub Logo"
          className="h-10"
        />
      </div>

      {/* Center: Search Bar */}
      <div className="flex-1 mx-4">
        <input
          type="text"
          placeholder="Search games..."
          className="w-full bg-gray-800 text-white text-sm px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-orange"
        />
      </div>

      {/* Right: Icons */}
      <div className="flex gap-4 items-center">
        <Link href="https://x.com/game3thub">
          <img src="/images/twitter-logo.svg" alt="Twitter" className="w-6 h-6" />
        </Link>
        <Link href="https://discord.gg/QwhS6Zxfh7">
          <img src="/images/discord-logo.svg" alt="Discord" className="w-6 h-6" />
        </Link>

        {/* Conditional Rendering: Login or User Icon */}
        {user ? (
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => setShowAuthFlow(false)}>
            <span className="text-white text-lg">👤</span>
            <span className="text-sm text-gray-400">Logout</span>
          </div>
          /*
          <div className="flex items-center gap-2 cursor-pointer" onClick={handleLogout}>
            <span className="text-white text-lg">👤</span>
            <span className="text-sm text-gray-400">Logout</span>
          </div>
          */
        ) : (
          <button
            onClick={() => setShowAuthFlow(true)}
            className="bg-orange text-black font-bold px-4 py-2 rounded"
          >
            Login
          </button>
          /*
          <button
            onClick={handleLogin}
            className="bg-orange text-black font-bold px-4 py-2 rounded"
          >
            Login
          </button>
          */
        )}
      </div>
    </header>
  );
};

export default Header;
