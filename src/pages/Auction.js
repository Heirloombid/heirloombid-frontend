import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function Auction() {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/auctions/${id}`).then((res) => {
      setItem(res.data);
    });
  }, [id]);

  if (!item) return <div>Loading...</div>;

  return (
    <div>
      <h2>{item.title}</h2>
      <img src={item.image_url} alt={item.title} width="300"/>
      <p>{item.description}</p>
      <p>Current Bid: ${item.current_bid || item.starting_bid}</p>
    </div>
  );
}

export default Auction;
