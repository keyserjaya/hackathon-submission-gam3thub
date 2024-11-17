"use client";

import { useEffect, useState } from "react";
import { useDynamicContext, useUserWallets } from '@dynamic-labs/sdk-react-core';
import { GetUserDataByUsername as GetUserDataByUserId, GetUserData, UpdateQuest } from '@/utils/firestore';

var questData = [
  { id: 1, name: "Follow us on X", completed: false, hasSubmit: false, link: "https://x.com/game3thub", description: "Click GO to open the link, then follow us on twitter", questType: 1 },
  { id: 2, name: "Follow Pixelverse on X", completed: false, hasSubmit: false, link: "https://x.com/pixelverse_xyz", description: "Click GO to open the link, then follow Pixelverse on twitter", questType: 1  },
  { id: 3, name: "Play Heroes of Mavia", completed: false, hasSubmit: false, link: "https://play.google.com/store/apps/details?id=com.skrice.mavia", description: "Click GO to open the link, then download Heroes of Mavia, screenshot the gameplay", questType: 2  },
];

const QuestPage = () => {
  const [quests, setQuests] = useState(questData);
  const { user, primaryWallet } = useDynamicContext();

  const [showPopup, setShowPopup] = useState(false); // Controls popup visibility
  const [selectedQuest, setSelectedQuest] = useState<number | null>(null); // Tracks selected quest
  const [googleDriveLink, setGoogleDriveLink] = useState(""); // Input value for Google Drive link

  const handleGo = (link: string) => {
    window.open(link, "_blank"); // Opens quest link in a new tab
  };

  const handleCheck = (id: number) => {
    setSelectedQuest(id);
    setShowPopup(true); // Show popup for quest check
  };

  const userWallets = useUserWallets();
  const handleSubmit = async () => {
    const range = selectedQuest ? questData[selectedQuest].name + "!A1" : "Debug!A1";
    const userId = user && user.userId ? user.userId : "";
    const userName = user && user.username ? user.username : userId;

    var walletAddress = "0x1B0f8FAE193873F453a7dE8e469468EDf8eedDBD";
    if (userWallets && userWallets.length > 0)
    {
      walletAddress = userWallets[0].address;
      for(var i = 0; i < userWallets.length; i++)
      {
        if (userWallets[i].chain == "Flow") 
        {
          walletAddress = userWallets[i].address;
          break;
        }
      }
    }

    try {
      const response = await fetch("api/appendToSheet", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ 
          range: range, 
          name: userName, 
          walletAddress: walletAddress, 
          url: googleDriveLink, 
          verificationLink: "https://gam3thub.vercel.app/api/verify/?userId=" + userId 
        }),
      });

      if (response.ok) {
        alert(
          `You have submitted this quest! The admin will review and ensure you're eligible for the airdrop season.`
        );

        // Mark quest as completed
        setQuests((prevQuests) =>
          quests.map((quest) =>
            quest.id === selectedQuest ? { ...quest, hasSubmit: true } : quest
          )
        );

        UpdateQuest(quests);
      } else {
        const errorData = await response.json();
        alert(`Error: ` + errorData);
      }
    } catch (error) {
      alert(`Error: ` + error);
      console.error(error);
    }

    setShowPopup(false); // Close popup
    setGoogleDriveLink(""); // Reset input field
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    setGoogleDriveLink(""); // Reset input field
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userId = user && user.userId ? user.userId : "";
        const data = await GetUserDataByUserId(userId);
        if (!data || !data.quests) 
        {
          await UpdateQuest(questData);
        }
        else 
        {
          setQuests(data.quests);
        }
      } catch (error) {
        console.error("Error fetching Firestore data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-xl font-bold text-white mb-6">Available Quests</h1>
      <ul className="space-y-4">
        {quests.map((quest) => (
          <li
            key={quest.id}
            className="bg-gray-800 text-white p-4 rounded-lg shadow flex justify-between items-center"
          >
            {/* Quest Name */}
            <span>{quest.name}</span>

            {/* Buttons */}
            <div className="flex gap-2">
              {!quest.hasSubmit ? (
                <>
                  <button
                    onClick={() => handleGo(quest.link)}
                    className="bg-orange text-black font-bold px-4 py-2 rounded"
                  >
                    Go
                  </button>
                  <button
                    onClick={() => handleCheck(quest.id)}
                    className="bg-gray-600 text-white font-bold px-4 py-2 rounded"
                  >
                    Submit
                  </button>
                </>
              ) : (
                <span className="text-green-500 font-bold">✅ Submited</span>
              )}
            </div>
          </li>
        ))}
      </ul>

      {/* Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <h2 className="text-lg font-bold text-black mb-2">
              Quest {selectedQuest}: Submit Your Work
            </h2>
            <p className="text-gray-600 mb-4">
              Provide your Google Drive link below to complete the quest.
            </p>
            <input
              type="text"
              value={googleDriveLink}
              onChange={(e) => setGoogleDriveLink(e.target.value)}
              placeholder={selectedQuest && questData.find(c => c.id == selectedQuest)?.questType == 1 ? "Enter your Google Drive link (twitter screenshot)" : "Enter your Google Drive link (gameplay screenshot)" } 
              className="w-full bg-gray-100 text-black text-sm p-2 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-orange"
            />
            <div className="flex justify-end gap-2">
              <button
                onClick={handleClosePopup}
                className="bg-gray-400 text-white font-bold px-4 py-2 rounded"
              >
                Close
              </button>
              <button
                onClick={handleSubmit}
                className="bg-orange text-black font-bold px-4 py-2 rounded"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuestPage;
