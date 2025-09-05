import React from "react";
import PropTypes from "prop-types";

const NFTCard = ({ nft, onSelect, onFavorite, favorites, onAddToCart }) => {
  const isFav = favorites.find((f) => f.id === nft.id);

  return (
    <div className="nft-card">
      <img src={nft.image} alt={nft.name} className="nft-image" onClick={() => onSelect(nft)} />
      <h3 className="nft-title">{nft.name}</h3>
      <p className="nft-artist">By {nft.artist}</p>
      <span className="nft-price">{nft.price} ETH</span>

      <div className="nft-card-buttons">
        <button className="favorite-btn" onClick={() => onFavorite(nft)}>
          {isFav ? "❤️ Favorited" : "🤍 Favorite"}
        </button>
        <button className="buy-btn" onClick={() => onAddToCart(nft)}>Buy Now</button>
      </div>
    </div>
  );
};

NFTCard.propTypes = {
  nft: PropTypes.object.isRequired,
  onSelect: PropTypes.func.isRequired,
  onFavorite: PropTypes.func.isRequired,
  favorites: PropTypes.array.isRequired,
  onAddToCart: PropTypes.func.isRequired,
};

export default NFTCard;

