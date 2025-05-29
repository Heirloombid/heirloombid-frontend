import React, { useState } from 'react';
import './BidModal.css';

const BidModal = ({ auction, onClose }) => {
  const [amount, setAmount] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Later this will POST to backend — mocked for now:
    if (parseFloat(amount) > 0) {
      setMessage('Bid submitted!');
      setTimeout(() => {
        onClose();
      }, 1000);
    } else {
      setMessage('Enter a valid bid.');
    }
  };

  return (
    <div className="modal-backdrop">
      <div className="modal-box">
        <h3>Place a Bid for: <strong>{auction.title}</strong></h3>
        <p>{auction.description}</p>
        <form onSubmit={handleSubmit}>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter bid amount"
          />
          <button type="submit">Submit Bid</button>
          <button type="button" onClick={onClose} className="close-btn">Cancel</button>
        </form>
        {message && <p className="message">{message}</p>}
      </div>
    </div>
  );
};

export default BidModal;
