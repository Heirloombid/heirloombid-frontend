// frontend/src/components/LiveAuctions.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const LiveAuctions = () => {
  const [auctions, setAuctions] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/auctions')
      .then((res) => {
        setAuctions(res.data);
      })
      .catch((err) => {
        console.error('Error fetching auctions:', err);
      });
  }, []);

  return (
    <div>
      <h2>Live Auctions</h2>
      {auctions.length === 0 ? (
        <p>No live auctions right now.</p>
      ) : (
        <ul>
          {auctions.map((auction) => (
            <li key={auction.id}>
              <h3>{auction.title}</h3>
              <p>{auction.description}</p>
              <p>Starting Bid: ${auction.starting_bid}</p>
              <p>Ends: {new Date(auction.end_time).toLocaleString()}</p>
              {/* Bid button goes here later */}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LiveAuctions;
