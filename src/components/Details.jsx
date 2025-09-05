import React from "react";
import PropTypes from "prop-types";

const Details = ({ nft, onClose, onFavorite, isFavorite, onAddToCart }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2 className="modal-title">{nft.name}</h2>
        <img src={nft.image} alt={nft.name} className="modal-image" />
        <p className="modal-artist"><strong>Artist:</strong> {nft.artist}</p>
        <p className="modal-price"><strong>Price:</strong> {nft.price} ETH</p>
        <p className="modal-description">{nft.description || "No description available."}</p>

        <div className="modal-buttons">
          <button className="modal-favorite-btn" onClick={() => onFavorite(nft)}>
            {isFavorite ? "❤️ Favorited" : "🤍 Favorite"}
          </button>
          <button className="modal-buy-btn" onClick={() => onAddToCart(nft)}>
            Buy Now
          </button>
        </div>

        <button className="modal-close" onClick={onClose}>✖ Close</button>
      </div>
    </div>
  );
};

Details.propTypes = {
  nft: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
  onFavorite: PropTypes.func.isRequired,
  isFavorite: PropTypes.bool,
  onAddToCart: PropTypes.func.isRequired,
};

export default Details;







