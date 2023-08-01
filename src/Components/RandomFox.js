import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RandomFox = () => {
  const [foxImageUrl, setFoxImageUrl] = useState('');

  useEffect(() => {
    // Fetch the data from the API
    const fetchRandomFox = async () => {
      try {
        const response = await axios.get('https://randomfox.ca/floof/');
        const imageUrl = response.data.image;
        setFoxImageUrl(imageUrl);
      } catch (error) {
        console.error('Error fetching the random fox:', error);
      }
    };

    fetchRandomFox();
  }, []);

  return (
    <div>
      {foxImageUrl ? (
        <img className="fox-img" src={foxImageUrl} alt="Random Fox" />
      ) : (
        <p>(They Must Be Loading)</p>
      )}
    </div>
  );
};

export default RandomFox;
