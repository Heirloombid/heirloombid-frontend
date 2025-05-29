import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Home() {
  const [auctions, setAuctions] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/auctions/live').then((res) => {
      setAuctions(res.data);
    });
  }, []);

  return (
    <div>
      <h1>Live Auctions</h1>
      <ul>
        {auctions.map(item => (
          <li key={item.id}>
            <Link to={`/auction/${item.id}`}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
