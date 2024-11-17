const GameGallery = () => {
  const games = [
    {
      name: "Space Nation",
      developer: "Space Nation Team",
      genre: "MMORPG",
      chainLogo: "/images/eth.svg",
      image: "/images/Space Nation.png",
      url: "https://spacenation.online/", // URL for the "Play Now" button
    },
    {
      name: "Heroes of Mavia",
      developer: "Skrice Studios",
      genre: "Casual",
      chainLogo: "/images/eth.svg",
      image: "/images/Heroes of Mavia.png",
      url: "https://play.google.com/store/apps/details?id=com.skrice.mavia", // URL for the "Play Now" button
    },
    {
      name: "World Shard",
      developer: "LowKick Games",
      genre: "Adventure",
      chainLogo: "/images/eth.svg",
      image: "/images/worldshard.png",
      url: "https://store.steampowered.com/app/2156390/WorldShards/", // URL for the "Play Now" button
    },
    {
      name: "Final Salvation",
      developer: "Ambrus Studio",
      genre: "Strategy",
      chainLogo: "/images/eth.svg",
      image: "/images/Final Salvation.png",
      url: "https://play.google.com/store/apps/details?id=com.ambrusstudio.e4c.finalsalvation", // URL for the "Play Now" button
    },{
      name: "Pixelverse",
      developer: "PixelVerse",
      genre: "Metaverse",
      chainLogo: "/images/eth.svg",
      image: "/images/pixelverse.png",
      url: "https://play.pixelverse.xyz/", // URL for the "Play Now" button
    },
    {
      name: "Revenge",
      developer: "Everreach Labs",
      genre: "Shooter",
      chainLogo: "/images/eth.svg",
      image: "/images/Revenge.png",
      url: "https://store.steampowered.com/agecheck/app/2709500/", // URL for the "Play Now" button
    },
    {
      name: "Oxya Origin",
      developer: "Oxya Origin",
      genre: "Battle Royale",
      chainLogo: "/images/eth.svg",
      image: "/images/Oxya Origin.png",
      url: "https://www.oxyaorigin.com/", // URL for the "Play Now" button
    },
    {
      name: "Wreck League",
      developer: "nWay",
      genre: "Fighting",
      chainLogo: "/images/eth.svg",
      image: "/images/Wreck League.png",
      url: "https://wreckleague.xyz/", // URL for the "Play Now" button
    },
    // Add more games as needed
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
      {games.map((game, index) => (
        <div
          key={index}
          className="bg-black border border-white rounded-lg overflow-hidden"
        >
          <div className="aspect-square">
            <img
              src={game.image}
              alt={game.name}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="p-2">
            <div className="flex items-center gap-2">
              <img
                src={game.chainLogo}
                alt="Chain Logo"
                className="w-4 h-4"
              />
              <h3 className="text-white text-sm font-bold">{game.name}</h3>
            </div>
            <div className="flex justify-between items-center mt-2">
              <div>
                <p className="text-gray-400 text-xs">{game.developer}</p>
                <p className="text-gray-400 text-xs">{game.genre}</p>
              </div>
              {/* Play Button with URL */}
              <a
                href={game.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-orange text-black font-bold text-sm px-6 py-2 rounded"
              >
                Play
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GameGallery;
