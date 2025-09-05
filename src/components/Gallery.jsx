import React from "react";
import PropTypes from "prop-types";
import NFTCard from "./NFTCard";

const Gallery = ({ nfts, onSelect, onFavorite, favorites, onAddToCart }) => {
  if (!nfts.length)
    return <p className="empty-state">No NFTs found. Try adjusting your filters.</p>;

  return (
    <div className="gallery">
      {nfts.map((nft) => (
        <NFTCard
          key={nft.id}
          nft={nft}
          onSelect={onSelect}
          onFavorite={onFavorite}
          favorites={favorites}
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
  );
};

Gallery.propTypes = {
  nfts: PropTypes.array.isRequired,
  onSelect: PropTypes.func.isRequired,
  onFavorite: PropTypes.func.isRequired,
  favorites: PropTypes.array.isRequired,
  onAddToCart: PropTypes.func.isRequired,
};

export default Gallery;






