import React, { useState } from "react";
import { nftData } from "./data";
import Gallery from "./components/Gallery";
import Details from "./components/Details";
import "./App.css";

function App() {
  const [selectedNFT, setSelectedNFT] = useState(null);
  const [filter, setFilter] = useState("");
  const [sort, setSort] = useState("");
  const [search, setSearch] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const [favorites, setFavorites] = useState([]);
  const [cart, setCart] = useState([]);

  const artists = [...new Set(nftData.map((n) => n.artist))];

  const processedNFTs = nftData
    .filter((n) => (filter ? n.artist === filter : true))
    .filter((n) => n.name.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => {
      if (sort === "asc") return a.price - b.price;
      if (sort === "desc") return b.price - a.price;
      return 0;
    });

  const toggleFavorite = (nft) => {
    setFavorites((prev) =>
      prev.find((f) => f.id === nft.id)
        ? prev.filter((f) => f.id !== nft.id)
        : [...prev, nft]
    );
  };

  const addToCart = (nft) => {
    if (!cart.find((c) => c.id === nft.id)) {
      setCart([...cart, nft]);
      alert(`${nft.name} added to cart!`);
    } else {
      alert(`${nft.name} is already in the cart! ⚠️`);
    }
  };

  return (
    <div className={`app ${darkMode ? "dark" : ""}`}>
      <h1 className="app-title">NFT Gallery</h1>

      {/* Controls */}
      <div className="controls">
        <input
          type="text"
          placeholder="🔍 Search NFT..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="">All Artists</option>
          {artists.map((artist, idx) => (
            <option key={idx} value={artist}>
              {artist}
            </option>
          ))}
        </select>
        <select value={sort} onChange={(e) => setSort(e.target.value)}>
          <option value="">Sort By</option>
          <option value="asc">Price: Low → High</option>
          <option value="desc">Price: High → Low</option>
        </select>
        <button
          className="toggle-btn"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? " Light" : " Dark"}
        </button>
      </div>

      {/* Gallery */}
      <Gallery
        nfts={processedNFTs}
        onSelect={setSelectedNFT}
        onFavorite={toggleFavorite}
        favorites={favorites}
        onAddToCart={addToCart}
      />

      {/* Modal */}
      {selectedNFT && (
        <Details
          nft={selectedNFT}
          onClose={() => setSelectedNFT(null)}
          onFavorite={toggleFavorite}
          isFavorite={favorites.some((f) => f.id === selectedNFT.id)}
          onAddToCart={addToCart}
        />
      )}
    </div>
  );
}

export default App;
